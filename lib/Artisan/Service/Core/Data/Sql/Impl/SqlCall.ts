/// <reference path="../../../../../../typings/artisan/artisan.d.ts"/>
/// <reference path="../../../../../../typings/artisan/artisan-core.d.ts"/>
/// <reference path="../../../../../../typings/artisan/artisan-core-data.d.ts"/>

import Artisan from 'artisan';
import ISqlCall from '../ISqlCall';
import ISqlCallDelegate from '../ISqlCallDelegate';
import SqlCallRequest from './SqlCallRequest';
import Verify = Artisan.Core.Exceptions.Verify;

/**
 * SqlCall is a base implementation for executing statements.
 */
abstract class SqlCall<T> implements ISqlCall<T> {
    protected _sqlDatabase: Artisan.Core.Data.Sql.ISqlDatabase;
    protected _delegate: ISqlCallDelegate<T>;
   
    /**
     * Creates a new instance.
     * @param  {Artisan.Core.Data.Sql.ISqlDatabase} sqlDatabase - The database instance.
     * @param  {IQuerySqlCallDelegate<T>} delegate - The delegate used to execute the call.
     */
    constructor(sqlDatabase: Artisan.Core.Data.Sql.ISqlDatabase, delegate: ISqlCallDelegate<T>) {
        Verify.that(sqlDatabase, 'sqlDatabase').isNotNull();
        Verify.that(delegate, 'delegate').isNotNull();
        
        this._sqlDatabase = sqlDatabase;
        this._delegate = delegate;
    }

    async execute(): Promise<T> {
        var dbCommand: Artisan.Core.Data.Sql.ISqlCommand = null;
        
        try {
            dbCommand = await this._sqlDatabase.createCommand(this._delegate.StatementName);

            var request = new SqlCallRequest(this._sqlDatabase, dbCommand);
            this._delegate.Prepare(request);

            var result = await this.executeTransaction(dbCommand);

            return result;
        }
        catch (ex) {
            throw new Artisan.Core.Data.Exceptions.DataException('An error occurred while attempting to execute the call.', ex);
        }
        finally {
            if (dbCommand != null) {
                dbCommand.dispose();
            }
        }
    }

    private async executeTransaction(dbCommand: Artisan.Core.Data.Sql.ISqlCommand): Promise<any> {
        try {
            var transaction: Artisan.Core.Data.Sql.ISqlTransaction = await dbCommand.beginTransaction();

            try {
                var result: any = await this.executeCall(dbCommand);
                await transaction.commit();

                return result;
            }
            catch (ex) {
                await transaction.rollback();

                throw ex;
            }
        }
        catch (ex) {
            throw new Artisan.Core.Data.Exceptions.DataException(
                `An error occurred while attempting to execute the query [${this._delegate.StatementName}].`, ex);
        }
    }

    /**
     * Executes the specified command against the database.
     */
    protected abstract executeCall(dbCommand: Artisan.Core.Data.Sql.ISqlCommand): Promise<T>;
}

export default SqlCall;