import ModelId from './ModelId';

/**
 * IModelObject is the base type used to denote model classes in the system.  Model classes
 * are a specific type of object that has a unique identifier, and is often backed by a service
 * that can be used to manage these instances. 
 */
interface IModelObject {
    /**
     * The unique identifier of this model instance.
     */
    ModelId: ModelId;
}

export default IModelObject;