# FormModel

`FormModel` holds a form's state (field values, errors and validity) and the logic around it. `DymikForm` renders a `FormModel`, and you can also use the model directly to control the form from code.

```typescript
import { FormModel } from '@dymik-form/dymik-vue';
```

## Constructor

```typescript
new FormModel(form: FormItem)
```

Builds a model from a [`FormItem`](/docs/form-schema#formitem). The `fields` array is used as-is, not copied, so the model mutates those field objects when values and errors change.

```typescript
import { ref } from 'vue';

const form = ref(new FormModel({
  name: 'Profile',
  fields: [
    { name: 'name', label: 'Name', type: 'InputText', required: true, props: {} },
    { name: 'website', label: 'Website', type: 'InputText', props: {},
      validation_rules: [{ type: 'url', message: 'Invalid URL' }] },
  ],
}));
```

> Wrap the model in `ref()` or `reactive()`. The model mutates its own fields, and Vue only re-renders when those fields are reactive.

## Properties

| Property | Type | Description |
|---|---|---|
| `name` | `string` | Form name. |
| `id` | `string \| undefined` | Form identifier. |
| `description` | `string \| undefined` | Form description. |
| `fields` | `FormField[]` | Live field state: `value`, `error` and the rest of the config. |
| `css_classes` | `string \| undefined` | Classes for the form wrapper. |
| `submit_endpoint` | `string \| undefined` | URL for `submitToEndpoint()`. |
| `invalid` | `boolean` | `true` after a failed validation. Starts as `false`. |
| `disabled` | `boolean` | Disables every field. Defaults to `false`. |

## Validation

### validate(): boolean

Validates every field, updates each field's `error`, and returns `true` if all fields are valid.

```typescript
if (form.value.validate()) {
  save(form.value.getFormValue());
}
```

### validateField(name, value): boolean

Validates a single field against `value` and updates that field's `error`. The steps are described in [How a field is validated](/docs/validation#how-a-field-is-validated). A failing field sets `invalid` to `true`. A passing field does **not** reset `invalid`. Only `validate()` and `reset()` do that.

```typescript
form.value.validateField('website', 'not a url'); // false, error = 'Invalid URL'
```

## Values

### getFormValue(): Record<string, any>

Returns `{ [field.name]: field.value }` for every field whose value is not `undefined`.

```typescript
form.value.getFormValue(); // { name: 'Khoa', website: 'https://dymikform.com' }
```

### setFormValue(values): void

Sets several fields at once. Keys that don't match a field name are ignored. This method does not validate.

```typescript
form.value.setFormValue({ name: 'Khoa', website: 'https://dymikform.com' });
```

### setFieldValue(name, value): void

Sets a single field's value. This method does not validate.

```typescript
form.value.setFieldValue('name', 'Khoa');
```

### reset(): void

Sets every field's `value` to `undefined`, clears all errors and sets `invalid` to `false`.

## Errors

### getFormErrors(): Record<string, string>

Returns `{ [field.name]: error }` for fields that currently have an error.

### getFormError(name): string | undefined

Returns one field's current error.

### setFormError(name, error): void

Sets an error on a field and marks the form `invalid`. This is useful for server-side errors:

```typescript
try {
  await api.register(form.value.getFormValue());
} catch (e) {
  form.value.setFormError('email', 'This email is already registered');
}
```

## Submission

### async submitToEndpoint(): Promise<void>

If `submit_endpoint` is set, POSTs `getFormValue()` as JSON:

```http
POST <submit_endpoint>
Content-Type: application/json

{ "name": "Khoa", "website": "https://dymikform.com" }
```

After the request the form is **reset**. If the response is not `2xx`, the method throws `Error('Failed to submit form')`. It resolves with no value. If `submit_endpoint` is not set, it does nothing.

`DymikForm` calls this for you when a submit button is clicked, but you can call it yourself:

```typescript
if (form.value.validate()) {
  try {
    await form.value.submitToEndpoint();
  } catch {
    // show an error
  }
}
```

## Full example

A form that is loaded from an API and filled with existing data:

```vue
<template>
  <DymikForm v-if="form" :form="form" @submit="onSubmit" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { FormModel, type FormItem } from '@dymik-form/dymik-vue';

const form = ref<FormModel>();

onMounted(async () => {
  const definition: FormItem = await fetch('/api/forms/profile').then((r) => r.json());
  const profile = await fetch('/api/me').then((r) => r.json());

  form.value = new FormModel(definition);
  form.value.setFormValue(profile);
});

async function onSubmit(values: Record<string, any>) {
  const res = await fetch('/api/me', { method: 'PUT', body: JSON.stringify(values) });

  if (res.status === 409) {
    form.value?.setFormError('email', 'Email already taken');
  }
}
</script>
```
