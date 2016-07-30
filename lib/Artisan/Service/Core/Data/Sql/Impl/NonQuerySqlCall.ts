///<reference path="../../../../../../typings/artisan/artisan-core-data.d.ts"/>

import Artisan from 'artisan-framework';
import INonQuerySqlCallDelegate from '../INonQuerySqlCallDelegate';
import SqlCall from './SqlCall';
import SqlCallResponse from './SqlCallResponse';

/**
 * NonQuerySqlCall is an implementation of SqlCall that is used to execute statements
 * that do not expect result sets to be returned.
 */
class NonQuerySqlCall<T> extends SqlCall<T> {
   private _nonQueryDelegate: INonQuerySqlCallDelegate<T>;
   
   /**
    * Creates a new instance.
    * @param  {Artisan.Core.Data.Sql.ISqlDatabase} sqlDatabase - The database instance.
    * @param  {INonQuerySqlCallDelegate<T>} delegate - The delegate used to execute the call.
    */
   constructor(sqlDatabase: Artisan.Core.Data.Sql.ISqlDatabase, delegate: INonQuerySqlCallDelegate<T>) {
      super(sqlDatabase, delegate);

      this._nonQueryDelegate = delegate;
   }

   protected async executeCall(dbCommand: Artisan.Core.Data.Sql.ISqlCommand): Promise<T> {
      try {
         await this._sqlDatabase.executeNonQuery(dbCommand);
         
         var response = new SqlCallResponse(this._sqlDatabase, dbCommand);
         var result = this._nonQueryDelegate.Translate(response);
         
         return result;
      }
      catch (ex) {
         throw new Artisan.Core.Data.Exceptions.DataException('An error occurred while attempting to execute the specified command.', ex);
      }
   }
}

export default NonQuerySqlCall;