///<reference path="../../../../../../typings/artisan/artisan.d.ts"/>
///<reference path="../../../../../../typings/artisan/artisan-core-data.d.ts"/>

import Artisan from 'artisan';
import ISqlCallRequest from '../ISqlCallRequest';
import Verify = Artisan.Core.Exceptions.Verify;


/**
 * SqlCallRequest is a standard implementation of ISqlCallRequest.
 */
class SqlCallRequest implements ISqlCallRequest {
    private _database: Artisan.Core.Data.Sql.ISqlDatabase;
    private _command: Artisan.Core.Data.Sql.ISqlCommand;
   
    /**
     * Creates a new instance.
     * @param  {Artisan.Core.Data.Sql.ISqlDatabase} database - The database instance.
     * @param  {Artisan.Core.Data.Sql.ISqlCommand} command - The command that represents the statements executed against the database.
     */
    constructor(database: Artisan.Core.Data.Sql.ISqlDatabase, command: Artisan.Core.Data.Sql.ISqlCommand) {
        Verify.that(database, 'database').isNotNull();
        Verify.that(command, 'command').isNotNull();

        this._database = database;
        this._command = command;
    }

    public parameters: Artisan.Core.Data.Sql.ISqlParameter[];

    addInParameter(name: string, value: any, type: string, ...options: any[]): void {
        this._command.addInParameter(name, value, type, ...options);
    }

    addInListParameter(name: string, value: any, type: string, ...options: any[]): void {
        this._command.addInListParameter(name, value, type, ...options);
    }
    
    addInDictionaryParameter(name: string, value: Artisan.Core.Collections.Generic.KeyValuePair<any, any>[], keyType: string, keyOption: any, valueType: string, valueOption: any): void {
        this._command.addInDictionaryParameter(name, value, keyType, keyOption, valueType, valueOption);
    }

    addOutParameter(name: string, type: string, ...options: any[]): void {
        this._command.addOutParameter(name, type, ...options);
    }

    addInOutParameter(name: string, value: any, type: string, ...options: any[]): void {
        this._command.addInOutParameter(name, value, type, ...options);
    }
}

export default SqlCallRequest;