import fs from "node:fs";
import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";

const schema = JSON.parse(
  fs.readFileSync("data/property-schema.json", "utf8")
);

const testData = JSON.parse(
  fs.readFileSync("data/generated/properties-invalid-test.json", "utf8")
);

const ajv = new Ajv2020({
  allErrors: true
});

addFormats(ajv);

const validateProperty = ajv.compile(schema.items);

const expectedResults = [
  true,
  false,
  false,
  false,
  false
];

let allTestsPassed = true;

testData.forEach((property, index) => {
  const valid = validateProperty(property);
  const expected = expectedResults[index];

  if (valid === expected) {
    console.log(
      `Test ${index + 1}: PASS - ${
        valid ? "valid record accepted" : "invalid record rejected"
      }`
    );
  } else {
    console.log(
      `Test ${index + 1}: FAIL - unexpected validation result`
    );
    allTestsPassed = false;
  }

  if (!valid) {
    console.log(JSON.stringify(validateProperty.errors, null, 2));
  }
});

if (allTestsPassed) {
  console.log("\nAll property validation tests passed.");
  process.exit(0);
}

console.log("\nSome property validation tests failed.");
process.exit(1);
