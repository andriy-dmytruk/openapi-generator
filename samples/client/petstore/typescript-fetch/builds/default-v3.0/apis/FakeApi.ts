/* tslint:disable */
/* eslint-disable */
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
 */


import * as runtime from '../runtime';
import {
    Client,
    ClientFromJSON,
    ClientToJSON,
    EnumClass,
    EnumClassFromJSON,
    EnumClassToJSON,
    FileSchemaTestClass,
    FileSchemaTestClassFromJSON,
    FileSchemaTestClassToJSON,
    HealthCheckResult,
    HealthCheckResultFromJSON,
    HealthCheckResultToJSON,
    OuterComposite,
    OuterCompositeFromJSON,
    OuterCompositeToJSON,
    OuterObjectWithEnumProperty,
    OuterObjectWithEnumPropertyFromJSON,
    OuterObjectWithEnumPropertyToJSON,
    Pet,
    PetFromJSON,
    PetToJSON,
    User,
    UserFromJSON,
    UserToJSON,
} from '../models';

export interface FakeHttpSignatureTestRequest {
    pet: Pet;
    query1?: string;
    header1?: string;
}

export interface FakeOuterBooleanSerializeRequest {
    body?: boolean;
}

export interface FakeOuterCompositeSerializeRequest {
    outerComposite?: OuterComposite;
}

export interface FakeOuterNumberSerializeRequest {
    body?: number;
}

export interface FakeOuterStringSerializeRequest {
    body?: string;
}

export interface FakePropertyEnumIntegerSerializeRequest {
    outerObjectWithEnumProperty: OuterObjectWithEnumProperty;
}

export interface TestBodyWithBinaryRequest {
    body: Blob | null;
}

export interface TestBodyWithFileSchemaRequest {
    fileSchemaTestClass: FileSchemaTestClass;
}

export interface TestBodyWithQueryParamsRequest {
    query: string;
    user: User;
}

export interface TestClientModelRequest {
    client: Client;
}

export interface TestEndpointParametersRequest {
    number: number;
    _double: number;
    patternWithoutDelimiter: string;
    _byte: string;
    integer?: number;
    int32?: number;
    int64?: number;
    _float?: number;
    string?: string;
    binary?: Blob;
    date?: Date;
    dateTime?: Date;
    password?: string;
    callback?: string;
}

export interface TestEnumParametersRequest {
    enumHeaderStringArray?: Array<TestEnumParametersEnumHeaderStringArrayEnum>;
    enumHeaderString?: TestEnumParametersEnumHeaderStringEnum;
    enumQueryStringArray?: Array<TestEnumParametersEnumQueryStringArrayEnum>;
    enumQueryString?: TestEnumParametersEnumQueryStringEnum;
    enumQueryInteger?: TestEnumParametersEnumQueryIntegerEnum;
    enumQueryDouble?: TestEnumParametersEnumQueryDoubleEnum;
    enumQueryModelArray?: Array<EnumClass>;
    enumFormStringArray?: Array<TestEnumParametersEnumFormStringArrayEnum>;
    enumFormString?: TestEnumParametersEnumFormStringEnum;
}

export interface TestGroupParametersRequest {
    requiredStringGroup: number;
    requiredBooleanGroup: boolean;
    requiredInt64Group: number;
    stringGroup?: number;
    booleanGroup?: boolean;
    int64Group?: number;
}

export interface TestInlineAdditionalPropertiesRequest {
    requestBody: { [key: string]: string; };
}

export interface TestJsonFormDataRequest {
    param: string;
    param2: string;
}

export interface TestQueryParameterCollectionFormatRequest {
    pipe: Array<string>;
    ioutil: Array<string>;
    http: Array<string>;
    url: Array<string>;
    context: Array<string>;
    allowEmpty: string;
    language?: { [key: string]: string; };
}

/**
 * 
 */
export class FakeApi extends runtime.BaseAPI {

