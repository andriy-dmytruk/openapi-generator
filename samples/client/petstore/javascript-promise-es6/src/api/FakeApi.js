/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Client from '../model/Client';
import FileSchemaTestClass from '../model/FileSchemaTestClass';
import HealthCheckResult from '../model/HealthCheckResult';
import OuterComposite from '../model/OuterComposite';
import OuterObjectWithEnumProperty from '../model/OuterObjectWithEnumProperty';
import Pet from '../model/Pet';
import User from '../model/User';

/**
* Fake service.
* @module api/FakeApi
* @version 1.0.0
*/
export default class FakeApi {

    /**
    * Constructs a new FakeApi. 
    * @alias module:api/FakeApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Health check endpoint
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/HealthCheckResult} and HTTP response
     */
    fakeHealthGetWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = HealthCheckResult;
      return this.apiClient.callApi(
        '/fake/health', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Health check endpoint
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/HealthCheckResult}
     */
    fakeHealthGet() {
      return this.fakeHealthGetWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * test http signature authentication
     * @param {module:model/Pet} pet Pet object that needs to be added to the store
     * @param {Object} opts Optional parameters
     * @param {String} opts.query1 query parameter
     * @param {String} opts.header1 header parameter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    fakeHttpSignatureTestWithHttpInfo(pet, opts) {
      opts = opts || {};
      let postBody = pet;
      // verify the required parameter 'pet' is set
      if (pet === undefined || pet === null) {
        throw new Error("Missing the required parameter 'pet' when calling fakeHttpSignatureTest");
      }

      let pathParams = {
      };
      let queryParams = {
        'query_1': opts['query1']
      };
      let headerParams = {
        'header_1': opts['header1']
      };
      let formParams = {
      };

      let authNames = ['http_signature_test'];
      let contentTypes = ['application/json', 'application/xml'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/fake/http-signature-test', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * test http signature authentication
     * @param {module:model/Pet} pet Pet object that needs to be added to the store
     * @param {Object} opts Optional parameters
     * @param {String} opts.query1 query parameter
     * @param {String} opts.header1 header parameter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    fakeHttpSignatureTest(pet, opts) {
      return this.fakeHttpSignatureTestWithHttpInfo(pet, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Test serialization of outer boolean types
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.body Input boolean as post body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Boolean} and HTTP response
     */
    fakeOuterBooleanSerializeWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['*/*'];
      let returnType = 'Boolean';
      return this.apiClient.callApi(
        '/fake/outer/boolean', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Test serialization of outer boolean types
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.body Input boolean as post body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Boolean}
     */
    fakeOuterBooleanSerialize(opts) {
      return this.fakeOuterBooleanSerializeWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Test serialization of object with outer number type
     * @param {Object} opts Optional parameters
     * @param {module:model/OuterComposite} opts.outerComposite Input composite as post body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OuterComposite} and HTTP response
     */
    fakeOuterCompositeSerializeWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['outerComposite'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['*/*'];
      let returnType = OuterComposite;
      return this.apiClient.callApi(
        '/fake/outer/composite', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Test serialization of object with outer number type
     * @param {Object} opts Optional parameters
     * @param {module:model/OuterComposite} opts.outerComposite Input composite as post body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OuterComposite}
     */
    fakeOuterCompositeSerialize(opts) {
      return this.fakeOuterCompositeSerializeWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Test serialization of outer number types
     * @param {Object} opts Optional parameters
     * @param {Number} opts.body Input number as post body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Number} and HTTP response
     */
    fakeOuterNumberSerializeWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['*/*'];
      let returnType = 'Number';
      return this.apiClient.callApi(
        '/fake/outer/number', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Test serialization of outer number types
     * @param {Object} opts Optional parameters
     * @param {Number} opts.body Input number as post body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Number}
     */
    fakeOuterNumberSerialize(opts) {
      return this.fakeOuterNumberSerializeWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Test serialization of outer string types
     * @param {Object} opts Optional parameters
     * @param {String} opts.body Input string as post body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link String} and HTTP response
     */
    fakeOuterStringSerializeWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['*/*'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/fake/outer/string', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Test serialization of outer string types
     * @param {Object} opts Optional parameters
     * @param {String} opts.body Input string as post body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link String}
     */
    fakeOuterStringSerialize(opts) {
      return this.fakeOuterStringSerializeWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Test serialization of enum (int) properties with examples
     * @param {module:model/OuterObjectWithEnumProperty} outerObjectWithEnumProperty Input enum (int) as post body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OuterObjectWithEnumProperty} and HTTP response
     */
    fakePropertyEnumIntegerSerializeWithHttpInfo(outerObjectWithEnumProperty) {
      let postBody = outerObjectWithEnumProperty;
      // verify the required parameter 'outerObjectWithEnumProperty' is set
      if (outerObjectWithEnumProperty === undefined || outerObjectWithEnumProperty === null) {
        throw new Error("Missing the required parameter 'outerObjectWithEnumProperty' when calling fakePropertyEnumIntegerSerialize");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['*/*'];
      let returnType = OuterObjectWithEnumProperty;
      return this.apiClient.callApi(
        '/fake/property/enum-int', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Test serialization of enum (int) properties with examples
     * @param {module:model/OuterObjectWithEnumProperty} outerObjectWithEnumProperty Input enum (int) as post body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OuterObjectWithEnumProperty}
     */
    fakePropertyEnumIntegerSerialize(outerObjectWithEnumProperty) {
      return this.fakePropertyEnumIntegerSerializeWithHttpInfo(outerObjectWithEnumProperty)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * For this test, the body has to be a binary file.
     * @param {File} body image to upload
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    testBodyWithBinaryWithHttpInfo(body) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling testBodyWithBinary");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['image/png'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/fake/body-with-binary', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * For this test, the body has to be a binary file.
     * @param {File} body image to upload
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    testBodyWithBinary(body) {
      return this.testBodyWithBinaryWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * For this test, the body for this request must reference a schema named `File`.
     * @param {module:model/FileSchemaTestClass} fileSchemaTestClass 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    testBodyWithFileSchemaWithHttpInfo(fileSchemaTestClass) {
      let postBody = fileSchemaTestClass;
      // verify the required parameter 'fileSchemaTestClass' is set
      if (fileSchemaTestClass === undefined || fileSchemaTestClass === null) {
        throw new Error("Missing the required parameter 'fileSchemaTestClass' when calling testBodyWithFileSchema");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/fake/body-with-file-schema', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * For this test, the body for this request must reference a schema named `File`.
     * @param {module:model/FileSchemaTestClass} fileSchemaTestClass 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    testBodyWithFileSchema(fileSchemaTestClass) {
      return this.testBodyWithFileSchemaWithHttpInfo(fileSchemaTestClass)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} query 
     * @param {module:model/User} user 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    testBodyWithQueryParamsWithHttpInfo(query, user) {
      let postBody = user;
      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling testBodyWithQueryParams");
      }
      // verify the required parameter 'user' is set
      if (user === undefined || user === null) {
        throw new Error("Missing the required parameter 'user' when calling testBodyWithQueryParams");
      }

      let pathParams = {
      };
      let queryParams = {
        'query': query
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/fake/body-with-query-params', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {String} query 
     * @param {module:model/User} user 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    testBodyWithQueryParams(query, user) {
      return this.testBodyWithQueryParamsWithHttpInfo(query, user)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * To test \"client\" model
     * To test \"client\" model
     * @param {module:model/Client} client client model
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Client} and HTTP response
     */
    testClientModelWithHttpInfo(client) {
      let postBody = client;
      // verify the required parameter 'client' is set
      if (client === undefined || client === null) {
        throw new Error("Missing the required parameter 'client' when calling testClientModel");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Client;
      return this.apiClient.callApi(
        '/fake', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * To test \"client\" model
     * To test \"client\" model
     * @param {module:model/Client} client client model
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Client}
     */
    testClientModel(client) {
      return this.testClientModelWithHttpInfo(client)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Fake endpoint for testing various parameters 假端點 偽のエンドポイント 가짜 엔드 포인트 
     * Fake endpoint for testing various parameters 假端點 偽のエンドポイント 가짜 엔드 포인트 
     * @param {Number} number None
     * @param {Number} _double None
     * @param {String} patternWithoutDelimiter None
     * @param {Blob} _byte None
     * @param {Object} opts Optional parameters
     * @param {Number} opts.integer None
     * @param {Number} opts.int32 None
     * @param {Number} opts.int64 None
     * @param {Number} opts._float None
     * @param {String} opts.string None
     * @param {File} opts.binary None
     * @param {Date} opts.date None
     * @param {Date} opts.dateTime None
     * @param {String} opts.password None
     * @param {String} opts.callback None
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    testEndpointParametersWithHttpInfo(number, _double, patternWithoutDelimiter, _byte, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'number' is set
      if (number === undefined || number === null) {
        throw new Error("Missing the required parameter 'number' when calling testEndpointParameters");
      }
      // verify the required parameter '_double' is set
      if (_double === undefined || _double === null) {
        throw new Error("Missing the required parameter '_double' when calling testEndpointParameters");
      }
      // verify the required parameter 'patternWithoutDelimiter' is set
      if (patternWithoutDelimiter === undefined || patternWithoutDelimiter === null) {
        throw new Error("Missing the required parameter 'patternWithoutDelimiter' when calling testEndpointParameters");
      }
      // verify the required parameter '_byte' is set
      if (_byte === undefined || _byte === null) {
        throw new Error("Missing the required parameter '_byte' when calling testEndpointParameters");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'integer': opts['integer'],
        'int32': opts['int32'],
        'int64': opts['int64'],
        'number': number,
        'float': opts['_float'],
        'double': _double,
        'string': opts['string'],
        'pattern_without_delimiter': patternWithoutDelimiter,
        'byte': _byte,
        'binary': opts['binary'],
        'date': opts['date'],
        'dateTime': opts['dateTime'],
        'password': opts['password'],
        'callback': opts['callback']
      };

      let authNames = ['http_basic_test'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/fake', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Fake endpoint for testing various parameters 假端點 偽のエンドポイント 가짜 엔드 포인트 
     * Fake endpoint for testing various parameters 假端點 偽のエンドポイント 가짜 엔드 포인트 
     * @param {Number} number None
     * @param {Number} _double None
     * @param {String} patternWithoutDelimiter None
     * @param {Blob} _byte None
     * @param {Object} opts Optional parameters
     * @param {Number} opts.integer None
     * @param {Number} opts.int32 None
     * @param {Number} opts.int64 None
     * @param {Number} opts._float None
     * @param {String} opts.string None
     * @param {File} opts.binary None
     * @param {Date} opts.date None
     * @param {Date} opts.dateTime None
     * @param {String} opts.password None
     * @param {String} opts.callback None
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    testEndpointParameters(number, _double, patternWithoutDelimiter, _byte, opts) {
      return this.testEndpointParametersWithHttpInfo(number, _double, patternWithoutDelimiter, _byte, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * To test enum parameters
     * To test enum parameters
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.enumHeaderStringArray Header parameter enum test (string array)
     * @param {module:model/String} opts.enumHeaderString Header parameter enum test (string) (default to '-efg')
     * @param {Array.<module:model/String>} opts.enumQueryStringArray Query parameter enum test (string array)
     * @param {module:model/String} opts.enumQueryString Query parameter enum test (string) (default to '-efg')
     * @param {module:model/Number} opts.enumQueryInteger Query parameter enum test (double)
     * @param {module:model/Number} opts.enumQueryDouble Query parameter enum test (double)
     * @param {Array.<module:model/String>} opts.enumFormStringArray Form parameter enum test (string array) (default to '$')
     * @param {module:model/String} opts.enumFormString Form parameter enum test (string) (default to '-efg')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    testEnumParametersWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'enum_query_string_array': this.apiClient.buildCollectionParam(opts['enumQueryStringArray'], 'multi'),
        'enum_query_string': opts['enumQueryString'],
        'enum_query_integer': opts['enumQueryInteger'],
        'enum_query_double': opts['enumQueryDouble']
      };
      let headerParams = {
        'enum_header_string_array': opts['enumHeaderStringArray'],
        'enum_header_string': opts['enumHeaderString']
      };
      let formParams = {
        'enum_form_string_array': this.apiClient.buildCollectionParam(opts['enumFormStringArray'], 'csv'),
        'enum_form_string': opts['enumFormString']
      };

      let authNames = [];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/fake', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * To test enum parameters
     * To test enum parameters
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.enumHeaderStringArray Header parameter enum test (string array)
     * @param {module:model/String} opts.enumHeaderString Header parameter enum test (string) (default to '-efg')
     * @param {Array.<module:model/String>} opts.enumQueryStringArray Query parameter enum test (string array)
     * @param {module:model/String} opts.enumQueryString Query parameter enum test (string) (default to '-efg')
     * @param {module:model/Number} opts.enumQueryInteger Query parameter enum test (double)
     * @param {module:model/Number} opts.enumQueryDouble Query parameter enum test (double)
     * @param {Array.<module:model/String>} opts.enumFormStringArray Form parameter enum test (string array) (default to '$')
     * @param {module:model/String} opts.enumFormString Form parameter enum test (string) (default to '-efg')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    testEnumParameters(opts) {
      return this.testEnumParametersWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Fake endpoint to test group parameters (optional)
     * Fake endpoint to test group parameters (optional)
     * @param {Number} requiredStringGroup Required String in group parameters
     * @param {Boolean} requiredBooleanGroup Required Boolean in group parameters
     * @param {Number} requiredInt64Group Required Integer in group parameters
     * @param {Object} opts Optional parameters
     * @param {Number} opts.stringGroup String in group parameters
     * @param {Boolean} opts.booleanGroup Boolean in group parameters
     * @param {Number} opts.int64Group Integer in group parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    testGroupParametersWithHttpInfo(requiredStringGroup, requiredBooleanGroup, requiredInt64Group, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'requiredStringGroup' is set
      if (requiredStringGroup === undefined || requiredStringGroup === null) {
        throw new Error("Missing the required parameter 'requiredStringGroup' when calling testGroupParameters");
      }
      // verify the required parameter 'requiredBooleanGroup' is set
      if (requiredBooleanGroup === undefined || requiredBooleanGroup === null) {
        throw new Error("Missing the required parameter 'requiredBooleanGroup' when calling testGroupParameters");
      }
      // verify the required parameter 'requiredInt64Group' is set
      if (requiredInt64Group === undefined || requiredInt64Group === null) {
        throw new Error("Missing the required parameter 'requiredInt64Group' when calling testGroupParameters");
      }

      let pathParams = {
      };
      let queryParams = {
        'required_string_group': requiredStringGroup,
        'required_int64_group': requiredInt64Group,
        'string_group': opts['stringGroup'],
        'int64_group': opts['int64Group']
      };
      let headerParams = {
        'required_boolean_group': requiredBooleanGroup,
        'boolean_group': opts['booleanGroup']
      };
      let formParams = {
      };

      let authNames = ['bearer_test'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/fake', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Fake endpoint to test group parameters (optional)
     * Fake endpoint to test group parameters (optional)
     * @param {Number} requiredStringGroup Required String in group parameters
     * @param {Boolean} requiredBooleanGroup Required Boolean in group parameters
     * @param {Number} requiredInt64Group Required Integer in group parameters
     * @param {Object} opts Optional parameters
     * @param {Number} opts.stringGroup String in group parameters
     * @param {Boolean} opts.booleanGroup Boolean in group parameters
     * @param {Number} opts.int64Group Integer in group parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    testGroupParameters(requiredStringGroup, requiredBooleanGroup, requiredInt64Group, opts) {
      return this.testGroupParametersWithHttpInfo(requiredStringGroup, requiredBooleanGroup, requiredInt64Group, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * test inline additionalProperties
     * 
     * @param {Object.<String, {String: String}>} requestBody request body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    testInlineAdditionalPropertiesWithHttpInfo(requestBody) {
      let postBody = requestBody;
      // verify the required parameter 'requestBody' is set
      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling testInlineAdditionalProperties");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/fake/inline-additionalProperties', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * test inline additionalProperties
     * 
     * @param {Object.<String, {String: String}>} requestBody request body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    testInlineAdditionalProperties(requestBody) {
      return this.testInlineAdditionalPropertiesWithHttpInfo(requestBody)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * test json serialization of form data
     * 
     * @param {String} param field1
     * @param {String} param2 field2
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    testJsonFormDataWithHttpInfo(param, param2) {
      let postBody = null;
      // verify the required parameter 'param' is set
      if (param === undefined || param === null) {
        throw new Error("Missing the required parameter 'param' when calling testJsonFormData");
      }
      // verify the required parameter 'param2' is set
      if (param2 === undefined || param2 === null) {
        throw new Error("Missing the required parameter 'param2' when calling testJsonFormData");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'param': param,
        'param2': param2
      };

      let authNames = [];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/fake/jsonFormData', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * test json serialization of form data
     * 
     * @param {String} param field1
     * @param {String} param2 field2
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    testJsonFormData(param, param2) {
      return this.testJsonFormDataWithHttpInfo(param, param2)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * To test the collection format in query parameters
     * @param {Array.<String>} pipe 
     * @param {Array.<String>} ioutil 
     * @param {Array.<String>} http 
     * @param {Array.<String>} url 
     * @param {Array.<String>} context 
     * @param {String} allowEmpty 
     * @param {Object} opts Optional parameters
     * @param {Object.<String, {String: String}>} opts.language 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    testQueryParameterCollectionFormatWithHttpInfo(pipe, ioutil, http, url, context, allowEmpty, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'pipe' is set
      if (pipe === undefined || pipe === null) {
        throw new Error("Missing the required parameter 'pipe' when calling testQueryParameterCollectionFormat");
      }
      // verify the required parameter 'ioutil' is set
      if (ioutil === undefined || ioutil === null) {
        throw new Error("Missing the required parameter 'ioutil' when calling testQueryParameterCollectionFormat");
      }
      // verify the required parameter 'http' is set
      if (http === undefined || http === null) {
        throw new Error("Missing the required parameter 'http' when calling testQueryParameterCollectionFormat");
      }
      // verify the required parameter 'url' is set
      if (url === undefined || url === null) {
        throw new Error("Missing the required parameter 'url' when calling testQueryParameterCollectionFormat");
      }
      // verify the required parameter 'context' is set
      if (context === undefined || context === null) {
        throw new Error("Missing the required parameter 'context' when calling testQueryParameterCollectionFormat");
      }
      // verify the required parameter 'allowEmpty' is set
      if (allowEmpty === undefined || allowEmpty === null) {
        throw new Error("Missing the required parameter 'allowEmpty' when calling testQueryParameterCollectionFormat");
      }

      let pathParams = {
      };
      let queryParams = {
        'pipe': this.apiClient.buildCollectionParam(pipe, 'pipes'),
        'ioutil': this.apiClient.buildCollectionParam(ioutil, 'csv'),
        'http': this.apiClient.buildCollectionParam(http, 'ssv'),
        'url': this.apiClient.buildCollectionParam(url, 'csv'),
        'context': this.apiClient.buildCollectionParam(context, 'multi'),
        'language': opts['language'],
        'allowEmpty': allowEmpty
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/fake/test-query-parameters', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * To test the collection format in query parameters
     * @param {Array.<String>} pipe 
     * @param {Array.<String>} ioutil 
     * @param {Array.<String>} http 
     * @param {Array.<String>} url 
     * @param {Array.<String>} context 
     * @param {String} allowEmpty 
     * @param {Object} opts Optional parameters
     * @param {Object.<String, {String: String}>} opts.language 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    testQueryParameterCollectionFormat(pipe, ioutil, http, url, context, allowEmpty, opts) {
      return this.testQueryParameterCollectionFormatWithHttpInfo(pipe, ioutil, http, url, context, allowEmpty, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
