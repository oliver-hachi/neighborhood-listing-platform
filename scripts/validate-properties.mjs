import fs from "node:fs";
import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";

const schema = JSON.parse(
  fs.readFileSync("data/property-schema.json", "utf8")
);

const data = JSON.parse(
  fs.readFileSync("data/generated/properties-v2.json", "utf8")
);

const ajv = new Ajv2020({
  allErrors: true
});

addFormats(ajv);

const validate = ajv.compile(schema);
const valid = validate(data);

if (valid) {
  console.log("Validation passed.");
  process.exit(0);
}

console.log("Validation failed.");
console.log(JSON.stringify(validate.errors, null, 2));

process.exit(1);
