# DymikForm Component

`DymikForm` renders a [`FormModel`](/docs/form-model): one wrapper per field, with a label, the field component and an error message.

## Registration

The plugin registers the component globally:

```typescript
import DymikForm from '@dymik-form/dymik-vue';

app.use(DymikForm); // <DymikForm> is now available in every template
```

To register it under another name, or import it locally, use the `DymikForm` property of the default export:

```typescript
import DymikFormPlugin from '@dymik-form/dymik-vue';

app.component('MyForm', DymikFormPlugin.DymikForm);
```

## Props

| Prop | Type | Required | Description |
|---|---|---|---|
| `form` | `FormModel` | Yes | The form to render. Wrap it in `ref()` or `reactive()` so the form re-renders when values and errors change. |

## Events

| Event | Payload | When |
|---|---|---|
| `value-change` | `Record<string, any>` | After any field emits `value-change`. The payload is the whole form value. |
| `submit` | `Record<string, any>` | A submit button was clicked and every field is valid. |
| `loading` | `boolean` | `true` before and `false` after the `submit_endpoint` request. Only emitted when `submit_endpoint` is set. |
| `submit-result` | `{ message: string, type: 'success' \| 'error' }` | After the `submit_endpoint` request finishes. |

```vue
<template>
  <DymikForm
    :form="form"
    @submit="onSubmit"
    @value-change="onValueChange"
    @loading="(isLoading) => (loading = isLoading)"
    @submit-result="({ message, type }) => toast.add({ severity: type, summary: message, life: 3000 })"
  />
</template>
```

## What gets rendered

For every entry in `form.fields`, `DymikForm` renders roughly the following:

```vue
<div class="field" :class="field.classes">
  <label v-if="field.label" :for="field.name">
    {{ field.label }} <span v-if="field.required" class="required">*</span>
  </label>

  <component
    :is="field.type"
    v-model="field.value"
    v-bind="field.props"
    :invalid="!!field.error"
    :disabled="form.disabled || field.disabled"
    @value-change="..."
    @click="..."
  />

  <span v-if="field.error" class="error">{{ field.error }}</span>
</div>
```

The fields sit in a `div.dymik-form` wrapper that also gets `form.css_classes`.

## Submitting

Clicking any field whose `props.type` is `"submit"` submits the form. Usually that is a button:

```json
{ "name": "save", "type": "Button", "props": { "type": "submit", "label": "Save" } }
```

On click, `DymikForm`:

1. Calls `event.preventDefault()`.
2. Runs `form.validate()`. If any field is invalid, it stops and the errors are shown.
3. If `submit_endpoint` is set, it emits `loading: true`, POSTs the values as JSON (see [`submitToEndpoint()`](/docs/form-model#async-submittoendpoint-promisevoid)), emits `submit-result`, then `loading: false`.
4. Emits `submit` with `form.getFormValue()`.

> `submitToEndpoint()` resets the form after the request. If you use `submit_endpoint`, treat `submit-result` as the result of the submission instead of reading values in `submit`.

## Field components

A field's `type` can be any component that is registered globally or known to the template compiler, including native elements such as `div` or `span`. For a component to work as an input field, it should:

- support `v-model` (a `modelValue` prop and an `update:modelValue` event),
- emit `value-change` with the new value. This is what triggers live validation and the form's `value-change` event,
- optionally accept `invalid` and `disabled` props to reflect state.

PrimeVue's inputs already follow this contract. Here is a minimal custom component:

```vue
<!-- ColorInput.vue -->
<template>
  <input
    type="color"
    :value="modelValue"
    :disabled="disabled"
    :class="{ invalid }"
    @input="onInput"
  />
</template>

<script setup lang="ts">
defineProps<{ modelValue?: string; invalid?: boolean; disabled?: boolean }>();
const emit = defineEmits<{
  'update:modelValue': [value: string];
  'value-change': [value: string];
}>();

function onInput(event: Event) {
  const value = (event.target as HTMLInputElement).value;
  emit('update:modelValue', value);
  emit('value-change', value);
}
</script>
```

```typescript
app.component('ColorInput', ColorInput);
```

```json
{ "name": "brand", "label": "Brand color", "type": "ColorInput", "props": {} }
```

## Layout and styling

Fields are laid out in a wrapping flex row with a 16px gap. Use `classes` on a field and `css_classes` on the form to control layout from JSON:

| Class | Effect |
|---|---|
| `full_width` | The field takes the whole row. |
| `half_width` | The field takes half the row, so two of them share a line. |

```json
[
  { "name": "first_name", "label": "First name", "type": "InputText", "props": {}, "classes": "half_width" },
  { "name": "last_name",  "label": "Last name",  "type": "InputText", "props": {}, "classes": "half_width" },
  { "name": "bio",        "label": "Bio",        "type": "Textarea",  "props": {}, "classes": "full_width" }
]
```

You can target your own classes too:

```scss
.dymik-form .field.hide-label > label {
  display: none;
}
```
