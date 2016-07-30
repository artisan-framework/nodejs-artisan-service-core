/// <reference path="../../../../typings/artisan/artisan.d.ts" />
/// <reference path="../../../../typings/artisan/artisan-core.d.ts" />

import Artisan from 'artisan-framework';
import ICreationInfo from './ICreationInfo';
import Verify = Artisan.Core.Exceptions.Verify;

/**
 * VersionInfo is a standard implementation of IVersionInfo.
 */
class CreationInfo implements ICreationInfo {
    /**
     * Creates a new instance.
     * @param  {string} createdOn - The date/time when the model was created.
     * @param  {string} createdBy - The name of the user that created the model.
     */
    constructor(createdOn: string, createdBy: string) {
        Verify.that(createdOn, 'createdOn').isNotNullOrEmpty();
        Verify.that(createdBy, 'createdBy').isNotNullOrEmpty();
        
        this.CreatedOn = createdOn;
        this.CreatedBy = createdBy;
    }
    
    CreatedOn: string;
    CreatedBy: string;
}

export default CreationInfo;