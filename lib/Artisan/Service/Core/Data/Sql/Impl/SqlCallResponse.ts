///<reference path="../../../../../../typings/artisan/artisan-core-data.d.ts"/>

import Artisan from 'artisan-framework';
import ISqlCallResponse from '../ISqlCallResponse';
import Verify = Artisan.Core.Exceptions.Verify;

/**
 * SqlCallResponse is a standard implementation of ISqlCallResponse.
 */
class SqlCallResponse implements ISqlCallResponse {
    protected _database: Artisan.Core.Data.Sql.ISqlDatabase;
    protected _dbCommand: Artisan.Core.Data.Sql.ISqlCommand;
   
    /**
     * Creates a new instance.
     * @param  {Artisan.Core.Data.Sql.ISqlDatabase} database - The database instance.
     * @param  {Artisan.Core.Data.Sql.ISqlCommand} dbCommand - The command that represents the statements executed against the database.
     */
    constructor(database: Artisan.Core.Data.Sql.ISqlDatabase, dbCommand: Artisan.Core.Data.Sql.ISqlCommand) {
        Verify.that(database, 'database').isNotNull();
        Verify.that(dbCommand, 'dbCommand').isNotNull();

        this._database = database;
        this._dbCommand = dbCommand;
    }

    getValue(name: string): any {
        return this._dbCommand.getOutputParameter(name);
    }
}

export default SqlCallResponse;