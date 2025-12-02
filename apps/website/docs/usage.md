# Usage

## Import and Use Components

To use `DymikForm` in your Vue.js project, follow these steps:

1. Import and register `DymikForm` as a plugin in your `main.ts` file:

```typescript
import { createApp } from "vue";
import App from "./App.vue";
import DymikForm from "@dymik-form/dymik-vue";
import "@dymik-form/dymik-vue/dist/dymik-core.css";

import InputText from "primevue/inputtext";
import Button from "primevue/button";

const app = createApp(App);

// Register DymikForm as a plugin
app.use(DymikForm);

app.component("InputText", InputText);
app.component("Button", Button);

app.mount("#app");
```

2. Prepare a json file (metadata.json) as metadata 

```json
{
    "name": "Login",
    "fields": [
        {
            "label": "Email",
            "name": "email",
            "type": "InputText",
            "required": true,
            "props": {
                "placeholder": "Please enter your email"
            },
            "validation_rules": [
                {
                    "type": "email",
                    "message": "Invalid Email"
                }
            ],
            "classes": "full_width"
        },
        {
            "label": "Password",
            "name": "password",
            "type": "InputText",
            "required": true,
            "props": {
                "type": "password",
                "placeholder": "Please enter your password"
            },
            "validation_rules": [],
            "classes": "full_width"
        },
        {
            "name": "btnLogin",
            "type": "Button",
            "props": {
                "type": "submit",
                "label": "Login",
                "icon": "pi pi-user",
                "severity": "contrast"
            },
            "classes": "full_width"
        }
    ]
}
```

3. Use the `DymikForm` component in your Vue templates:

```vue
<template>
    <DymikForm :form="formModel" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import metadata from './meta-data.json';
import { FormModel, type FormField } from '@dymik-form/dymik-vue';

const formModel = ref(new FormModel({
    name: metadata.name,
    fields: metadata.fields as FormField[],
}));

</script>
```
