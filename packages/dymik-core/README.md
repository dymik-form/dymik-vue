# Dymik Core

Dymik Core is a powerful library designed to support building web applications with flexible and easy-to-use features. This library provides components, models, and utilities to accelerate development and ensure code quality.

## Features
- **Reusable Components**: Includes UI components like `DymikForm` designed for easy reuse.
- **Validation Utilities**: Provides robust validation tools based on `arktype` and `zod`.
- **Type-Safe Models**: Defines data models with TypeScript to ensure type safety.
- **Modular Architecture**: Clear library structure, easy to extend and maintain.

## Advantages
- **High Performance**: Optimized for fast and efficient operation.
- **Ease of Use**: Developer-friendly API, easy to integrate into projects.
- **Great Integration**: Supports integration with popular tools and frameworks like Vue.js.

## Installation Guide

### Requirements
- Node.js >= 16
- pnpm (recommended)

### Installation
1. Add `@dymik-form/dymik-vue` to your project:
   ```bash
   pnpm add @dymik-form/dymik-vue
   ```

2. Ensure that TypeScript is configured in your project.

## Usage

### Import and Use Components
To use `DymikForm` in your Vue.js project, follow these steps:

1. Import and register `DymikForm` as a plugin in your `main.ts` file:

```typescript
import { createApp } from 'vue';
import App from './App.vue';
import DymikForm from '@dymik-form/dymik-vue';
import '@dymik-form/dymik-vue/dist/dymik-core.css';

const app = createApp(App);

// Register DymikForm as a plugin
app.use(DymikForm);

app.mount('#app');
```

2. Use the `DymikForm` component in your Vue templates
// TODO: Write usage here
### Integration with PrimeVue
If you are using PrimeVue, you can integrate it alongside `DymikForm` as follows:

```typescript
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import ToastService from 'primevue/toastservice';

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.use(ToastService);
```

Additionally, register PrimeVue components globally if needed:

```typescript
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

app.component('InputText', InputText);
app.component('Button', Button);
```

## Contribution
We welcome contributions from the community. If you want to contribute, please create a pull request or open an issue on GitHub.

## License
Dymik Core is released under the MIT license. Please refer to the LICENSE file for more details.

## Contact
If you have any questions or feedback, feel free to contact us via email: support@dymik.com.