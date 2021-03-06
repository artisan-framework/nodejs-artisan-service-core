import IVersionInfo from './IVersionInfo';
import Verify from 'artisan-core/lib/exceptions/Verify';

/**
 * VersionInfo is a standard implementation of IVersionInfo.
 */
class VersionInfo implements IVersionInfo {
   /**
    * Creates a new instance.
    * @param  {number} version - The version number.
    * @param  {string} versionOn - The date/time when the update occurred.
    * @param  {string} versionBy - The name of the user that performed the update.
    */
   constructor(version: number, versionOn: string, versionBy: string) {
      Verify.that(version, 'version').isNotNull();
      Verify.that(versionOn, 'versionOn').isNotNullOrEmpty();
      Verify.that(versionBy, 'versionBy').isNotNullOrEmpty();

      this.Version = version;
      this.VersionOn = versionOn;
      this.VersionBy = versionBy;
   }

   public Version: number;
   public VersionOn: string;
   public VersionBy: string;
}

export default VersionInfo;
