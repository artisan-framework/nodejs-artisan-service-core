/**
 * ISqlCall is used to execute a call against the database. 
 */
interface ISqlCall<T> {
    /**
     * Executes the call against the database.
     * @returns Promise - The result of the call.
     */
    execute(): Promise<T>;
}

export default ISqlCall;
