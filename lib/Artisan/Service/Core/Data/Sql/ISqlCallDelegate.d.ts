import ISqlCallRequest from './ISqlCallRequest';

/**
 * Contains the details of a particular statement that is used to execute the call
 * against the database, and return the final result.
 */
interface ISqlCallDelegate<T> {
    /**
     * The name of the stored procedure being called.
     */
    StatementName: string;

    /**
     * The query type, e.g. StoredProcedure.
     */
    QueryType: string;

    /**
     * Initializes the call by adding the necessary parameters and values to be sent along
     * with the request.
     */
    Prepare(request: ISqlCallRequest);
}

export default ISqlCallDelegate;