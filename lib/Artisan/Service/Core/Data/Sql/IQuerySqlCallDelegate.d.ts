import ISqlCallDelegate from './ISqlCallDelegate';
import ISqlCallQueryResponse from './ISqlCallQueryResponse';

/**
 * IQuerySqlCallDelegate is used to execute queries against the database.
 */
interface IQuerySqlCallDelegate<T> extends ISqlCallDelegate<T> {
    /**
     * Gets the final result from the specified response.
     * @param  {ISqlCallResponse} response - The response returned by the call.
     * @returns T - The final result to be returned to the caller.
     */
    Translate(response: ISqlCallQueryResponse): T;
}

export default IQuerySqlCallDelegate;