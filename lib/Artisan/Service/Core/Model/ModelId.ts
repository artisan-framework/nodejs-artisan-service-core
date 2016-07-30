///<reference path="../../../../typings/artisan/artisan.d.ts"/>
///<reference path="../../../../typings/artisan/artisan-core.d.ts"/>

import Artisan from 'artisan-framework';
import Verify = Artisan.Core.Exceptions.Verify;

/**
 * ModelId represents the unique identifier of a particular model instance.
 */
class ModelId {
  /**
   * Creates a new instance.
   * @param  {string} modelKey - The unique identifier of the model instance.
   * @param  {number=0} version - The version number of the model instance.
   */
  constructor(modelKey: string, version: number = 0) {
    Verify.that(modelKey, 'modelKey').isNotNullOrEmpty();

    this.ModelKey = modelKey;
    this.Version = version || 0;
  }

  /**
   * The unique identifier of the model instance.
   */
  public ModelKey: string;
  
  /**
   * The version number of the model instance.
   */
  public Version: number;
  
  toString() {
    return `${this.ModelKey}^${this.Version}`;
  }
}

export default ModelId;