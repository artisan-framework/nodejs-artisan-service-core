import IDao from '../IDao';
import ISqlCallFactory from './ISqlCallFactory';
import ISqlCallDelegate from './ISqlCallDelegate';
import ISqlDatabase from 'artisan-core-data/lib/sql/ISqlDatabase';
import Verify from 'artisan-core/lib/exceptions/Verify';

/**
 * SqlCallDao is a base implementation of IDao that can be used to execute SQL statements,
 * using an ISqlCallDelegate to execute the call.
 */
class SqlCallDao implements IDao {
    private _database: ISqlDatabase;
    private _callFactory: ISqlCallFactory;

    /**
     * Creates a new instance.
     * @param  {ISqlDatabase} database - The database instance.
     * @param  {ISqlCallFactory} callFactory - The ISqlCallFactory used to create SqlCall instances.
     */
    constructor(database: ISqlDatabase, callFactory: ISqlCallFactory) {
        Verify.that(database, 'database').isNotNull();
        Verify.that(callFactory, 'callFactory').isNotNull;

        this._database = database;
        this._callFactory = callFactory;
    }

    /**
     * Executes the specified command against the database.
     * @param  {ISqlCallDelegate<T>} callDelegate - The delegate used to execute the call.
     * @returns Promise - The result returned by the call.
     */
    protected async execute<T>(callDelegate: ISqlCallDelegate<T>): Promise<T> {
        Verify.that(callDelegate, 'callDelegate').isNotNull();

        const sqlCall = this._callFactory.getSqlCall<T>(this._database, callDelegate);

        return await sqlCall.execute();
    }
}

export default SqlCallDao;
