# Form Model

## Overview

The `FormModel` in `@dymik-form/dymik-vue` is a TypeScript class that represents the structure of a form. It is used to define and manage form data in a type-safe manner.

### Example

```typescript
export class FormModel {
  id: string;
  name: string;
  fields: FieldModel[];

  constructor(id: string, name: string, fields: FieldModel[]) {
    this.id = id;
    this.name = name;
    this.fields = fields;
  }
}

export class FieldModel {
  id: string;
  label: string;
  type: string;

  constructor(id: string, label: string, type: string) {
    this.id = id;
    this.label = label;
    this.type = type;
  }
}
```