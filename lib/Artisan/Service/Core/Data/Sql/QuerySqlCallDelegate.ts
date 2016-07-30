///<reference path="../../../../../typings/artisan/artisan.d.ts"/>
///<reference path="../../../../../typings/artisan/artisan-core.d.ts"/>

import Artisan from 'artisan-framework';
import IQuerySqlCallDelegate from './IQuerySqlCallDelegate';
import ISqlCallRequest from './ISqlCallRequest';
import ISqlCallQueryResponse from './ISqlCallQueryResponse';
import Verify = Artisan.Core.Exceptions.Verify;

/**
 * QuerySqlCallDelegate is a base implementation that can be used to contain 
 * the logic of a particular call that returns one or more result sets.
 */
abstract class QuerySqlCallDelegate<T> implements IQuerySqlCallDelegate<T> {
   /**
    * Creates a new instance.
    * @param  {string} statementName - The name of the stored procedure to execute.
    */
   constructor(statementName: string) {
      Verify.that(statementName, 'statementName').isNotNullOrEmpty();
      
      this.StatementName = statementName;
      this.QueryType = 'Query';
   }

   public StatementName: string;
   public QueryType: string;

   abstract Prepare(request: ISqlCallRequest);
   abstract Translate(response: ISqlCallQueryResponse): T;
}

export default QuerySqlCallDelegate;