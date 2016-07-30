///<reference path="../../../../../typings/artisan/artisan.d.ts"/>
///<reference path="../../../../../typings/artisan/artisan-core.d.ts"/>

import Artisan from 'artisan-framework';
import INonQuerySqlCallDelegate from './INonQuerySqlCallDelegate';
import ISqlCallRequest from './ISqlCallRequest';
import ISqlCallResponse from './ISqlCallResponse';
import Verify = Artisan.Core.Exceptions.Verify;

/**
 * NonQuerySqlCallDelegate is a base implementation that can be used to contain 
 * the logic of a particular call that does not return a result set.
 */
abstract class NonQuerySqlCallDelegate<T> implements INonQuerySqlCallDelegate<T> {
   /**
    * Creates a new instance.
    * @param  {string} statementName - The name of the stored procedure to execute.
    */
   constructor(statementName: string) {
      Verify.that(statementName, 'statementName').isNotNullOrEmpty();
      
      this.StatementName = statementName;
      this.QueryType = 'NonQuery';
   }

   public StatementName: string;
   public QueryType: string;

   abstract Prepare(request: ISqlCallRequest);
   abstract Translate(response: ISqlCallResponse): T;
}

export default NonQuerySqlCallDelegate;