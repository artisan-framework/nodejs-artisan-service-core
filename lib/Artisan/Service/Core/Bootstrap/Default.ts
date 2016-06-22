///<reference path="../../../../typings/artisan/artisan.d.ts"/>
///<reference path="../../../../typings/artisan/artisan-core.d.ts"/>

import Artisan from 'artisan';
import SqlCallFactory from '../Data/Sql/Impl/SqlCallFactory';

/**
 * Registers the dependencies required for the Artisan service framework.
 */
class ServiceCoreRegistry implements Artisan.Core.Util.Bootstrap.IRegistry {
   register(injector: Artisan.Core.Util.Bootstrap.IInjector): void {
      injector.register('$sqlCallFactory', SqlCallFactory);
   }
}

export default ServiceCoreRegistry;