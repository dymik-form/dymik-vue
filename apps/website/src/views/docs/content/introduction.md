# Introduction

**Dymik Form** (`@dymik-form/dymik-vue`) is a Vue 3 library for rendering forms from JSON. You describe a form as data (its fields, the component that renders each field, and the validation rules) and Dymik renders it, keeps its state and validates it.

```json
{
  "name": "Newsletter",
  "fields": [
    {
      "name": "email",
      "label": "Email",
      "type": "InputText",
      "required": true,
      "props": { "placeholder": "you@example.com" },
      "validation_rules": [{ "type": "email", "message": "Invalid email" }]
    },
    {
      "name": "subscribe",
      "type": "Button",
      "props": { "type": "submit", "label": "Subscribe" }
    }
  ]
}
```

Because a form is just JSON, you can keep form definitions in a database or a headless CMS such as Directus, and change them without redeploying your app.

## Why Dymik Form

- **JSON-driven**: forms are data, not hand-written templates.
- **No UI library lock-in**: a field's `type` is the name of any Vue component, whether that is a PrimeVue component, one of your own, or a native element such as `div`.
- **Built-in validation**: required fields, types, lengths, ranges, email, URL, regex and custom rules. It runs on [ArkType](https://arktype.io) or [Zod](https://zod.dev), and you can plug in your own library.
- **Headless state**: `FormModel` holds values and errors, so you can read, set, validate or reset a form from code.
- **Optional endpoint submission**: point a form at a `submit_endpoint` and Dymik POSTs the values as JSON.

## How it fits together

| Piece | Role |
|---|---|
| `FormItem` | The JSON shape that describes a form. |
| `FormModel` | A class you build from a `FormItem`. It holds values and errors and runs validation. |
| `DymikForm` | The component that renders a `FormModel` and emits events. |
| `ValidatorUtils` | The global validation engine: ArkType (default), Zod, custom rules. |

## Recommended UI library

Dymik Form has no UI dependency, but it pairs well with [PrimeVue](https://primevue.org). PrimeVue components already support `v-model`, `invalid`, `disabled` and the `value-change` event, which is everything Dymik needs. The examples in these docs and the [live preview](/preview) use PrimeVue.

Next: [Installation](/docs/installation).
