# Dymik Form

Dymik Form is a Vue 3-based project designed to provide a robust and flexible form management system. It is part of the `@dymik-form/dymik-vue` package and includes a demo application to showcase its features.

## Features

- **Dynamic Form Rendering**: Easily create and manage forms dynamically.
- **Validation Utilities**: Built-in validation using libraries like `arktype` and `zod`.
- **Directus Integration**: Seamless integration with Directus for schema management.
- **Modular Design**: Organized into reusable components, services, and models.

## Project Structure

The project is organized as follows:

```
apps/
  website/        # Main application showcasing Dymik Form
packages/
  dymik-core/     # Core library containing the DymikForm component and utilities
```

### Key Directories

- **apps/website**: Contains the main application with example usage of the Dymik Form.
- **packages/dymik-core**: Core library with reusable components, models, and utilities.

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- pnpm (v8 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd dymik-form
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the main application:
   ```bash
   pnpm --filter website dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

## Development

### Core Library

The `@dymik-form/dymik-vue` package contains the main `DymikForm` component and related utilities. To make changes:

1. Navigate to the `dymik-core` directory:
   ```bash
   cd packages/dymik-core
   ```

2. Run the build process:
   ```bash
   pnpm build
   ```

### Main Application

The main application is located in `apps/website`. It is built with PrimeVue UI, Directus, and the `@dymik-form/dymik-vue` library.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push the branch.
4. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Acknowledgments

- [Vue.js](https://vuejs.org/)
- [Directus](https://directus.io/)
- [Zod](https://zod.dev/)
- [ArkType](https://arktype.io/)
- [PrimeVue](https://primevue.org/)

## 💖 Support us

If you find this project helpful, please consider supporting us via [Open Collective](https://opencollective.com/@dymik-form/dymik-vue).  
Your contributions help us maintain and develop the library further.
