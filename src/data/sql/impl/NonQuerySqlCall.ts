import INonQuerySqlCallDelegate from '../INonQuerySqlCallDelegate';
import SqlCall from './SqlCall';
import SqlCallResponse from './SqlCallResponse';
import ISqlDatabase from 'artisan-core-data/lib/sql/ISqlDatabase';
import ISqlCommand from 'artisan-core-data/lib/sql/ISqlCommand';
import DataException from 'artisan-core-data/lib/exceptions/DataException';

/**
 * NonQuerySqlCall is an implementation of SqlCall that is used to execute statements
 * that do not expect result sets to be returned.
 */
class NonQuerySqlCall<T> extends SqlCall<T> {
   private _nonQueryDelegate: INonQuerySqlCallDelegate<T>;

   /**
    * Creates a new instance.
    * @param  {ISqlDatabase} sqlDatabase - The database instance.
    * @param  {INonQuerySqlCallDelegate<T>} delegate - The delegate used to execute the call.
    */
   constructor(sqlDatabase: ISqlDatabase, delegate: INonQuerySqlCallDelegate<T>) {
      super(sqlDatabase, delegate);

      this._nonQueryDelegate = delegate;
   }

   protected async executeCall(dbCommand: ISqlCommand): Promise<T> {
      try {
         await this._sqlDatabase.executeNonQuery(dbCommand);

         const response = new SqlCallResponse(this._sqlDatabase, dbCommand);
         const result = this._nonQueryDelegate.Translate(response);

         return result;
      }
      catch (ex) {
         throw new DataException('An error occurred while attempting to execute the specified command.', ex);
      }
   }
}

export default NonQuerySqlCall;
