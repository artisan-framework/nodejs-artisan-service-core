///<reference path="../../../../../../typings/artisan/artisan-core-data.d.ts"/>

import Artisan from 'artisan-framework';
import IQuerySqlCallDelegate from '../IQuerySqlCallDelegate';
import SqlCall from './SqlCall';
import SqlCallQueryResponse from './SqlCallQueryResponse';

/**
 * QuerySqlCall is an implementation of SqlCall that is used to execute statements
 * that expect one or more result sets to be returned.
 */
class QuerySqlCall<T> extends SqlCall<T> {
    private _queryDelegate: IQuerySqlCallDelegate<T>;
   
    /**
     * Creates a new instance.
     * @param  {Artisan.Core.Data.Sql.ISqlDatabase} sqlDatabase - The database instance.
     * @param  {IQuerySqlCallDelegate<T>} delegate - The delegate used to execute the call.
     */
    constructor(sqlDatabase: Artisan.Core.Data.Sql.ISqlDatabase, delegate: IQuerySqlCallDelegate<T>) {
        super(sqlDatabase, delegate);

        this._queryDelegate = delegate;
    }

    protected async executeCall(dbCommand: Artisan.Core.Data.Sql.ISqlCommand): Promise<T> {
        try {
            var reader = await this._sqlDatabase.executeReader(dbCommand);

            var response = new SqlCallQueryResponse(this._sqlDatabase, dbCommand, reader);
            var result = this._queryDelegate.Translate(response);

            return result;
        }
        catch (ex) {
            throw new Artisan.Core.Data.Exceptions.DataException('An error occurred while attempting to execute the query.', ex);
        }
    }
}

export default QuerySqlCall;