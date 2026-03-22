# CLAUDE.md — dymik-vue

AI assistant guidelines for the `dymik-vue` monorepo. Read this before making any changes.

---

## Overview

**dymik-vue** is a monorepo containing:
- `packages/dymik-core` — Publishable Vue 3 library (`@dymik-form/dymik-vue`) for rendering dynamic, JSON-driven forms with pluggable validation
- `apps/website` — Demo application and VitePress documentation site

**Package manager**: pnpm@8.6.0
**Monorepo orchestration**: Turborepo
**Node**: ESM throughout (`"type": "module"`)

---

## Repository Structure

```
dymik-vue/
├── packages/
│   └── dymik-core/          # Library package (@dymik-form/dymik-vue)
│       └── src/
│           ├── components/   # DymikForm.vue — the single exported component
│           ├── interfaces/   # TypeScript interfaces (FormItem, FormField, ValidationRule, IValidatorLib)
│           ├── models/       # FormModel class (form state, validation, submission)
│           ├── utils/
│           │   └── validator/ # ValidatorUtils + ZodValidatorLib + ArktypeValidatorLib
│           └── index.ts      # Library barrel export
├── apps/
│   └── website/             # Demo app + VitePress docs
│       └── src/
│           ├── controllers/  # FormController (loads and manages form state)
│           ├── services/     # DirectusService, FormMetadataService
│           ├── views/        # Vue pages (Home, JSON Preview, Directus Preview)
│           ├── router/       # Vue Router routes
│           ├── models/       # Global app state
│           ├── utils/        # isVueComponent helper
│           └── main.ts       # App entry point
│       └── docs/            # VitePress documentation source
├── turbo.json               # Turborepo task config
├── vitest.config.ts         # Root vitest config (node environment)
├── vercel.json              # Vercel deployment config
└── package.json             # Root: scripts, pnpm workspaces, devDeps
```

---

## Development Commands

Run from the **repository root** using pnpm:

```bash
pnpm dev          # Start all dev servers (turbo run dev)
pnpm build        # Build all packages and apps (turbo run build)
pnpm lint         # Lint all packages (turbo run lint)
pnpm test         # Run tests once (vitest run)
pnpm test:ui      # Run tests with Vitest UI
```

Build a specific package:
```bash
cd packages/dymik-core && pnpm build   # Outputs to dist/ (ESM + UMD + .d.ts)
cd apps/website && pnpm build          # Builds SPA + VitePress docs
```

The website build script performs three steps in sequence:
1. `vue-tsc -b` (type-check)
2. `vite build` (SPA)
3. `vitepress build docs && cp -r docs/.vitepress/dist dist/docs` (docs)

---

## Architecture: Core Library (`packages/dymik-core`)

### Key Abstractions

**`FormModel`** (`src/models/form.model.ts`) — The central class. Holds form state and drives all logic:
- `fields: FormField[]` — live field state (value, error, disabled)
- `validate()` — validates all fields; returns `boolean`
- `validateField(name, value)` — validates a single field in-place
- `getFormValue()` — returns `Record<string, any>` of current values
- `setFormValue(value)` / `setFieldValue(name, value)` — programmatic value setting
- `reset()` — clears all values and errors
- `submitToEndpoint()` — POSTs `getFormValue()` as JSON to `submit_endpoint`
- `getFormErrors()` / `getFormError(name)` / `setFormError(name, error)` — error accessors

**`DymikForm.vue`** (`src/components/DymikForm.vue`) — Single-prop component. Receives a `FormModel`, renders all fields dynamically via `<component :is="field.type">`, handles submit button clicks.

Emits:
| Event | Payload | When |
|---|---|---|
| `submit` | `Record<string, any>` | Valid form submitted |
| `value-change` | `Record<string, any>` | Any field value changes |
| `loading` | `boolean` | Before/after async endpoint submission |
| `submit-result` | `{ message: string, type: 'success' \| 'error' }` | After endpoint submission |

**Interfaces** (`src/interfaces/index.ts`):
- `FormItem` — input shape for `FormModel` constructor
- `FormField` — per-field config: `name`, `type`, `label`, `required`, `props`, `validation_rules`, etc.
- `ValidationRule` — `{ type, message?, value? }` — type is one of: `string | number | boolean | date | regex | min | max | minLength | maxLength | email | url | custom`
- `IValidatorLib` — contract for custom validator adapters

**`ValidatorUtils`** (`src/utils/validator/`) — Pluggable static validation system. Defaults to Zod. Supports ArkType. Custom validators can be registered via `ValidatorUtils.setValidatorLib(lib)`.

