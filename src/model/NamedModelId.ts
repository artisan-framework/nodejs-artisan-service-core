import Verify from 'artisan-core/lib/exceptions/Verify';
import ModelId from './ModelId';

/**
 * A special type of <see cref="ModelId{T}"/> that carries with it a name.
 * This name can often be used as a display value or alternate key for the model.
 *
 * @class NamedModelId
 * @extends {ModelId}
 */
class NamedModelId extends ModelId {
   /**
    * Creates an instance of NamedModelId.
    *
    * @param {string} name - The name of the underlying model.
    * @param {string} modelKey - The unique identifier of the underlying model.
    * @param {number} [version] - The version number.
    */
   constructor(name: string, modelKey: string, version?: number) {
      super(modelKey, version);

      Verify.that(name, 'name').isNotNullOrEmpty();

      this.Name = name;
   }

   /**
    * The name of the underlying model.
    *
    * @type {string}
    */
   public Name: string;
}

export default NamedModelId;
