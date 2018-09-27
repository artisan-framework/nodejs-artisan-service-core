import ICreationInfo from './ICreationInfo';

/**
 * Provides a standard interface for describing information about
 * when the model was created.
 */
interface ICreatable {
    /**
     * Contains creation information for this model instance.
     */
    CreationInfo: ICreationInfo;
}

export default ICreatable;
