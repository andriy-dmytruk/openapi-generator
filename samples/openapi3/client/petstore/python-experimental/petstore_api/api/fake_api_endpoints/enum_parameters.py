# coding: utf-8

"""


    Generated by: https://openapi-generator.tech
"""

from dataclasses import dataclass
import re  # noqa: F401
import sys  # noqa: F401
import typing
import urllib3
from urllib3._collections import HTTPHeaderDict

from petstore_api import api_client, exceptions
import decimal  # noqa: F401
from datetime import date, datetime  # noqa: F401
from frozendict import frozendict  # noqa: F401

from petstore_api.schemas import (  # noqa: F401
    AnyTypeSchema,
    ComposedSchema,
    DictSchema,
    ListSchema,
    StrSchema,
    IntSchema,
    Int32Schema,
    Int64Schema,
    Float32Schema,
    Float64Schema,
    NumberSchema,
    UUIDSchema,
    DateSchema,
    DateTimeSchema,
    DecimalSchema,
    BoolSchema,
    BinarySchema,
    NoneSchema,
    none_type,
    Configuration,
    Unset,
    unset,
    ComposedBase,
    ListBase,
    DictBase,
    NoneBase,
    StrBase,
    IntBase,
    Int32Base,
    Int64Base,
    Float32Base,
    Float64Base,
    NumberBase,
    UUIDBase,
    DateBase,
    DateTimeBase,
    BoolBase,
    BinaryBase,
    Schema,
    _SchemaValidator,
    _SchemaTypeChecker,
    _SchemaEnumMaker
)

# query params


class EnumQueryStringArraySchema(
    ListSchema
):
    
    
    class _items(
        _SchemaEnumMaker(
            enum_value_to_name={
                ">": "GREATER_THAN",
                "$": "DOLLAR",
            }
        ),
        StrSchema
    ):
        
        @classmethod
        @property
        def GREATER_THAN(cls):
            return cls(">")
        
        @classmethod
        @property
        def DOLLAR(cls):
            return cls("$")


class EnumQueryStringSchema(
    _SchemaEnumMaker(
        enum_value_to_name={
            "_abc": "_ABC",
            "-efg": "EFG",
            "(xyz)": "XYZ",
        }
    ),
    StrSchema
):
    
    @classmethod
    @property
    def _ABC(cls):
        return cls("_abc")
    
    @classmethod
    @property
    def EFG(cls):
        return cls("-efg")
    
    @classmethod
    @property
    def XYZ(cls):
        return cls("(xyz)")


class EnumQueryIntegerSchema(
    _SchemaEnumMaker(
        enum_value_to_name={
            1: "POSITIVE_1",
            -2: "NEGATIVE_2",
        }
    ),
    Int32Schema
):
    
    @classmethod
    @property
    def POSITIVE_1(cls):
        return cls(1)
    
    @classmethod
    @property
    def NEGATIVE_2(cls):
        return cls(-2)


class EnumQueryDoubleSchema(
    _SchemaEnumMaker(
        enum_value_to_name={
            1.1: "POSITIVE_1_PT_1",
            -1.2: "NEGATIVE_1_PT_2",
        }
    ),
    Float64Schema
):
    
    @classmethod
    @property
    def POSITIVE_1_PT_1(cls):
        return cls(1.1)
    
    @classmethod
    @property
    def NEGATIVE_1_PT_2(cls):
        return cls(-1.2)
RequestRequiredQueryParams = typing.TypedDict(
    'RequestRequiredQueryParams',
    {
    }
)
RequestOptionalQueryParams = typing.TypedDict(
    'RequestOptionalQueryParams',
    {
        'enum_query_string_array': EnumQueryStringArraySchema,
        'enum_query_string': EnumQueryStringSchema,
        'enum_query_integer': EnumQueryIntegerSchema,
        'enum_query_double': EnumQueryDoubleSchema,
    },
    total=False
)


class RequestQueryParams(RequestRequiredQueryParams, RequestOptionalQueryParams):
    pass


