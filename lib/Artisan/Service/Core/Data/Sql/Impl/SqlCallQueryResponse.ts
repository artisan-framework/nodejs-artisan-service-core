///<reference path="../../../../../../typings/artisan/artisan.d.ts"/>
///<reference path="../../../../../../typings/artisan/artisan-core.d.ts"/>
///<reference path="../../../../../../typings/artisan/artisan-core-data.d.ts"/>

import Artisan from 'artisan-framework';
import ISqlCallQueryResponse from '../ISqlCallQueryResponse';
import SqlCallResponse from './SqlCallResponse';
import Verify = Artisan.Core.Exceptions.Verify;

/**
 * SqlCallQueryResponse is a standard implementation of ISqlCallQueryResponse.
 */
class SqlCallQueryResponse extends SqlCallResponse implements ISqlCallQueryResponse {
   /**
    * Creates a new instance.
    * @param  {Artisan.Core.Data.Sql.ISqlDatabase} database - The database instance.
    * @param  {Artisan.Core.Data.Sql.ISqlCommand} dbCommand - The command that represents the statement executed against the database.
    * @param  {Artisan.Core.Data.Sql.ISqlDataReader} reader - The reader that contains the result sets returned by the statement.
    */
   constructor(database: Artisan.Core.Data.Sql.ISqlDatabase, dbCommand: Artisan.Core.Data.Sql.ISqlCommand, reader: Artisan.Core.Data.Sql.ISqlDataReader) {
      super(database, dbCommand);

      Verify.that(reader, 'reader').isNotNull();
      
      this.reader = reader;
   }

   reader: Artisan.Core.Data.Sql.ISqlDataReader;
}

export default SqlCallQueryResponse;