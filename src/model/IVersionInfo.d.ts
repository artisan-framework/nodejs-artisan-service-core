/**
 * Contains version information about a particular model.
 */
interface IVersionInfo {
    /**
     * The version number.
     */
    Version: number;

    /**
     * The data/time when the udpate occurred.
     */
    VersionOn: string;

    /**
     * The name of the user that performed the update.
     */
    VersionBy: string;
}

export default IVersionInfo;