request_query_enum_query_string_array = api_client.QueryParameter(
    name="enum_query_string_array",
    style=api_client.ParameterStyle.FORM,
    schema=EnumQueryStringArraySchema,
    explode=True,
)
request_query_enum_query_string = api_client.QueryParameter(
    name="enum_query_string",
    style=api_client.ParameterStyle.FORM,
    schema=EnumQueryStringSchema,
    explode=True,
)
request_query_enum_query_integer = api_client.QueryParameter(
    name="enum_query_integer",
    style=api_client.ParameterStyle.FORM,
    schema=EnumQueryIntegerSchema,
    explode=True,
)
request_query_enum_query_double = api_client.QueryParameter(
    name="enum_query_double",
    style=api_client.ParameterStyle.FORM,
    schema=EnumQueryDoubleSchema,
    explode=True,
)
# header params


class EnumHeaderStringArraySchema(
    ListSchema
):
    
    
    class _items(
        _SchemaEnumMaker(
            enum_value_to_name={
                ">": "GREATER_THAN",
                "$": "DOLLAR",
            }
        ),
        StrSchema
    ):
        
        @classmethod
        @property
        def GREATER_THAN(cls):
            return cls(">")
        
        @classmethod
        @property
        def DOLLAR(cls):
            return cls("$")


class EnumHeaderStringSchema(
    _SchemaEnumMaker(
        enum_value_to_name={
            "_abc": "_ABC",
            "-efg": "EFG",
            "(xyz)": "XYZ",
        }
    ),
    StrSchema
):
    
    @classmethod
    @property
    def _ABC(cls):
        return cls("_abc")
    
    @classmethod
    @property
    def EFG(cls):
        return cls("-efg")
    
    @classmethod
    @property
    def XYZ(cls):
        return cls("(xyz)")
RequestRequiredHeaderParams = typing.TypedDict(
    'RequestRequiredHeaderParams',
    {
    }
)
RequestOptionalHeaderParams = typing.TypedDict(
    'RequestOptionalHeaderParams',
    {
        'enum_header_string_array': EnumHeaderStringArraySchema,
        'enum_header_string': EnumHeaderStringSchema,
    },
    total=False
)


class RequestHeaderParams(RequestRequiredHeaderParams, RequestOptionalHeaderParams):
    pass


request_header_enum_header_string_array = api_client.HeaderParameter(
    name="enum_header_string_array",
    style=api_client.ParameterStyle.SIMPLE,
    schema=EnumHeaderStringArraySchema,
)
request_header_enum_header_string = api_client.HeaderParameter(
    name="enum_header_string",
    style=api_client.ParameterStyle.SIMPLE,
    schema=EnumHeaderStringSchema,
)
# body param


class SchemaForRequestBodyApplicationXWwwFormUrlencoded(
    DictSchema
):
    
    
    class enum_form_string_array(
        ListSchema
    ):
        
        
        class _items(
            _SchemaEnumMaker(
                enum_value_to_name={
                    ">": "GREATER_THAN",
                    "$": "DOLLAR",
                }
            ),
            StrSchema
        ):
            
            @classmethod
            @property
            def GREATER_THAN(cls):
                return cls(">")
            
            @classmethod
            @property
            def DOLLAR(cls):
                return cls("$")
    
    
    class enum_form_string(
        _SchemaEnumMaker(
            enum_value_to_name={
                "_abc": "_ABC",
                "-efg": "EFG",
                "(xyz)": "XYZ",
            }
        ),
        StrSchema
    ):
        
        @classmethod
        @property
        def _ABC(cls):
            return cls("_abc")
        
        @classmethod
        @property
        def EFG(cls):
            return cls("-efg")
        
        @classmethod
        @property
        def XYZ(cls):
            return cls("(xyz)")


    def __new__(
        cls,
        *args: typing.Union[dict, frozendict, ],
        enum_form_string_array: typing.Union[enum_form_string_array, Unset] = unset,
        enum_form_string: typing.Union[enum_form_string, Unset] = unset,
        _configuration: typing.Optional[Configuration] = None,
        **kwargs: typing.Type[Schema],
    ) -> 'SchemaForRequestBodyApplicationXWwwFormUrlencoded':
        return super().__new__(
            cls,
            *args,
            enum_form_string_array=enum_form_string_array,
            enum_form_string=enum_form_string,
            _configuration=_configuration,
            **kwargs,
        )