    /**
     * Health check endpoint
     */
    async fakeHealthGetRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<HealthCheckResult>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/fake/health`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => HealthCheckResultFromJSON(jsonValue));
    }

    /**
     * Health check endpoint
     */
    async fakeHealthGet(initOverrides?: RequestInit): Promise<HealthCheckResult> {
        const response = await this.fakeHealthGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * test http signature authentication
     */
    async fakeHttpSignatureTestRaw(requestParameters: FakeHttpSignatureTestRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.pet === null || requestParameters.pet === undefined) {
            throw new runtime.RequiredError('pet','Required parameter requestParameters.pet was null or undefined when calling fakeHttpSignatureTest.');
        }

        const queryParameters: any = {};

        if (requestParameters.query1 !== undefined) {
            queryParameters['query_1'] = requestParameters.query1;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.header1 !== undefined && requestParameters.header1 !== null) {
            headerParameters['header_1'] = String(requestParameters.header1);
        }

        const response = await this.request({
            path: `/fake/http-signature-test`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
            body: PetToJSON(requestParameters.pet),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * test http signature authentication
     */
    async fakeHttpSignatureTest(requestParameters: FakeHttpSignatureTestRequest, initOverrides?: RequestInit): Promise<void> {
        await this.fakeHttpSignatureTestRaw(requestParameters, initOverrides);
    }

    /**
     * Test serialization of outer boolean types
     */
    async fakeOuterBooleanSerializeRaw(requestParameters: FakeOuterBooleanSerializeRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<boolean>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/fake/outer/boolean`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Test serialization of outer boolean types
     */
    async fakeOuterBooleanSerialize(requestParameters: FakeOuterBooleanSerializeRequest = {}, initOverrides?: RequestInit): Promise<boolean> {
        const response = await this.fakeOuterBooleanSerializeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Test serialization of object with outer number type
     */
    async fakeOuterCompositeSerializeRaw(requestParameters: FakeOuterCompositeSerializeRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<OuterComposite>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/fake/outer/composite`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: OuterCompositeToJSON(requestParameters.outerComposite),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OuterCompositeFromJSON(jsonValue));
    }

    /**
     * Test serialization of object with outer number type
     */
    async fakeOuterCompositeSerialize(requestParameters: FakeOuterCompositeSerializeRequest = {}, initOverrides?: RequestInit): Promise<OuterComposite> {
        const response = await this.fakeOuterCompositeSerializeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Test serialization of outer number types
     */
    async fakeOuterNumberSerializeRaw(requestParameters: FakeOuterNumberSerializeRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<number>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/fake/outer/number`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Test serialization of outer number types
     */
    async fakeOuterNumberSerialize(requestParameters: FakeOuterNumberSerializeRequest = {}, initOverrides?: RequestInit): Promise<number> {
        const response = await this.fakeOuterNumberSerializeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Test serialization of outer string types
     */
    async fakeOuterStringSerializeRaw(requestParameters: FakeOuterStringSerializeRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<string>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/fake/outer/string`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Test serialization of outer string types
     */
    async fakeOuterStringSerialize(requestParameters: FakeOuterStringSerializeRequest = {}, initOverrides?: RequestInit): Promise<string> {
        const response = await this.fakeOuterStringSerializeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Test serialization of enum (int) properties with examples
     */
    async fakePropertyEnumIntegerSerializeRaw(requestParameters: FakePropertyEnumIntegerSerializeRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<OuterObjectWithEnumProperty>> {
        if (requestParameters.outerObjectWithEnumProperty === null || requestParameters.outerObjectWithEnumProperty === undefined) {
            throw new runtime.RequiredError('outerObjectWithEnumProperty','Required parameter requestParameters.outerObjectWithEnumProperty was null or undefined when calling fakePropertyEnumIntegerSerialize.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/fake/property/enum-int`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: OuterObjectWithEnumPropertyToJSON(requestParameters.outerObjectWithEnumProperty),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OuterObjectWithEnumPropertyFromJSON(jsonValue));
    }

    /**
     * Test serialization of enum (int) properties with examples
     */
    async fakePropertyEnumIntegerSerialize(requestParameters: FakePropertyEnumIntegerSerializeRequest, initOverrides?: RequestInit): Promise<OuterObjectWithEnumProperty> {
        const response = await this.fakePropertyEnumIntegerSerializeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * For this test, the body has to be a binary file.
     */
    async testBodyWithBinaryRaw(requestParameters: TestBodyWithBinaryRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling testBodyWithBinary.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'image/png';

        const response = await this.request({
            path: `/fake/body-with-binary`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * For this test, the body has to be a binary file.
     */
    async testBodyWithBinary(requestParameters: TestBodyWithBinaryRequest, initOverrides?: RequestInit): Promise<void> {
        await this.testBodyWithBinaryRaw(requestParameters, initOverrides);
    }

    /**
     * For this test, the body for this request must reference a schema named `File`.
     */
    async testBodyWithFileSchemaRaw(requestParameters: TestBodyWithFileSchemaRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.fileSchemaTestClass === null || requestParameters.fileSchemaTestClass === undefined) {
            throw new runtime.RequiredError('fileSchemaTestClass','Required parameter requestParameters.fileSchemaTestClass was null or undefined when calling testBodyWithFileSchema.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/fake/body-with-file-schema`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: FileSchemaTestClassToJSON(requestParameters.fileSchemaTestClass),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * For this test, the body for this request must reference a schema named `File`.
     */
    async testBodyWithFileSchema(requestParameters: TestBodyWithFileSchemaRequest, initOverrides?: RequestInit): Promise<void> {
        await this.testBodyWithFileSchemaRaw(requestParameters, initOverrides);
    }

    /**
     */
    async testBodyWithQueryParamsRaw(requestParameters: TestBodyWithQueryParamsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.query === null || requestParameters.query === undefined) {
            throw new runtime.RequiredError('query','Required parameter requestParameters.query was null or undefined when calling testBodyWithQueryParams.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling testBodyWithQueryParams.');
        }

        const queryParameters: any = {};

        if (requestParameters.query !== undefined) {
            queryParameters['query'] = requestParameters.query;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/fake/body-with-query-params`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UserToJSON(requestParameters.user),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async testBodyWithQueryParams(requestParameters: TestBodyWithQueryParamsRequest, initOverrides?: RequestInit): Promise<void> {
        await this.testBodyWithQueryParamsRaw(requestParameters, initOverrides);
    }

    /**
     * To test \"client\" model
     * To test \"client\" model
     */
    async testClientModelRaw(requestParameters: TestClientModelRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Client>> {
        if (requestParameters.client === null || requestParameters.client === undefined) {
            throw new runtime.RequiredError('client','Required parameter requestParameters.client was null or undefined when calling testClientModel.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/fake`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: ClientToJSON(requestParameters.client),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ClientFromJSON(jsonValue));
    }

    /**
     * To test \"client\" model
     * To test \"client\" model
     */
    async testClientModel(requestParameters: TestClientModelRequest, initOverrides?: RequestInit): Promise<Client> {
        const response = await this.testClientModelRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Fake endpoint for testing various parameters 假端點 偽のエンドポイント 가짜 엔드 포인트 
     * Fake endpoint for testing various parameters 假端點 偽のエンドポイント 가짜 엔드 포인트 
     */
    async testEndpointParametersRaw(requestParameters: TestEndpointParametersRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.number === null || requestParameters.number === undefined) {
            throw new runtime.RequiredError('number','Required parameter requestParameters.number was null or undefined when calling testEndpointParameters.');
        }

        if (requestParameters._double === null || requestParameters._double === undefined) {
            throw new runtime.RequiredError('_double','Required parameter requestParameters._double was null or undefined when calling testEndpointParameters.');
        }

        if (requestParameters.patternWithoutDelimiter === null || requestParameters.patternWithoutDelimiter === undefined) {
            throw new runtime.RequiredError('patternWithoutDelimiter','Required parameter requestParameters.patternWithoutDelimiter was null or undefined when calling testEndpointParameters.');
        }

        if (requestParameters._byte === null || requestParameters._byte === undefined) {
            throw new runtime.RequiredError('_byte','Required parameter requestParameters._byte was null or undefined when calling testEndpointParameters.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const consumes: runtime.Consume[] = [
            { contentType: 'application/x-www-form-urlencoded' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.integer !== undefined) {
            formParams.append('integer', requestParameters.integer as any);
        }

        if (requestParameters.int32 !== undefined) {
            formParams.append('int32', requestParameters.int32 as any);
        }

        if (requestParameters.int64 !== undefined) {
            formParams.append('int64', requestParameters.int64 as any);
        }

        if (requestParameters.number !== undefined) {
            formParams.append('number', requestParameters.number as any);
        }

        if (requestParameters._float !== undefined) {
            formParams.append('float', requestParameters._float as any);
        }

        if (requestParameters._double !== undefined) {
            formParams.append('double', requestParameters._double as any);
        }

        if (requestParameters.string !== undefined) {
            formParams.append('string', requestParameters.string as any);
        }

        if (requestParameters.patternWithoutDelimiter !== undefined) {
            formParams.append('pattern_without_delimiter', requestParameters.patternWithoutDelimiter as any);
        }

        if (requestParameters._byte !== undefined) {
            formParams.append('byte', requestParameters._byte as any);
        }

        if (requestParameters.binary !== undefined) {
            formParams.append('binary', requestParameters.binary as any);
        }

        if (requestParameters.date !== undefined) {
            formParams.append('date', requestParameters.date as any);
        }

        if (requestParameters.dateTime !== undefined) {
            formParams.append('dateTime', requestParameters.dateTime as any);
        }

        if (requestParameters.password !== undefined) {
            formParams.append('password', requestParameters.password as any);
        }

        if (requestParameters.callback !== undefined) {
            formParams.append('callback', requestParameters.callback as any);
        }

        const response = await this.request({
            path: `/fake`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Fake endpoint for testing various parameters 假端點 偽のエンドポイント 가짜 엔드 포인트 
     * Fake endpoint for testing various parameters 假端點 偽のエンドポイント 가짜 엔드 포인트 
     */
    async testEndpointParameters(requestParameters: TestEndpointParametersRequest, initOverrides?: RequestInit): Promise<void> {
        await this.testEndpointParametersRaw(requestParameters, initOverrides);
    }

    /**
     * To test enum parameters
     * To test enum parameters
     */
    async testEnumParametersRaw(requestParameters: TestEnumParametersRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        if (requestParameters.enumQueryStringArray) {
            queryParameters['enum_query_string_array'] = requestParameters.enumQueryStringArray;
        }

        if (requestParameters.enumQueryString !== undefined) {
            queryParameters['enum_query_string'] = requestParameters.enumQueryString;
        }

        if (requestParameters.enumQueryInteger !== undefined) {
            queryParameters['enum_query_integer'] = requestParameters.enumQueryInteger;
        }

        if (requestParameters.enumQueryDouble !== undefined) {
            queryParameters['enum_query_double'] = requestParameters.enumQueryDouble;
        }

        if (requestParameters.enumQueryModelArray) {
            queryParameters['enum_query_model_array'] = requestParameters.enumQueryModelArray;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.enumHeaderStringArray) {
            headerParameters['enum_header_string_array'] = requestParameters.enumHeaderStringArray.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.enumHeaderString !== undefined && requestParameters.enumHeaderString !== null) {
            headerParameters['enum_header_string'] = String(requestParameters.enumHeaderString);
        }

        const consumes: runtime.Consume[] = [
            { contentType: 'application/x-www-form-urlencoded' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.enumFormStringArray) {
            formParams.append('enum_form_string_array', requestParameters.enumFormStringArray.join(runtime.COLLECTION_FORMATS["csv"]));
        }

        if (requestParameters.enumFormString !== undefined) {
            formParams.append('enum_form_string', requestParameters.enumFormString as any);
        }

        const response = await this.request({
            path: `/fake`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * To test enum parameters
     * To test enum parameters
     */
    async testEnumParameters(requestParameters: TestEnumParametersRequest = {}, initOverrides?: RequestInit): Promise<void> {
        await this.testEnumParametersRaw(requestParameters, initOverrides);
    }

    /**
     * Fake endpoint to test group parameters (optional)
     * Fake endpoint to test group parameters (optional)
     */
    async testGroupParametersRaw(requestParameters: TestGroupParametersRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.requiredStringGroup === null || requestParameters.requiredStringGroup === undefined) {
            throw new runtime.RequiredError('requiredStringGroup','Required parameter requestParameters.requiredStringGroup was null or undefined when calling testGroupParameters.');
        }

        if (requestParameters.requiredBooleanGroup === null || requestParameters.requiredBooleanGroup === undefined) {
            throw new runtime.RequiredError('requiredBooleanGroup','Required parameter requestParameters.requiredBooleanGroup was null or undefined when calling testGroupParameters.');
        }

        if (requestParameters.requiredInt64Group === null || requestParameters.requiredInt64Group === undefined) {
            throw new runtime.RequiredError('requiredInt64Group','Required parameter requestParameters.requiredInt64Group was null or undefined when calling testGroupParameters.');
        }

        const queryParameters: any = {};

        if (requestParameters.requiredStringGroup !== undefined) {
            queryParameters['required_string_group'] = requestParameters.requiredStringGroup;
        }

        if (requestParameters.requiredInt64Group !== undefined) {
            queryParameters['required_int64_group'] = requestParameters.requiredInt64Group;
        }

        if (requestParameters.stringGroup !== undefined) {
            queryParameters['string_group'] = requestParameters.stringGroup;
        }

        if (requestParameters.int64Group !== undefined) {
            queryParameters['int64_group'] = requestParameters.int64Group;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.requiredBooleanGroup !== undefined && requestParameters.requiredBooleanGroup !== null) {
            headerParameters['required_boolean_group'] = String(requestParameters.requiredBooleanGroup);
        }

        if (requestParameters.booleanGroup !== undefined && requestParameters.booleanGroup !== null) {
            headerParameters['boolean_group'] = String(requestParameters.booleanGroup);
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_test", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/fake`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Fake endpoint to test group parameters (optional)
     * Fake endpoint to test group parameters (optional)
     */
    async testGroupParameters(requestParameters: TestGroupParametersRequest, initOverrides?: RequestInit): Promise<void> {
        await this.testGroupParametersRaw(requestParameters, initOverrides);
    }

    /**
     * 
     * test inline additionalProperties
     */
    async testInlineAdditionalPropertiesRaw(requestParameters: TestInlineAdditionalPropertiesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.requestBody === null || requestParameters.requestBody === undefined) {
            throw new runtime.RequiredError('requestBody','Required parameter requestParameters.requestBody was null or undefined when calling testInlineAdditionalProperties.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/fake/inline-additionalProperties`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.requestBody,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * 
     * test inline additionalProperties
     */
    async testInlineAdditionalProperties(requestParameters: TestInlineAdditionalPropertiesRequest, initOverrides?: RequestInit): Promise<void> {
        await this.testInlineAdditionalPropertiesRaw(requestParameters, initOverrides);
    }

    /**
     * 
     * test json serialization of form data
     */
    async testJsonFormDataRaw(requestParameters: TestJsonFormDataRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.param === null || requestParameters.param === undefined) {
            throw new runtime.RequiredError('param','Required parameter requestParameters.param was null or undefined when calling testJsonFormData.');
        }

        if (requestParameters.param2 === null || requestParameters.param2 === undefined) {
            throw new runtime.RequiredError('param2','Required parameter requestParameters.param2 was null or undefined when calling testJsonFormData.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const consumes: runtime.Consume[] = [
            { contentType: 'application/x-www-form-urlencoded' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.param !== undefined) {
            formParams.append('param', requestParameters.param as any);
        }

        if (requestParameters.param2 !== undefined) {
            formParams.append('param2', requestParameters.param2 as any);
        }

        const response = await this.request({
            path: `/fake/jsonFormData`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * 
     * test json serialization of form data
     */
    async testJsonFormData(requestParameters: TestJsonFormDataRequest, initOverrides?: RequestInit): Promise<void> {
        await this.testJsonFormDataRaw(requestParameters, initOverrides);
    }

    /**
     * To test the collection format in query parameters
     */
    async testQueryParameterCollectionFormatRaw(requestParameters: TestQueryParameterCollectionFormatRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.pipe === null || requestParameters.pipe === undefined) {
            throw new runtime.RequiredError('pipe','Required parameter requestParameters.pipe was null or undefined when calling testQueryParameterCollectionFormat.');
        }

        if (requestParameters.ioutil === null || requestParameters.ioutil === undefined) {
            throw new runtime.RequiredError('ioutil','Required parameter requestParameters.ioutil was null or undefined when calling testQueryParameterCollectionFormat.');
        }

        if (requestParameters.http === null || requestParameters.http === undefined) {
            throw new runtime.RequiredError('http','Required parameter requestParameters.http was null or undefined when calling testQueryParameterCollectionFormat.');
        }

        if (requestParameters.url === null || requestParameters.url === undefined) {
            throw new runtime.RequiredError('url','Required parameter requestParameters.url was null or undefined when calling testQueryParameterCollectionFormat.');
        }

        if (requestParameters.context === null || requestParameters.context === undefined) {
            throw new runtime.RequiredError('context','Required parameter requestParameters.context was null or undefined when calling testQueryParameterCollectionFormat.');
        }

        if (requestParameters.allowEmpty === null || requestParameters.allowEmpty === undefined) {
            throw new runtime.RequiredError('allowEmpty','Required parameter requestParameters.allowEmpty was null or undefined when calling testQueryParameterCollectionFormat.');
        }

        const queryParameters: any = {};

        if (requestParameters.pipe) {
            queryParameters['pipe'] = requestParameters.pipe.join(runtime.COLLECTION_FORMATS["pipes"]);
        }

        if (requestParameters.ioutil) {
            queryParameters['ioutil'] = requestParameters.ioutil.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.http) {
            queryParameters['http'] = requestParameters.http.join(runtime.COLLECTION_FORMATS["ssv"]);
        }

        if (requestParameters.url) {
            queryParameters['url'] = requestParameters.url.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.context) {
            queryParameters['context'] = requestParameters.context;
        }

        if (requestParameters.language !== undefined) {
            queryParameters['language'] = requestParameters.language;
        }

        if (requestParameters.allowEmpty !== undefined) {
            queryParameters['allowEmpty'] = requestParameters.allowEmpty;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/fake/test-query-parameters`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * To test the collection format in query parameters
     */
    async testQueryParameterCollectionFormat(requestParameters: TestQueryParameterCollectionFormatRequest, initOverrides?: RequestInit): Promise<void> {
        await this.testQueryParameterCollectionFormatRaw(requestParameters, initOverrides);
    }

}

/**
 * @export
 */
export const TestEnumParametersEnumHeaderStringArrayEnum = {
    GreaterThan: '>',
    Dollar: '$'
} as const;
export type TestEnumParametersEnumHeaderStringArrayEnum = typeof TestEnumParametersEnumHeaderStringArrayEnum[keyof typeof TestEnumParametersEnumHeaderStringArrayEnum];
/**
 * @export
 */
export const TestEnumParametersEnumHeaderStringEnum = {
    Abc: '_abc',
    Efg: '-efg',
    Xyz: '(xyz)'
} as const;
export type TestEnumParametersEnumHeaderStringEnum = typeof TestEnumParametersEnumHeaderStringEnum[keyof typeof TestEnumParametersEnumHeaderStringEnum];
/**
 * @export
 */
export const TestEnumParametersEnumQueryStringArrayEnum = {
    GreaterThan: '>',
    Dollar: '$'
} as const;
export type TestEnumParametersEnumQueryStringArrayEnum = typeof TestEnumParametersEnumQueryStringArrayEnum[keyof typeof TestEnumParametersEnumQueryStringArrayEnum];
/**
 * @export
 */
export const TestEnumParametersEnumQueryStringEnum = {
    Abc: '_abc',
    Efg: '-efg',
    Xyz: '(xyz)'
} as const;
export type TestEnumParametersEnumQueryStringEnum = typeof TestEnumParametersEnumQueryStringEnum[keyof typeof TestEnumParametersEnumQueryStringEnum];
/**
 * @export
 */
export const TestEnumParametersEnumQueryIntegerEnum = {
    NUMBER_1: 1,
    NUMBER_MINUS_2: -2
} as const;
export type TestEnumParametersEnumQueryIntegerEnum = typeof TestEnumParametersEnumQueryIntegerEnum[keyof typeof TestEnumParametersEnumQueryIntegerEnum];
/**
 * @export
 */
export const TestEnumParametersEnumQueryDoubleEnum = {
    NUMBER_1_DOT_1: 1.1,
    NUMBER_MINUS_1_DOT_2: -1.2
} as const;
export type TestEnumParametersEnumQueryDoubleEnum = typeof TestEnumParametersEnumQueryDoubleEnum[keyof typeof TestEnumParametersEnumQueryDoubleEnum];
/**
 * @export
 */
export const TestEnumParametersEnumFormStringArrayEnum = {
    GreaterThan: '>',
    Dollar: '$'
} as const;
export type TestEnumParametersEnumFormStringArrayEnum = typeof TestEnumParametersEnumFormStringArrayEnum[keyof typeof TestEnumParametersEnumFormStringArrayEnum];
/**
 * @export
 */
export const TestEnumParametersEnumFormStringEnum = {
    Abc: '_abc',
    Efg: '-efg',
    Xyz: '(xyz)'
} as const;
export type TestEnumParametersEnumFormStringEnum = typeof TestEnumParametersEnumFormStringEnum[keyof typeof TestEnumParametersEnumFormStringEnum];
