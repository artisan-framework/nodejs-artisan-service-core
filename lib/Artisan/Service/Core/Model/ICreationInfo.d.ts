/**
 * Contains creation information about a particular model.
 */
interface ICreationInfo {
    /**
     * The data/time when the model was created.
     */
    CreatedOn: string;
    
    /**
     * The name of the user that created this model.
     */
    CreatedBy: string;
}

export default ICreationInfo;