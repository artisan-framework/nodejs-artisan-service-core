import ISqlDatabase from 'artisan-core-data/lib/sql/ISqlDatabase';
import ISqlCall from './ISqlCall';
import ISqlCallDelegate from './ISqlCallDelegate';

/**
 * ISqlCallFactory is used by the SqlCallDAO implementation to create the SQL call instance,
 * based on the underlying database provider.
 */
interface ISqlCallFactory {
    /**
     * Creates a new SqlCall instance.
     * @param  {ISqlDatabase} sqlDatabase - The database instance.
     * @param  {ISqlCallDelegate<T>} sqlCallDelegate - The delegate used to execute the call.
     * @returns ISqlCall - The newly created SqlCall instance.
     */
    getSqlCall<T>(sqlDatabase: ISqlDatabase, sqlCallDelegate: ISqlCallDelegate<T>): ISqlCall<T>;
}

export default ISqlCallFactory;
