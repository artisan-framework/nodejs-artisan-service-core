import DataException from 'artisan-core-data/lib/exceptions/DataException';
import ISqlCommand from 'artisan-core-data/lib/sql/ISqlCommand';
import ISqlDatabase from 'artisan-core-data/lib/sql/ISqlDatabase';
import ISqlTransaction from 'artisan-core-data/lib/sql/ISqlTransaction';
import Verify from 'artisan-core/lib/exceptions/Verify';
import ISqlCall from '../ISqlCall';
import ISqlCallDelegate from '../ISqlCallDelegate';
import SqlCallRequest from './SqlCallRequest';

/**
 * SqlCall is a base implementation for executing statements.
 */
abstract class SqlCall<T> implements ISqlCall<T> {
   protected _sqlDatabase: ISqlDatabase;
   protected _delegate: ISqlCallDelegate<T>;

   /**
    * Creates a new instance.
    * @param  {ISqlDatabase} sqlDatabase - The database instance.
    * @param  {IQuerySqlCallDelegate<T>} delegate - The delegate used to execute the call.
    */
   constructor(sqlDatabase: ISqlDatabase, delegate: ISqlCallDelegate<T>) {
      Verify.that(sqlDatabase, 'sqlDatabase').isNotNull();
      Verify.that(delegate, 'delegate').isNotNull();

      this._sqlDatabase = sqlDatabase;
      this._delegate = delegate;
   }

   public async execute(): Promise<T> {
      try {
         const dbCommand = await this._sqlDatabase.createCommand(this._delegate.StatementName);

         try {
            const request = new SqlCallRequest(this._sqlDatabase, dbCommand);
            this._delegate.Prepare(request);

            return await this.executeTransaction(dbCommand);
         }
         finally {
            dbCommand.dispose();
         }
      }
      catch (ex) {
         throw new DataException('An error occurred while attempting to execute the call.', ex);
      }
   }

   private async executeTransaction(dbCommand: ISqlCommand): Promise<any> {
      try {
         const transaction: ISqlTransaction = await dbCommand.beginTransaction();

         try {
            const result: any = await this.executeCall(dbCommand);
            await transaction.commit();

            return result;
         }
         catch (ex) {
            await transaction.rollback();

            throw ex;
         }
      }
      catch (ex) {
         throw new DataException(
            `An error occurred while attempting to execute the query [${this._delegate.StatementName}].`, ex);
      }
   }

   /**
    * Executes the specified command against the database.
    */
   protected abstract executeCall(dbCommand: ISqlCommand): Promise<T>;
}

export default SqlCall;
