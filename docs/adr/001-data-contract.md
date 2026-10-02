# ADR 001: Property Listing Data Contract

## Status

Accepted

## Context

The neighborhood listing platform needs a consistent data structure for property cards, future property detail pages, local sponsor information, filtering, and possible voice-assistant features.

The application uses fictional seed data generated with AI assistance. Because AI-generated data can use inconsistent field names, nesting, or data types, the application needs a defined contract and validation process.

The project also needs to decide how property amenities and local sponsors should be represented.

## Decision

We will use a strict JSON Schema as the data contract for property listing records.

Each Property record must include:

* `property_id`
* `address`
* `city`
* `state`
* `zip_code`
* `price`
* `bedrooms`
* `bathrooms`
* `square_feet`
* `amenities`
* `local_sponsors`

The schema uses constraints such as required fields, nonnegative numeric values, ZIP-code pattern validation, minimum string lengths, unique amenities, and `additionalProperties: false`.

The seed data contains exactly five fictional property records. The generated data is validated with Ajv before being used by the application.

For the current prototype:

* `amenities` will remain an array of strings.
* `local_sponsors` will remain embedded within each Property record.

These choices keep the prototype simple and allow the existing React components to consume the data directly.

## Alternatives Considered

### Alternative 1: Less Strict JSON Data

The application could accept flexible JSON without requiring specific fields or rejecting unknown properties.

This would be easier to generate initially, but malformed or inconsistent records could reach the application and cause problems for components.

### Alternative 2: Normalized Amenity Structure

Amenities could become a separate `Amenity` entity connected to properties through a `PropertyAmenity` relationship.

This would improve consistency and make it easier to add metadata, categories, and standardized values. However, it would add complexity that is not currently necessary for the small prototype.

### Alternative 3: Normalized Sponsor Structure

Sponsors could become a separate `Sponsor` entity connected to properties through a `PropertySponsor` relationship.

This would reduce duplicate sponsor information and make sponsor updates easier. It would also support future sponsorship information such as campaign dates and other relationship-specific data.

For the current prototype, this additional structure is not necessary.

## Consequences

### Positive Consequences

* Property records have a predictable structure.
* Invalid data can be detected before it reaches the application.
* React components can rely on consistent property fields.
* Unknown fields are rejected by the schema.
* AI-generated data can be checked instead of being trusted automatically.
* The schema provides a foundation for future database or API development.

### Negative Consequences

* New fields require the schema and related TypeScript types to be updated.
* Free-text amenities can still contain inconsistent wording.
* Embedded sponsor information can become duplicated if the same sponsor appears on multiple properties.
* A larger production application may eventually need normalized data structures.

## Validation and Testing

The project uses Ajv with the JSON Schema to validate property data.

Testing includes:

1. A valid property record.
2. A record missing `property_id`.
3. A record with a negative `price`.
4. A record with an invalid ZIP code.
5. A record containing an unknown property field.

The validator accepted the valid record and rejected all four intentionally invalid records.

## Future Considerations

If the application grows beyond a small prototype, the data model may be revised.

Potential future changes include:

* controlled or normalized amenity values;
* an `Amenity` entity and `PropertyAmenity` relationship;
* a separate `Sponsor` entity;
* a `PropertySponsor` relationship;
* database-level constraints and foreign keys;
* additional business rules for search, filtering, sponsorship, and voice features.

These changes are not required for the current prototype.
