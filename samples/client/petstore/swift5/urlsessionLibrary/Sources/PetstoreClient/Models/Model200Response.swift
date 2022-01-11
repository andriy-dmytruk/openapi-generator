//
// Model200Response.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

@available(*, deprecated, renamed: "PetstoreClientAPI.Model200Response")
public typealias Model200Response = PetstoreClientAPI.Model200Response

extension PetstoreClientAPI {

/** Model for testing model name starting with number */
public final class Model200Response: Codable, JSONEncodable, Hashable {

    public var name: Int?
    public var _class: String?

    public init(name: Int? = nil, _class: String? = nil) {
        self.name = name
        self._class = _class
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case name
        case _class = "class"
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(name, forKey: .name)
        try container.encodeIfPresent(_class, forKey: ._class)
    }

    public static func == (lhs: Model200Response, rhs: Model200Response) -> Bool {
        lhs.name == rhs.name &&
        lhs._class == rhs._class
        
    }

    public func hash(into hasher: inout Hasher) {
        hasher.combine(name?.hashValue)
        hasher.combine(_class?.hashValue)
        
    }
}

}
