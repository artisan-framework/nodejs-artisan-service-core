import ISqlCall from '../ISqlCall';
import ISqlCallFactory from '../ISqlCallFactory';
import ISqlCallDelegate from '../ISqlCallDelegate';
import IQuerySqlCallDelegate from '../IQuerySqlCallDelegate';
import INonQuerySqlCallDelegate from '../INonQuerySqlCallDelegate';

import SqlCall from './SqlCall';
import QuerySqlCall from './QuerySqlCall';
import NonQuerySqlCall from './NonQuerySqlCall';

/**
 * SqlCallFactory is a standard implementation of ISqlCallFactory.
 */
class SqlCallFactory implements ISqlCallFactory {
   getSqlCall<T>(sqlDatabase: Artisan.Core.Data.Sql.ISqlDatabase, sqlCallDelegate: ISqlCallDelegate<T>): ISqlCall<T> {
      if (sqlCallDelegate.QueryType === 'Query') {
         var querySqlCallDelegate = <IQuerySqlCallDelegate<T>>sqlCallDelegate;
         return new QuerySqlCall<T>(sqlDatabase, querySqlCallDelegate);
      }

      if (sqlCallDelegate.QueryType === 'NonQuery') {
         var nonQuerySqlCallDelegate = <INonQuerySqlCallDelegate<T>>sqlCallDelegate;
         return new NonQuerySqlCall<T>(sqlDatabase, nonQuerySqlCallDelegate);
      }
   }
}

export default SqlCallFactory;