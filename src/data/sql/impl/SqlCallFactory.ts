import ISqlCall from '../ISqlCall';
import ISqlCallFactory from '../ISqlCallFactory';
import ISqlCallDelegate from '../ISqlCallDelegate';
import IQuerySqlCallDelegate from '../IQuerySqlCallDelegate';
import INonQuerySqlCallDelegate from '../INonQuerySqlCallDelegate';

import QuerySqlCall from './QuerySqlCall';
import NonQuerySqlCall from './NonQuerySqlCall';
import ISqlDatabase from 'artisan-core-data/lib/sql/ISqlDatabase';
import NotSupportedException from 'artisan-core/lib/exceptions/NotSupportedException';

/**
 * SqlCallFactory is a standard implementation of ISqlCallFactory.
 */
class SqlCallFactory implements ISqlCallFactory {
   public getSqlCall<T>(sqlDatabase: ISqlDatabase, sqlCallDelegate: ISqlCallDelegate<T>): ISqlCall<T> {
      switch (sqlCallDelegate.QueryType) {
         case 'Query':
            const querySqlCallDelegate = sqlCallDelegate as IQuerySqlCallDelegate<T>;
            return new QuerySqlCall<T>(sqlDatabase, querySqlCallDelegate);
         case 'NonQuery':
            const nonQuerySqlCallDelegate = sqlCallDelegate as INonQuerySqlCallDelegate<T>;
            return new NonQuerySqlCall<T>(sqlDatabase, nonQuerySqlCallDelegate);
      }

      throw new NotSupportedException(`The specified query type [${ sqlCallDelegate.QueryType }] is not supported.`);
   }
}

export default SqlCallFactory;
