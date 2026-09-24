# Form Schema

A form is described by plain TypeScript interfaces that are exported from the package root:

```typescript
import type {
  FormItem,
  FormField,
  ValidationRule,
  FormListItem,
  IValidatorLib,
} from '@dymik-form/dymik-vue';
```

## FormItem

The whole form. Pass it to `new FormModel(item)`.

```typescript
interface FormItem {
  name: string;
  description?: string;
  id?: string;
  fields: FormField[];
  css_classes?: string;
  submit_endpoint?: string;
  invalid?: boolean;
  disabled?: boolean;
}
```

| Property | Type | Description |
|---|---|---|
| `name` | `string` | Form name. |
| `description` | `string` | Optional description. |
| `id` | `string` | Optional identifier, for example the record id in your CMS. |
| `fields` | `FormField[]` | The fields, rendered in order. |
| `css_classes` | `string` | Classes added to the form wrapper. |
| `submit_endpoint` | `string` | If set, valid submissions are POSTed to this URL as JSON. |
| `disabled` | `boolean` | Disables every field. |
| `invalid` | `boolean` | Validation state. `FormModel` manages it, so you normally leave it out. |

## FormField

A single field.

```typescript
interface FormField {
  name: string;
  type: string;
  props: any;
  label?: string;
  required?: boolean;
  required_text?: string;
  disabled?: boolean;
  classes?: string;
  value?: any;
  error?: string;
  validation_rules?: ValidationRule[];
}
```

| Property | Type | Description |
|---|---|---|
| `name` | `string` | Unique key. It is used as the key in the form value object. |
| `type` | `string` | Name of the component that renders the field, e.g. `InputText`, `Select`, `Button`, `div`. |
| `props` | `object` | Props passed to the component with `v-bind`. Use `{}` if there are none. |
| `label` | `string` | Label shown above the field. |
| `required` | `boolean` | Shows a `*` marker and rejects empty values. |
| `required_text` | `string` | Error message for an empty required field. Defaults to `"<label> is required"`. |
| `disabled` | `boolean` | Disables this field. |
| `classes` | `string` | Classes added to the field wrapper, e.g. `full_width` or `half_width`. |
| `value` | `any` | Current value. Set it to provide an initial value. |
| `error` | `string` | Current error message. Managed by `FormModel`. |
| `validation_rules` | `ValidationRule[]` | Rules checked in order. The first failing rule sets the error. |

### Examples

A select with options:

```json
{
  "name": "country",
  "label": "Country",
  "type": "Select",
  "required": true,
  "required_text": "Please pick a country",
  "props": {
    "options": [
      { "label": "Vietnam", "value": "VN" },
      { "label": "Japan", "value": "JP" }
    ],
    "optionLabel": "label",
    "optionValue": "value",
    "placeholder": "Select a country"
  },
  "classes": "half_width"
}
```

A number with a range:

```json
{
  "name": "age",
  "label": "Age",
  "type": "InputNumber",
  "props": {},
  "validation_rules": [
    { "type": "min", "value": 18, "message": "You must be at least 18" },
    { "type": "max", "value": 120, "message": "Please enter a real age" }
  ]
}
```

Non-input content, such as a PrimeVue divider:

```json
{ "name": "divider", "type": "Divider", "props": {}, "classes": "full_width" }
```

## ValidationRule

```typescript
interface ValidationRule {
  type:
    | 'string' | 'number' | 'boolean' | 'date'
    | 'regex' | 'min' | 'max' | 'minLength' | 'maxLength'
    | 'email' | 'url' | 'custom';
  message?: string;
  value?: string | number | boolean | ((value: any, formValue: any) => boolean);
}
```

- `type`: which check to run. See [Validation](/docs/validation#rule-types) for what each type does.
- `value`: the rule's argument, e.g. the length for `minLength`, the pattern for `regex`, or the validator name for `custom`.
- `message`: the error shown when the rule fails. Defaults to `"Invalid value for <label>"`.

## FormListItem

A lightweight summary of a form, useful for lists of available forms:

```typescript
interface FormListItem {
  id: string;
  name: string;
  description?: string;
}
```

## IValidatorLib

The contract for a validation library adapter. See [Adding a validator library](/docs/validation#adding-a-validator-library).

```typescript
interface IValidatorLib {
  schemas: Record<ValidationRule['type'], () => StandardSchema> | {};
  validate(rule: ValidationRule, value: any): boolean;
  schemaFactory(type: ValidationRule['type'], ruleValue: any): StandardSchema;
}
```

`StandardSchema` is `StandardSchemaV1` from [`@standard-schema/spec`](https://github.com/standard-schema/standard-schema).
