import Verify from 'artisan-core/lib/exceptions/Verify';
import IModelObject from './IModelObject';
import ModelId from './ModelId';

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
