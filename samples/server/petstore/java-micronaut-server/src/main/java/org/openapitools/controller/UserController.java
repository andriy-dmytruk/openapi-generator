/*
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

package org.openapitools.controller;

import io.micronaut.http.annotation.*;
import io.micronaut.core.annotation.Nullable;
import io.micronaut.core.convert.format.Format;
import reactor.core.publisher.Mono;
import org.openapitools.model.User;
import java.time.ZonedDateTime;
import javax.annotation.Generated;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.validation.Valid;
import javax.validation.constraints.*;
import io.swagger.annotations.*;

@Generated(value="org.openapitools.codegen.languages.JavaMicronautServerCodegen")
@Controller("${context-path}")
public class UserController {
    /**
     * Create user
     * This can only be done by the logged in user.
     *
     * @param user Created user object (required)
     */
    @ApiOperation(
        value = "Create user",
        nickname = "createUser",
        notes = "This can only be done by the logged in user.",
        authorizations = {
            @Authorization(value = "api_key")
        },
        tags={})
    @ApiResponses(value = {
        @ApiResponse(code = 0, message = "successful operation")})
    @Post(uri="/user")
    @Produces(value = {})
    @Consumes(value = {"application/json"})
    public Mono<Object> createUser(
        @Body @NotNull @Valid User user
    ) {
        // TODO implement createUser() body;
        Mono<Object> result = Mono.empty();
        return result;
    }

    /**
     * Creates list of users with given input array
     *
     * @param user List of user object (required)
     */
    @ApiOperation(
        value = "Creates list of users with given input array",
        nickname = "createUsersWithArrayInput",
        authorizations = {
            @Authorization(value = "api_key")
        },
        tags={})
    @ApiResponses(value = {
        @ApiResponse(code = 0, message = "successful operation")})
    @Post(uri="/user/createWithArray")
    @Produces(value = {})
    @Consumes(value = {"application/json"})
    public Mono<Object> createUsersWithArrayInput(
        @Body @NotNull List<User> user
    ) {
        // TODO implement createUsersWithArrayInput() body;
        Mono<Object> result = Mono.empty();
        return result;
    }

    /**
     * Creates list of users with given input array
     *
     * @param user List of user object (required)
     */
    @ApiOperation(
        value = "Creates list of users with given input array",
        nickname = "createUsersWithListInput",
        authorizations = {
            @Authorization(value = "api_key")
        },
        tags={})
    @ApiResponses(value = {
        @ApiResponse(code = 0, message = "successful operation")})
    @Post(uri="/user/createWithList")
    @Produces(value = {})
    @Consumes(value = {"application/json"})
    public Mono<Object> createUsersWithListInput(
        @Body @NotNull List<User> user
    ) {
        // TODO implement createUsersWithListInput() body;
        Mono<Object> result = Mono.empty();
        return result;
    }

    /**
     * Delete user
     * This can only be done by the logged in user.
     *
     * @param username The name that needs to be deleted (required)
     */
    @ApiOperation(
        value = "Delete user",
        nickname = "deleteUser",
        notes = "This can only be done by the logged in user.",
        authorizations = {
            @Authorization(value = "api_key")
        },
        tags={})
    @ApiResponses(value = {
        @ApiResponse(code = 400, message = "Invalid username supplied"),
        @ApiResponse(code = 404, message = "User not found")})
    @Delete(uri="/user/{username}")
    @Produces(value = {})
    public Mono<Object> deleteUser(
        @PathVariable(value="username") @NotNull String username
    ) {
        // TODO implement deleteUser() body;
        Mono<Object> result = Mono.empty();
        return result;
    }

    /**
     * Get user by user name
     *
     * @param username The name that needs to be fetched. Use user1 for testing. (required)
     * @return User
     */
    @ApiOperation(
        value = "Get user by user name",
        nickname = "getUserByName",
        response = User.class,
        authorizations = {},
        tags={})
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "successful operation", response = User.class),
        @ApiResponse(code = 400, message = "Invalid username supplied"),
        @ApiResponse(code = 404, message = "User not found")})
    @Get(uri="/user/{username}")
    @Produces(value = {"application/xml", "application/json"})
    public Mono<User> getUserByName(
        @PathVariable(value="username") @NotNull String username
    ) {
        // TODO implement getUserByName() body;
        Mono<User> result = Mono.empty();
        return result;
    }

    /**
     * Logs user into the system
     *
     * @param username The user name for login (required)
     * @param password The password for login in clear text (required)
     * @return String
     */
    @ApiOperation(
        value = "Logs user into the system",
        nickname = "loginUser",
        response = String.class,
        authorizations = {},
        tags={})
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "successful operation", response = String.class),
        @ApiResponse(code = 400, message = "Invalid username/password supplied")})
    @Get(uri="/user/login")
    @Produces(value = {"application/xml", "application/json"})
    public Mono<String> loginUser(
        @QueryValue(value="username") @NotNull @Pattern(regexp="^[a-zA-Z0-9]+[a-zA-Z0-9\\.\\-_]*[a-zA-Z0-9]+$") String username, 
        @QueryValue(value="password") @NotNull String password
    ) {
        // TODO implement loginUser() body;
        Mono<String> result = Mono.empty();
        return result;
    }

    /**
     * Logs out current logged in user session
     *
     */
    @ApiOperation(
        value = "Logs out current logged in user session",
        nickname = "logoutUser",
        authorizations = {
            @Authorization(value = "api_key")
        },
        tags={})
    @ApiResponses(value = {
        @ApiResponse(code = 0, message = "successful operation")})
    @Get(uri="/user/logout")
    @Produces(value = {})
    public Mono<Object> logoutUser() {
        // TODO implement logoutUser() body;
        Mono<Object> result = Mono.empty();
        return result;
    }

    /**
     * Updated user
     * This can only be done by the logged in user.
     *
     * @param username name that need to be deleted (required)
     * @param user Updated user object (required)
     */
    @ApiOperation(
        value = "Updated user",
        nickname = "updateUser",
        notes = "This can only be done by the logged in user.",
        authorizations = {
            @Authorization(value = "api_key")
        },
        tags={})
    @ApiResponses(value = {
        @ApiResponse(code = 400, message = "Invalid user supplied"),
        @ApiResponse(code = 404, message = "User not found")})
    @Put(uri="/user/{username}")
    @Produces(value = {})
    @Consumes(value = {"application/json"})
    public Mono<Object> updateUser(
        @PathVariable(value="username") @NotNull String username, 
        @Body @NotNull @Valid User user
    ) {
        // TODO implement updateUser() body;
        Mono<Object> result = Mono.empty();
        return result;
    }
}
