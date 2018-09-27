import IVersionInfo from './IVersionInfo';

/**
 * Provides a standard interface for describing version information for
 * the associated model.
 */
interface IVersionable {
    /**
     * Contains version information for this model instance.
     */
    VersionInfo: IVersionInfo;
}

export default IVersionable;
