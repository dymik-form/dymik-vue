# Installation

## Requirements

- Vue `^3.5` (peer dependency)
- A bundler that understands ES modules and CSS imports (Vite is recommended)
- TypeScript is optional, but the package ships type declarations

## Install the package

```bash
# pnpm
pnpm add @dymik-form/dymik-vue

# npm
npm install @dymik-form/dymik-vue

# yarn
yarn add @dymik-form/dymik-vue
```

ArkType and Zod come with the package as dependencies, so you don't need to install either one for the built-in validation rules.

## Register the plugin

Register the plugin once in your entry file. It registers the `DymikForm` component globally.

```typescript
// main.ts
import { createApp } from 'vue';
import App from './App.vue';

import DymikForm from '@dymik-form/dymik-vue';
import '@dymik-form/dymik-vue/dist/dymik-vue.css';

const app = createApp(App);

app.use(DymikForm);

app.mount('#app');
```

The stylesheet contains the base form layout, the required-field marker, error messages and the `full_width` / `half_width` helper classes.

## Install a UI library (optional)

Dymik renders each field with the component named in its `type`, so those components have to be registered globally. With PrimeVue:

```bash
pnpm add primevue @primeuix/themes primeicons
```

```typescript
// main.ts
import PrimeVue from 'primevue/config';
import Lara from '@primeuix/themes/lara';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import 'primeicons/primeicons.css';

app.use(PrimeVue, { theme: { preset: Lara } });

app.component('InputText', InputText);
app.component('Password', Password);
app.component('Button', Button);
```

> Only components registered with `app.component(...)` can be used by name in a field's `type`. To make every PrimeVue component available at once, loop over `import * as PrimeVueComponents from 'primevue'` and register each one. The demo website does this.

Next: [Quick Start](/docs/quick-start).
