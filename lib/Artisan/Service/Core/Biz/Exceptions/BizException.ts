///<reference path="../../../../../typings/artisan/artisan.d.ts"/>
///<reference path="../../../../../typings/artisan/artisan-core.d.ts"/>

import Artisan from 'artisan-framework';
import BaseException = Artisan.Core.Exceptions.BaseException;

/**
 * The exception that is thrown by the business logic layer.
 */
class BizException extends BaseException {
    /**
     * Creates a new instance.
     * @param  {string} message - A message that describes the error.
     * @param  {any} innerException - The exception that caused the current exception.
     */
    constructor(message: string, innerException: any = null) {
        super('BizException', message, innerException);
    }
}

export default BizException;