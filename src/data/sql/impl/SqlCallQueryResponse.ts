import ISqlCommand from 'artisan-core-data/lib/sql/ISqlCommand';
import ISqlDatabase from 'artisan-core-data/lib/sql/ISqlDatabase';
import ISqlDataReader from 'artisan-core-data/lib/sql/ISqlDataReader';
import Verify from 'artisan-core/lib/exceptions/Verify';
import ISqlCallQueryResponse from '../ISqlCallQueryResponse';
import SqlCallResponse from './SqlCallResponse';

/**
 * SqlCallQueryResponse is a standard implementation of ISqlCallQueryResponse.
 */
class SqlCallQueryResponse extends SqlCallResponse implements ISqlCallQueryResponse {
   /**
    * Creates a new instance.
    * @param  {ISqlDatabase} database - The database instance.
    * @param  {ISqlCommand} dbCommand - The command that represents the statement executed against the database.
    * @param  {ISqlDataReader} reader - The reader that contains the result sets returned by the statement.
    */
   constructor(database: ISqlDatabase, dbCommand: ISqlCommand, reader: ISqlDataReader) {
      super(database, dbCommand);

      Verify.that(reader, 'reader').isNotNull();

      this.reader = reader;
   }

   public reader: ISqlDataReader;
}

export default SqlCallQueryResponse;
