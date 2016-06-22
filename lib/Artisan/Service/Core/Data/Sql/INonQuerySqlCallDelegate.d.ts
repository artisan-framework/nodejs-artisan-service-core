import ISqlCallDelegate from './ISqlCallDelegate';
import ISqlCallResponse from './ISqlCallResponse';

/**
 * INonQuerySqlCallDelegate is used to execute statements that are not simply
 * queries.  The usually represent creates, updates, etc., and do not return
 * a result set.
 */
interface INonQuerySqlCallDelegate<T> extends ISqlCallDelegate<T> {
    /**
     * Gets the final result from the specified response.
     * @param  {ISqlCallResponse} response - The response returned by the call.
     * @returns T - The final result to be returned to the caller.
     */
    Translate(response: ISqlCallResponse): T;
}

export default INonQuerySqlCallDelegate;