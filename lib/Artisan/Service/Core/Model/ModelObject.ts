///<reference path="../../../../typings/artisan/artisan.d.ts"/>
///<reference path="../../../../typings/artisan/artisan-core.d.ts"/>

import Artisan from 'artisan';
import IModelObject from './IModelObject';
import ModelId from './ModelId';
import Verify = Artisan.Core.Exceptions.Verify;

/**
 * ModelObject is a base implementation of IModelObject.
 */
class ModelObject implements IModelObject {
  /**
   * Creates a new instance.
   * @param  {ModelId} modelId - The unique identifier of the model instance.
   */
  constructor(modelId: ModelId) {
    Verify.that(modelId, 'modelId').isNotNull();

    this.ModelId = modelId;
  }
  
  /**
   * The unique identifier of the model instance.
   */
  public ModelId: ModelId;
}

export default ModelObject;