///<reference path="./artisan-core.d.ts"/>

declare module Artisan {
   module Core {
      module Data {
         module Exceptions {
            class DataException extends Artisan.Core.Exceptions.BaseException {
               constructor(message?: string, innerException?: any);
            }
         }

         module Sql {
            interface ISqlParameter {
               Name: string;
               Type: string;
               Value: any;
            }

            interface ISqlRequest {
               parameters: ISqlParameter[];

               addInParameter(name: string, value: any, type: string, ...options: any[]): void;
               addInListParameter(name: string, value: any[], type: string, ...options: any[]): void;
               addInDictionaryParameter(name: string, value: Artisan.Core.Collections.Generic.KeyValuePair<any, any>[], keyType: string, keyOption: any, valueType: string, valueOption: any): void;
               addOutParameter(name: string, type: string, ...options: any[]): void;
               addInOutParameter(name: string, value: any, type: string, ...options: any[]): void;
            }

            interface ISqlDataReader {
               nextResult(name: string): void;

               read(): boolean;

               getValue(name: string): any;
            }

            interface ISqlConnection {
               Name: string;
               ProviderType: string;
               ConnectionOptions: any;
            }

            interface ISqlDatabaseFactory {
               getDatabase(databaseName: string): Artisan.Core.Data.Sql.ISqlDatabase;
            }

            interface ISqlDatabase {
               connection: ISqlConnection;

               createCommand(procedureName: string): Promise<ISqlCommand>;

               executeReader(command: ISqlCommand): Promise<ISqlDataReader>;
               executeNonQuery(command: ISqlCommand): Promise<boolean>;

               translateWildcards(value: string): string;
            }

            interface ISqlTransaction {
               commit(): Promise<boolean>;
               rollback(): Promise<boolean>;
            }

            interface ISqlCommand extends IDisposable {
               addInParameter(name: string, value: any, type: string, ...options: any[]): void;
               addInListParameter(name: string, value: any[], type: string, ...options: any[]): void;
               addInDictionaryParameter(name: string, value: Artisan.Core.Collections.Generic.KeyValuePair<any, any>[], keyType: string, keyOption: any, valueType: string, valueOption: any): void;
               addOutParameter(name: string, type: string, ...options: any[]): void;
               addInOutParameter(name: string, value: any, type: string, ...options: any[]): void;

               beginTransaction(): Promise<ISqlTransaction>;

               executeNonQuery(): Promise<boolean>;
               executeReader(): Promise<ISqlDataReader>;

               getOutputParameter(name: string): any;
            }

            interface ISqlResponse {
               getValue(name: string): any;
            }
         }
      }
   }
}
