///<reference path="../../../../../typings/artisan/artisan-core-data.d.ts"/>

import ISqlCallResponse from './ISqlCallResponse';

/**
 * ISqlCallQueryResponse is a specific type of response that contains one or more
 * results returned by the statement executed against the database.
 */
interface ISqlCallQueryResponse extends ISqlCallResponse {
    /**
     * Gets the reader that contains the result sets.
     */
    reader: Artisan.Core.Data.Sql.ISqlDataReader;
}

export default ISqlCallQueryResponse;