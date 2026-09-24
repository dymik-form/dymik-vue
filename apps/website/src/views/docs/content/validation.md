# Validation

Every field can declare a `required` flag and a list of `validation_rules`. `FormModel` checks them whenever a field changes and when the form is submitted. The checks run through `ValidatorUtils`, a global engine that uses [ArkType](https://arktype.io) by default and can switch to [Zod](https://zod.dev) or your own library.

## How a field is validated

For each field, `FormModel.validateField()` does the following:

1. Clears the field's previous error.
2. **Required**: if `required` is `true` and the value is empty, the field fails with `required_text` (default: `"<label> is required"`).
3. **Optional and empty**: if the field is not required and the value is empty, it passes and no rules run.
4. **Rules**: runs `validation_rules` in order. The first rule that fails sets the error to its `message` (default: `"Invalid value for <label>"`), and the remaining rules are skipped.

> "Empty" means any falsy value: `undefined`, `null`, `''`, `0` and `false`. So a required checkbox must be checked, and a required number field rejects `0`.

## Rule types

| Type | `value` | Passes when |
|---|---|---|
| `string` | – | The value is a string. |
| `number` | – | The value is a number. |
| `boolean` | – | The value is a boolean. |
| `date` | – | The value is a valid date (see note below). |
| `email` | – | The value is an email address. |
| `url` | – | The value is a URL. |
| `minLength` | `number` | String length ≥ `value`. |
| `maxLength` | `number` | String length ≤ `value`. |
| `min` | `number` | Number ≥ `value`. |
| `max` | `number` | Number ≤ `value`. |
| `regex` | `string` | The string matches the pattern, e.g. `"^[0-9]{10}$"`. |
| `custom` | `string` | The registered custom validator with that name returns `true`. |

```json
"validation_rules": [
  { "type": "minLength", "value": 3, "message": "At least 3 characters" },
  { "type": "maxLength", "value": 20, "message": "At most 20 characters" },
  { "type": "regex", "value": "^[a-z0-9_]+$", "message": "Lowercase letters, digits and _ only" }
]
```

> **Dates:** with ArkType, `date` expects a parseable date **string**. With Zod, the value is passed through `new Date(value)` first, so `Date` objects and timestamps also pass.

## Custom validators

Custom rules refer to a validator **by name**, which keeps form definitions plain JSON. Register the function once, before your forms validate:

```typescript
import { ValidatorUtils } from '@dymik-form/dymik-vue';

ValidatorUtils.customValidators['isEven'] = (value) =>
  typeof value === 'number' && value % 2 === 0;

// Cross-field check: the second argument is the whole form value
ValidatorUtils.customValidators['matchesPassword'] = (value, formValue) =>
  value === formValue.password;
```

Then use it in a field:

```json
{
  "name": "confirm_password",
  "label": "Confirm password",
  "type": "InputText",
  "required": true,
  "props": { "type": "password" },
  "validation_rules": [
    { "type": "custom", "value": "matchesPassword", "message": "Passwords do not match" }
  ]
}
```

A custom validator receives:

- `value`: the value of the field being validated
- `formValue`: the current value of the whole form, from `getFormValue()`

If a rule names a validator that has not been registered, validation throws `Custom validation function "<name>" not found.`

## Switching validator library

`ValidatorUtils` ships with two adapters:

| Name | Library |
|---|---|
| `ark_type` | ArkType (default) |
| `zod` | Zod |

```typescript
import { ValidatorUtils } from '@dymik-form/dymik-vue';

ValidatorUtils.setLib('zod');
ValidatorUtils.setLib('ark_type');
```

`setLib` throws `Validator library "<name>" is not supported.` for unknown names.

> The validator is **global**. `setLib()` affects every form in the app, so call it once at startup, e.g. in `main.ts`.

## Validating outside a form

You can call the engine directly:

```typescript
import { ValidatorUtils, type ValidationRule } from '@dymik-form/dymik-vue';

const rule: ValidationRule = { type: 'min', value: 18 };

ValidatorUtils.validate(rule, 20, {}); // true
ValidatorUtils.validate(rule, 16, {}); // false
```

The signature is `validate(rule, value, formValue)`. `formValue` is only used by `custom` rules.

## Adding a validator library

Implement `IValidatorLib`, register it with `addLib`, then select it with `setLib`. Here is an adapter built on [Valibot](https://valibot.dev):

```typescript
import * as v from 'valibot';
import { ValidatorUtils, type IValidatorLib, type ValidationRule } from '@dymik-form/dymik-vue';

class ValibotValidatorLib implements IValidatorLib {
  schemas = {};

  validate({ type, value: ruleValue }: ValidationRule, value: any): boolean {
    return v.safeParse(this.schemaFactory(type, ruleValue), value).success;
  }

  schemaFactory(type: ValidationRule['type'], ruleValue: any) {
    switch (type) {
      case 'string': return v.string();
      case 'number': return v.number();
      case 'email': return v.pipe(v.string(), v.email());
      case 'minLength': return v.pipe(v.string(), v.minLength(Number(ruleValue)));
      // ...the remaining rule types
      default: throw new Error(`Unsupported rule type: ${type}`);
    }
  }
}

ValidatorUtils.addLib('valibot', new ValibotValidatorLib());
ValidatorUtils.setLib('valibot');
```

`custom` rules never reach the adapter, because `ValidatorUtils` resolves them from `customValidators` itself.
