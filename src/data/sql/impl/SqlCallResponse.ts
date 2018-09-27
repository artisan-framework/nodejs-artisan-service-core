import ISqlCallResponse from '../ISqlCallResponse';
import ISqlDatabase from 'artisan-core-data/lib/sql/ISqlDatabase';
import ISqlCommand from 'artisan-core-data/lib/sql/ISqlCommand';
import Verify from 'artisan-core/lib/exceptions/Verify';

/**
 * SqlCallResponse is a standard implementation of ISqlCallResponse.
 */
class SqlCallResponse implements ISqlCallResponse {
   protected _database: ISqlDatabase;
   protected _dbCommand: ISqlCommand;

   /**
    * Creates a new instance.
    * @param  {ISqlDatabase} database - The database instance.
    * @param  {ISqlCommand} dbCommand - The command that represents the statements executed against the database.
    */
   constructor(database: ISqlDatabase, dbCommand: ISqlCommand) {
      Verify.that(database, 'database').isNotNull();
      Verify.that(dbCommand, 'dbCommand').isNotNull();

      this._database = database;
      this._dbCommand = dbCommand;
   }

   public getValue(name: string): any {
      return this._dbCommand.getOutputParameter(name);
   }
}

export default SqlCallResponse;
