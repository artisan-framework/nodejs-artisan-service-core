import IQuerySqlCallDelegate from './IQuerySqlCallDelegate';
import ISqlCallRequest from './ISqlCallRequest';
import ISqlCallQueryResponse from './ISqlCallQueryResponse';
import Verify from 'artisan-core/lib/exceptions/Verify';

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

   public abstract Prepare(request: ISqlCallRequest): void;
   public abstract Translate(response: ISqlCallQueryResponse): T;
}

export default QuerySqlCallDelegate;
