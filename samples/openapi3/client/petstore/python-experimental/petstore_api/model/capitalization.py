# coding: utf-8

"""
    OpenAPI Petstore

    This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\  # noqa: E501

    The version of the OpenAPI document: 1.0.0
    Generated by: https://openapi-generator.tech
"""

import re  # noqa: F401
import sys  # noqa: F401
import typing  # noqa: F401
import functools  # noqa: F401

from frozendict import frozendict  # noqa: F401

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


class Capitalization(
    DictSchema
):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """
    smallCamel = StrSchema
    CapitalCamel = StrSchema
    small_Snake = StrSchema
    Capital_Snake = StrSchema
    SCA_ETH_Flow_Points = StrSchema
    ATT_NAME = StrSchema


    def __new__(
        cls,
        *args: typing.Union[dict, frozendict, ],
        smallCamel: typing.Union[smallCamel, Unset] = unset,
        CapitalCamel: typing.Union[CapitalCamel, Unset] = unset,
        small_Snake: typing.Union[small_Snake, Unset] = unset,
        Capital_Snake: typing.Union[Capital_Snake, Unset] = unset,
        SCA_ETH_Flow_Points: typing.Union[SCA_ETH_Flow_Points, Unset] = unset,
        ATT_NAME: typing.Union[ATT_NAME, Unset] = unset,
        _configuration: typing.Optional[Configuration] = None,
        **kwargs: typing.Type[Schema],
    ) -> 'Capitalization':
        return super().__new__(
            cls,
            *args,
            smallCamel=smallCamel,
            CapitalCamel=CapitalCamel,
            small_Snake=small_Snake,
            Capital_Snake=Capital_Snake,
            SCA_ETH_Flow_Points=SCA_ETH_Flow_Points,
            ATT_NAME=ATT_NAME,
            _configuration=_configuration,
            **kwargs,
        )
