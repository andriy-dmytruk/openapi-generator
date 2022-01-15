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
import io.micronaut.core.convert.format.Format;
import reactor.core.publisher.Mono;
import org.openapitools.model.ModelClient;
import javax.annotation.Generated;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;
import javax.validation.constraints.*;

@Generated(value="org.openapitools.codegen.languages.JavaMicronautClientCodegen")
@Client("${base-path}")
public interface AnotherFakeApi {
    /**
     * To test special tags
     * To test special tags and operation ID starting with number
     *
     * @param _body client model (required)
     * @return ModelClient
     */
    @Patch(uri="/another-fake/dummy")
    @Produces(value={"application/json"})
    @Consumes(value={"application/json"})
    Mono<ModelClient> call123testSpecialTags(
        @Body @Valid @NotNull ModelClient _body
  );
}
