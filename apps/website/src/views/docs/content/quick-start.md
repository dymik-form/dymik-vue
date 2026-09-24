# Quick Start

This page builds a working login form in three steps. It assumes you have [installed](/docs/installation) the plugin and registered PrimeVue's `InputText` and `Button`.

## 1. Describe the form in JSON

```json
{
  "name": "Login",
  "css_classes": "login-form",
  "fields": [
    {
      "label": "Email",
      "name": "email",
      "type": "InputText",
      "required": true,
      "props": { "placeholder": "Please enter your email" },
      "validation_rules": [
        { "type": "email", "message": "Invalid email" }
      ],
      "classes": "full_width"
    },
    {
      "label": "Password",
      "name": "password",
      "type": "InputText",
      "required": true,
      "props": { "type": "password", "placeholder": "Please enter your password" },
      "validation_rules": [
        { "type": "minLength", "value": 8, "message": "At least 8 characters" }
      ],
      "classes": "full_width"
    },
    {
      "name": "btnLogin",
      "type": "Button",
      "props": { "type": "submit", "label": "Login", "icon": "pi pi-user" },
      "classes": "full_width"
    }
  ]
}
```

Save it as `login.json`. You could also load it from an API or CMS.

## 2. Create a FormModel

`DymikForm` renders a `FormModel`, not raw JSON, so wrap the definition first. Wrap it in `ref()` (or `reactive()`) so that value and error changes re-render the form.

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { FormModel, type FormField } from '@dymik-form/dymik-vue';
import login from './login.json';

const form = ref(new FormModel({
  name: login.name,
  css_classes: login.css_classes,
  fields: login.fields as FormField[],
}));
</script>
```

## 3. Render it and handle submit

```vue
<template>
  <DymikForm :form="form" @submit="onSubmit" @value-change="onChange" />
</template>

<script setup lang="ts">
// ...continued from step 2

function onSubmit(values: Record<string, any>) {
  // Only called when every field is valid
  console.log('Login with', values); // { email: '...', password: '...' }
}

function onChange(values: Record<string, any>) {
  console.log('Current values', values);
}
</script>
```

Here is what happens at runtime:

1. Each field is rendered with the component named in its `type`, bound through `v-model` to `field.value`.
2. When a field emits `value-change`, Dymik validates that field and shows its error message under it.
3. When a button with `props.type === "submit"` is clicked, Dymik validates the whole form. If every field is valid, it emits `submit` with the form values.

## Next steps

- [DymikForm Component](/docs/dymik-form): props, events and how to build compatible field components.
- [Form Schema](/docs/form-schema): every option a form and a field accept.
- [Validation](/docs/validation): rule types, custom validators and switching between ArkType and Zod.
- [FormModel](/docs/form-model): controlling the form from code.
