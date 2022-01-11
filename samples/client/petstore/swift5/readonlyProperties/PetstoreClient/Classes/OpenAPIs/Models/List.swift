//
// List.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct List: Codable, JSONEncodable, Hashable {

    public private(set) var _123list: String?

    public init(_123list: String? = nil) {
        self._123list = _123list
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case _123list = "123-list"
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(_123list, forKey: ._123list)
    }
}