### Library Build Output

```
packages/dymik-core/dist/
├── index.es.js    # ESM build
├── index.umd.js   # UMD build
├── style.css      # Scoped form styles
└── *.d.ts         # TypeScript declarations
```

The package uses `@standard-schema/spec` for validator interoperability. Both Zod and ArkType are first-class supported validators.

---

## Architecture: Website App (`apps/website`)

### UI Framework

Uses **PrimeVue 4** for UI components (InputText, Button, etc.). Field `type` in `FormField` maps directly to a PrimeVue component name (or any globally registered Vue component).

### Service Layer

- `DirectusService` — Wraps `@directus/sdk@10` to communicate with a Directus CMS backend
- `FormMetadataService` — Loads `FormItem` definitions from Directus collections
- `FormController` — Composes the services; creates `FormModel` instances for the view layer

### Routing

| Path | View | Purpose |
|---|---|---|
| `/` | `Home/index.vue` | Landing / marketing page |
| `/preview` | `JSONPreview/index.vue` | Demo forms defined in JSON |
| `/directus-preview` | `DirectusPreview/index.vue` | Forms loaded from Directus CMS |

---

## Code Conventions

### Vue / TypeScript
- **Vue 3 Composition API** with `<script setup lang="ts">` — always use this syntax
- Strict TypeScript mode; no `any` except where the interface explicitly uses it (`props: any` on `FormField`)
- Path alias `@/` maps to `src/` in all packages
- PascalCase for component filenames and `import` names
- camelCase for functions, variables, composables

### File Naming
| Kind | Convention | Example |
|---|---|---|
| Components | `PascalCase.vue` or `index.vue` | `DymikForm.vue` |
| Services | `[domain].service.ts` | `form.service.ts` |
| Controllers | `[domain].controller.ts` | `form.controller.ts` |
| Tests | `[module].test.ts` | `index.test.ts` |
| Interfaces | `index.ts` barrel | — |

### Styling
- SCSS in all `.vue` files
- `scoped` styles for component-local rules
- Global layout overrides (e.g., `.full_width`, `.half_width`) use non-scoped `<style lang="scss">`
- CSS class helpers on `FormField.classes` and `FormItem.css_classes` allow JSON-driven layout

### Commit Message Style
Follows `TYPE(scope): message` convention:
```
FEAT(core): add custom validator support
FIX(website): resolve form reset after submit
DOCS(models): update FormModel API reference
CHORE(website): bump PrimeVue to 4.4
```

---

## Testing

Tests live in `packages/dymik-core/src/utils/validator/index.test.ts`.

Run:
```bash
pnpm test           # from root
```

- Framework: **Vitest** (global test utilities enabled, node environment)
- Coverage: text + JSON + HTML reporters
- Tests cover `ValidatorUtils` with both Zod and ArkType backends, all `ValidationRule` types, and custom validators

When adding new validation rule types to `IValidatorLib`, add corresponding tests for both `ZodValidatorLib` and `ArktypeValidatorLib`.

---

## Key Invariants

1. **`DymikForm` receives a `FormModel`** — never raw `FormItem`. Always instantiate `new FormModel(item)` before passing to the component.
2. **Field `type` is a component name string** — the form renders `<component :is="field.type">`. Register all custom field components globally or pass them as resolved components.
3. **Submit button detection** — `DymikForm` only triggers form submission when `field.type === 'Button'` and `field.props.type === 'submit'`. Ensure button fields are configured this way.
4. **Validator is static/global** — `ValidatorUtils` uses a module-level validator instance. Calling `setValidatorLib()` changes it globally for the entire app.
5. **Library peer dependency** — `vue` is a peer dep of `dymik-core`. Do not bundle Vue into the library build.

---

## Deployment

- **Platform**: Vercel
- **Build command**: `pnpm turbo build`
- **Output directory**: `apps/demo/dist` (note: currently `apps/website/dist` — keep in sync with `vercel.json`)
- **SPA routing**: All routes rewrite to `/index.html` via `vercel.json`

---

## Adding Features — Checklist

**New validation rule type:**
1. Add type to `ValidationRule['type']` union in `packages/dymik-core/src/interfaces/index.ts`
2. Implement in `ZodValidatorLib`
3. Implement in `ArktypeValidatorLib`
4. Add tests in `index.test.ts`
5. Document in `apps/website/docs/validations.md`

**New form field component (in website):**
1. Register component globally in `apps/website/src/main.ts`
2. Use the component name string as `FormField.type`

**New page in website:**
1. Add Vue component under `apps/website/src/views/`
2. Register route in `apps/website/src/router/`
