# AI Log

 Notes: 
  - Got folder structure (`src/app`, `src/components`, `src/types`).
  - Got basic setup commands and basic accessibility rules.
  - Got basic setup commands and basic accessibility rules.

# LAB 2 STEP 2
AI Tool: Google AI Studio (Gemini)
Prompt: Give me only the TypeScript prop interfaces for PropertyCard, SponsorBanner, and SearchFilters for a neighborhood property listing website. No component code.

Review: Gemini suggested several properties. I removed features that were not needed for Lab 2, such as favorites, sharing, and impressions.

### STEP 9 AND 10
## Lab 2 - Accessibility Audit

- **Lighthouse Accessibility Score:** 98/100
- **Passed Audits:** 23/24 automated checks passed 
- **Manual Keyboard Audit:** Passed. Able to navigate the entire page using only Tab, Shift+Tab, Enter, and Space.

### Identified Issues and fix
- **Issue:** Heading elements are not in a sequentially-descending order.
- **Fix:** Changed heading tag in `SponsorBanner.tsx` to `<h2>` to maintain strict sequential heading hierarchy (`<h1>` $\rightarrow$ `<h2>`).

### LAB 3 - DATA CONTRACT REVIEW

## Schema Improvement and Validation

AI Tool: Gemini

Prompt: Review the property listing JSON output against the provided JSON Schema. Identify fields that do not match the schema and explain how the prompt should be improved.

Output Used:
- Used the feedback to correct the property structure.
- Changed the sponsor structure to use `local_sponsors`.
- Added `sponsor_id`, `name`, and `target_url` for each sponsor.
- Removed fields that were not included in the schema.

Output Rejected:
- Rejected fields and structures that were not part of the required schema.

Verification:
- Validated the corrected JSON data using the AJV validator.
- Validation passed.

## Normalization Review

AI Tools: ChatGPT and Gemini

Prompt: Review the property data structure for possible normalization issues and explain whether amenities and local sponsors should be normalized.

Output Used:
- Both tools identified that free-text amenities could create inconsistent names and make filtering harder.
- Both tools identified that embedded sponsor information could cause duplicate data if the application became larger.
- Both tools suggested that a larger production system could use separate tables for amenities and sponsors.

Decision:
- For this prototype, I kept `amenities` as a string array and kept `local_sponsors` embedded in each property.
- A larger version of the application could normalize these into separate structures.

Verification:
- The final structure follows the JSON Schema and passed the property validation tests.