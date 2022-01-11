/*
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

package org.openapitools.api;

import io.micronaut.http.annotation.*;
import io.micronaut.core.annotation.*;
import io.micronaut.http.client.annotation.Client;
import org.openapitools.query.QueryParam;
import io.micronaut.core.convert.format.Format;
import reactor.core.publisher.Mono;
import java.math.BigDecimal;
import java.io.File;
import org.openapitools.model.FileSchemaTestClass;
import java.time.LocalDate;
import java.time.LocalDateTime;
import org.openapitools.model.ModelClient;
import org.openapitools.model.OuterComposite;
import org.openapitools.model.User;
import org.openapitools.model.XmlItem;
import javax.annotation.Generated;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;
import javax.validation.constraints.*;

@Generated(value="org.openapitools.codegen.languages.JavaMicronautClientCodegen")
@Client("${base-path}")
public interface FakeApi {
    /**
     * creates an XmlItem
     * this route creates an XmlItem
     *
     * @param xmlItem XmlItem Body (required)
     */
    @Post(uri="/fake/create_xml_item")
    @Produces(value={"application/xml"})
    @Consumes(value={"application/json"})
    Mono<Object> createXmlItem(
        @Body @Valid @NotNull XmlItem xmlItem
  );
    /**
     * Test serialization of outer boolean types
     *
     * @param _body Input boolean as post body (optional)
     * @return Boolean
     */
    @Post(uri="/fake/outer/boolean")
    @Produces(value={"application/json"})
    @Consumes(value={"*/*"})
    Mono<Boolean> fakeOuterBooleanSerialize(
        @Body Boolean _body
  );
    /**
     * Test serialization of object with outer number type
     *
     * @param _body Input composite as post body (optional)
     * @return OuterComposite
     */
    @Post(uri="/fake/outer/composite")
    @Produces(value={"application/json"})
    @Consumes(value={"*/*"})
    Mono<OuterComposite> fakeOuterCompositeSerialize(
        @Body @Valid OuterComposite _body
  );
    /**
     * Test serialization of outer number types
     *
     * @param _body Input number as post body (optional)
     * @return BigDecimal
     */
    @Post(uri="/fake/outer/number")
    @Produces(value={"application/json"})
    @Consumes(value={"*/*"})
    Mono<BigDecimal> fakeOuterNumberSerialize(
        @Body BigDecimal _body
  );
    /**
     * Test serialization of outer string types
     *
     * @param _body Input string as post body (optional)
     * @return String
     */
    @Post(uri="/fake/outer/string")
    @Produces(value={"application/json"})
    @Consumes(value={"*/*"})
    Mono<String> fakeOuterStringSerialize(
        @Body String _body
  );
    /**
     * For this test, the body for this request much reference a schema named &#x60;File&#x60;.
     *
     * @param _body  (required)
     */
    @Put(uri="/fake/body-with-file-schema")
    @Produces(value={"application/json"})
    @Consumes(value={"application/json"})
    Mono<Object> testBodyWithFileSchema(
        @Body @Valid @NotNull FileSchemaTestClass _body
  );
    /**
     * testBodyWithQueryParams
     *
     * @param query  (required)
     * @param _body  (required)
     */
    @Put(uri="/fake/body-with-query-params")
    @Produces(value={"application/json"})
    @Consumes(value={"application/json"})
    Mono<Object> testBodyWithQueryParams(
        @QueryParam(name="query") @NotNull String query, 
        @Body @Valid @NotNull User _body
  );
    /**
     * To test \&quot;client\&quot; model
     * To test \&quot;client\&quot; model
     *
     * @param _body client model (required)
     * @return ModelClient
     */
    @Patch(uri="/fake")
    @Produces(value={"application/json"})
    @Consumes(value={"application/json"})
    Mono<ModelClient> testClientModel(
        @Body @Valid @NotNull ModelClient _body
  );
    /**
     * Fake endpoint for testing various parameters  假端點  偽のエンドポイント  가짜 엔드 포인트
     * Fake endpoint for testing various parameters  假端點  偽のエンドポイント  가짜 엔드 포인트
     *
     * @param number None (required)
     * @param _double None (required)
     * @param patternWithoutDelimiter None (required)
     * @param _byte None (required)
     * @param integer None (optional)
     * @param int32 None (optional)
     * @param int64 None (optional)
     * @param _float None (optional)
     * @param string None (optional)
     * @param binary None (optional)
     * @param date None (optional)
     * @param dateTime None (optional)
     * @param password None (optional)
     * @param paramCallback None (optional)
     */
    @Post(uri="/fake")
    @Produces(value={"application/x-www-form-urlencoded"})
    @Consumes(value={"application/json"})
    Mono<Object> testEndpointParameters(
        @NotNull @DecimalMin("32.1") @DecimalMax("543.2") BigDecimal number, 
        @NotNull @DecimalMin("67.8") @DecimalMax("123.4") Double _double, 
        @NotNull @Pattern(regexp="^[A-Z].*") String patternWithoutDelimiter, 
        @NotNull byte[] _byte, 
        @Min(10) @Max(100) Integer integer, 
        @Min(20) @Max(200) Integer int32, 
        Long int64, 
        @DecimalMax("987.6") Float _float, 
        @Pattern(regexp="/[a-z]/i") String string, 
        File binary, 
        @Format("yyyy-MM-dd") LocalDate date, 
        @Format("yyyy-MM-dd'T'HH:mm:ss.SSSXXXX") LocalDateTime dateTime, 
        @Size(min=10, max=64) String password, 
        String paramCallback
  );
    /**
     * To test enum parameters
     * To test enum parameters
     *
     * @param enumHeaderStringArray Header parameter enum test (string array) (optional)
     * @param enumHeaderString Header parameter enum test (string) (optional, default to -efg)
     * @param enumQueryStringArray Query parameter enum test (string array) (optional)
     * @param enumQueryString Query parameter enum test (string) (optional, default to -efg)
     * @param enumQueryInteger Query parameter enum test (double) (optional)
     * @param enumQueryDouble Query parameter enum test (double) (optional)
     * @param enumFormStringArray Form parameter enum test (string array) (optional, default to $)
     * @param enumFormString Form parameter enum test (string) (optional, default to -efg)
     */
    @Get(uri="/fake")
    @Produces(value={"application/x-www-form-urlencoded"})
    @Consumes(value={"application/json"})
    Mono<Object> testEnumParameters(
        @Header(name="enum_header_string_array") List<String> enumHeaderStringArray, 
        @Header(name="enum_header_string", defaultValue="-efg") String enumHeaderString, 
        @QueryParam(name="enum_query_string_array", format=QueryParam.Format.CSV) List<String> enumQueryStringArray, 
        @QueryParam(name="enum_query_string", defaultValue="-efg") String enumQueryString, 
        @QueryParam(name="enum_query_integer") Integer enumQueryInteger, 
        @QueryParam(name="enum_query_double") Double enumQueryDouble, 
        List<String> enumFormStringArray, 
        String enumFormString
  );
    /**
     * Fake endpoint to test group parameters (optional)
     * Fake endpoint to test group parameters (optional)
     *
     * @param requiredStringGroup Required String in group parameters (required)
     * @param requiredBooleanGroup Required Boolean in group parameters (required)
     * @param requiredInt64Group Required Integer in group parameters (required)
     * @param stringGroup String in group parameters (optional)
     * @param booleanGroup Boolean in group parameters (optional)
     * @param int64Group Integer in group parameters (optional)
     */
    @Delete(uri="/fake")
    @Consumes(value={"application/json"})
    Mono<Object> testGroupParameters(
        @QueryParam(name="required_string_group") @NotNull Integer requiredStringGroup, 
        @Header(name="required_boolean_group") @NotNull Boolean requiredBooleanGroup, 
        @QueryParam(name="required_int64_group") @NotNull Long requiredInt64Group, 
        @QueryParam(name="string_group") Integer stringGroup, 
        @Header(name="boolean_group") Boolean booleanGroup, 
        @QueryParam(name="int64_group") Long int64Group
  );
    /**
     * test inline additionalProperties
     *
     * @param param request body (required)
     */
    @Post(uri="/fake/inline-additionalProperties")
    @Produces(value={"application/json"})
    @Consumes(value={"application/json"})
    Mono<Object> testInlineAdditionalProperties(
        @Body @NotNull Map<String, String> param
  );
    /**
     * test json serialization of form data
     *
     * @param param field1 (required)
     * @param param2 field2 (required)
     */
    @Get(uri="/fake/jsonFormData")
    @Produces(value={"application/x-www-form-urlencoded"})
    @Consumes(value={"application/json"})
    Mono<Object> testJsonFormData(
        @NotNull String param, 
        @NotNull String param2
  );
    /**
     * To test the collection format in query parameters
     *
     * @param pipe  (required)
     * @param ioutil  (required)
     * @param http  (required)
     * @param url  (required)
     * @param context  (required)
     */
    @Put(uri="/fake/test-query-parameters")
    @Consumes(value={"application/json"})
    Mono<Object> testQueryParameterCollectionFormat(
        @QueryParam(name="pipe", format=QueryParam.Format.CSV) @NotNull List<String> pipe, 
        @QueryParam(name="ioutil", format=QueryParam.Format.CSV) @NotNull List<String> ioutil, 
        @QueryParam(name="http", format=QueryParam.Format.SSV) @NotNull List<String> http, 
        @QueryParam(name="url", format=QueryParam.Format.CSV) @NotNull List<String> url, 
        @QueryParam(name="context", format=QueryParam.Format.MULTI) @NotNull List<String> context
  );
}
