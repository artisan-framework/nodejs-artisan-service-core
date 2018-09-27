import IQuerySqlCallDelegate from '../IQuerySqlCallDelegate';
import SqlCall from './SqlCall';
import SqlCallQueryResponse from './SqlCallQueryResponse';
import ISqlDatabase from 'artisan-core-data/lib/sql/ISqlDatabase';
import ISqlCommand from 'artisan-core-data/lib/sql/ISqlCommand';
import DataException from 'artisan-core-data/lib/exceptions/DataException';

/**
 * QuerySqlCall is an implementation of SqlCall that is used to execute statements
 * that expect one or more result sets to be returned.
 */
class QuerySqlCall<T> extends SqlCall<T> {
    private _queryDelegate: IQuerySqlCallDelegate<T>;

    /**
     * Creates a new instance.
     * @param  {ISqlDatabase} sqlDatabase - The database instance.
     * @param  {IQuerySqlCallDelegate<T>} delegate - The delegate used to execute the call.
     */
    constructor(sqlDatabase: ISqlDatabase, delegate: IQuerySqlCallDelegate<T>) {
        super(sqlDatabase, delegate);

        this._queryDelegate = delegate;
    }

    protected async executeCall(dbCommand: ISqlCommand): Promise<T> {
        try {
            const reader = await this._sqlDatabase.executeReader(dbCommand);

            const response = new SqlCallQueryResponse(this._sqlDatabase, dbCommand, reader);
            const result = this._queryDelegate.Translate(response);

            return result;
        }
        catch (ex) {
            throw new DataException('An error occurred while attempting to execute the query.', ex);
        }
    }
}

export default QuerySqlCall;
