import ISqlDataReader from 'artisan-core-data/lib/sql/ISqlDataReader';
import ISqlCallResponse from './ISqlCallResponse';

/**
 * ISqlCallQueryResponse is a specific type of response that contains one or more
 * results returned by the statement executed against the database.
 */
interface ISqlCallQueryResponse extends ISqlCallResponse {
    /**
     * Gets the reader that contains the result sets.
     */
    reader: ISqlDataReader;
}

export default ISqlCallQueryResponse;
