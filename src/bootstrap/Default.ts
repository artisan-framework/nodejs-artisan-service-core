import SqlCallFactory from '../data/sql/impl/SqlCallFactory';
import IRegistry from 'artisan-core/lib/bootstrap/IRegistry';
import IInjector from 'artisan-core/lib/bootstrap/IInjector';

/**
 * Registers the dependencies required for the Artisan service framework.
 */
class ServiceCoreRegistry implements IRegistry {
   public register(injector: IInjector): void {
      injector.register('$sqlCallFactory', SqlCallFactory);
   }
}

export default ServiceCoreRegistry;
