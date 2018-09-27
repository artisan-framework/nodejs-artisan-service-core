import ISqlCommand from 'artisan-core-data/lib/sql/ISqlCommand';
import ISqlDatabase from 'artisan-core-data/lib/sql/ISqlDatabase';
import ISqlParameter from 'artisan-core-data/lib/sql/ISqlParameter';
import KeyValuePair from 'artisan-core/lib/collections/KeyValuePair';
import Verify from 'artisan-core/lib/exceptions/Verify';
import ISqlCallRequest from '../ISqlCallRequest';

/**
 * SqlCallRequest is a standard implementation of ISqlCallRequest.
 */
class SqlCallRequest implements ISqlCallRequest {
   private _database: ISqlDatabase;
   private _command: ISqlCommand;

   /**
    * Creates a new instance.
    * @param  {ISqlDatabase} database - The database instance.
    * @param  {ISqlCommand} command - The command that represents the statements executed against the database.
    */
   constructor(database: ISqlDatabase, command: ISqlCommand) {
      Verify.that(database, 'database').isNotNull();
      Verify.that(command, 'command').isNotNull();

      this._database = database;
      this._command = command;
   }

   public parameters: ISqlParameter[] = [];

   public addInParameter(name: string, value: any, type: string, ...options: any[]): void {
      this._command.addInParameter(name, value, type, ...options);
   }

   public addInListParameter(name: string, value: any, type: string, ...options: any[]): void {
      this._command.addInListParameter(name, value, type, ...options);
   }

   public addInDictionaryParameter(name: string, value: KeyValuePair<any, any>[], keyType: string, keyOption: any, valueType: string, valueOption: any): void {
      this._command.addInDictionaryParameter(name, value, keyType, keyOption, valueType, valueOption);
   }

   public addOutParameter(name: string, type: string, ...options: any[]): void {
      this._command.addOutParameter(name, type, ...options);
   }

   public addInOutParameter(name: string, value: any, type: string, ...options: any[]): void {
      this._command.addInOutParameter(name, value, type, ...options);
   }
}

export default SqlCallRequest;
