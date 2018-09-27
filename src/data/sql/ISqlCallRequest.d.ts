import ISqlRequest from 'artisan-core-data/lib/sql/ISqlRequest';

/**
 * ISqlCallRequest is a specific type of ISqlRequest that is used to
 * execute a SqlCall.
 */
interface ISqlCallRequest extends ISqlRequest {
}

export default ISqlCallRequest;