request_body_body = api_client.RequestBody(
    content={
        'application/x-www-form-urlencoded': api_client.MediaType(
            schema=SchemaForRequestBodyApplicationXWwwFormUrlencoded),
    },
)
_path = '/fake'
_method = 'GET'


@dataclass
class ApiResponseFor400(api_client.ApiResponse):
    response: urllib3.HTTPResponse
    body: Unset = unset
    headers: Unset = unset


_response_for_400 = api_client.OpenApiResponse(
    response_cls=ApiResponseFor400,
)


@dataclass
class ApiResponseFor404(api_client.ApiResponse):
    response: urllib3.HTTPResponse
    body: Unset = unset
    headers: Unset = unset


_response_for_404 = api_client.OpenApiResponse(
    response_cls=ApiResponseFor404,
)
_status_code_to_response = {
    '400': _response_for_400,
    '404': _response_for_404,
}


class EnumParameters(api_client.Api):

    def enum_parameters(
        self: api_client.Api,
        body: typing.Union[SchemaForRequestBodyApplicationXWwwFormUrlencoded, Unset] = unset,
        query_params: RequestQueryParams = frozendict(),
        header_params: RequestHeaderParams = frozendict(),
        content_type: str = 'application/x-www-form-urlencoded',
        stream: bool = False,
        timeout: typing.Optional[typing.Union[int, typing.Tuple]] = None,
        skip_deserialization: bool = False,
    ) -> typing.Union[
        api_client.ApiResponseWithoutDeserialization
    ]:
        """
        To test enum parameters
        :param skip_deserialization: If true then api_response.response will be set but
            api_response.body and api_response.headers will not be deserialized into schema
            class instances
        """
        self._verify_typed_dict_inputs(RequestQueryParams, query_params)
        self._verify_typed_dict_inputs(RequestHeaderParams, header_params)

        _query_params = []
        for parameter in (
            request_query_enum_query_string_array,
            request_query_enum_query_string,
            request_query_enum_query_integer,
            request_query_enum_query_double,
        ):
            parameter_data = query_params.get(parameter.name, unset)
            if parameter_data is unset:
                continue
            serialized_data = parameter.serialize(parameter_data)
            _query_params.extend(serialized_data)

        _headers = HTTPHeaderDict()
        for parameter in (
            request_header_enum_header_string_array,
            request_header_enum_header_string,
        ):
            parameter_data = header_params.get(parameter.name, unset)
            if parameter_data is unset:
                continue
            serialized_data = parameter.serialize(parameter_data)
            _headers.extend(serialized_data)
        # TODO add cookie handling

        _fields = None
        _body = None
        if body is not unset:
            serialized_data = request_body_body.serialize(body, content_type)
            _headers.add('Content-Type', content_type)
            if 'fields' in serialized_data:
                _fields = serialized_data['fields']
            elif 'body' in serialized_data:
                _body = serialized_data['body']
        response = self.api_client.call_api(
            resource_path=_path,
            method=_method,
            query_params=tuple(_query_params),
            headers=_headers,
            fields=_fields,
            body=_body,
            stream=stream,
            timeout=timeout,
        )

        if skip_deserialization:
            api_response = api_client.ApiResponseWithoutDeserialization(response=response)
        else:
            response_for_status = _status_code_to_response.get(str(response.status))
            if response_for_status:
                api_response = response_for_status.deserialize(response, self.api_client.configuration)
            else:
                api_response = api_client.ApiResponseWithoutDeserialization(response=response)

        if not 200 <= response.status <= 299:
            raise exceptions.ApiException(api_response=api_response)

        return api_response
