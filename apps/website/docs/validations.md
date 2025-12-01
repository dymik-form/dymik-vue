# Validation

## Overview

`dymik-core` provides a flexible validation system through the `ValidatorUtils` class that supports multiple validation libraries like `arktype` (default) and `zod`. This allows you to validate form data using your preferred library or even create custom validators.

## Features

- **Multi-library support**: Choose between `arktype` and `zod` validation libraries
- **Custom validators**: Register your own validation functions
- **Extensible**: Add new validation libraries via the plugin system
- **Built-in validation rules**: Support for common validation types like string, number, email, URL, regex, min/max, date, and more

## Supported Validation Rules

The following validation rule types are supported:

- `string`: Validates string type
- `number`: Validates number type
- `boolean`: Validates boolean type
- `email`: Validates email format
- `url`: Validates URL format
- `date`: Validates date
- `regex`: Validates against a regular expression pattern
- `min`: Validates minimum value for numbers
- `max`: Validates maximum value for numbers
- `minLength`: Validates minimum string length
- `maxLength`: Validates maximum string length
- `custom`: Custom validation function

## Usage

### Switching Validation Libraries

By default, `ValidatorUtils` uses `arktype`. You can switch to another library:

```typescript
import ValidatorUtils from '@dymik-form/dymik-core/utils/validator';

// Switch to zod
ValidatorUtils.setLib('zod');

// Switch back to arktype
ValidatorUtils.setLib('ark_type');
```

### Validating Values

Use the `validate` method to validate a value against a rule:

```typescript
import ValidatorUtils from '@dymik-form/dymik-core/utils/validator';

const rule = {
  type: 'email',
  message: 'Invalid email address'
};

const isValid = ValidatorUtils.validate(rule, 'john.doe@example.com', {});
console.log(isValid); // true
```

### Using Validation Rules with Min/Max

```typescript
// Minimum length validation
const minLengthRule = {
  type: 'minLength',
  value: 5,
  message: 'Must be at least 5 characters'
};

ValidatorUtils.validate(minLengthRule, 'hello', {}); // true
ValidatorUtils.validate(minLengthRule, 'hi', {}); // false

// Number range validation
const minRule = {
  type: 'min',
  value: 18,
  message: 'Must be at least 18'
};

ValidatorUtils.validate(minRule, 20, {}); // true
ValidatorUtils.validate(minRule, 16, {}); // false
```

### Custom Validators

Register custom validation functions:

```typescript
import ValidatorUtils from '@dymik-form/dymik-core/utils/validator';

// Register a custom validator
ValidatorUtils.customValidators['isEven'] = (value: any, formValue: any) => {
  return typeof value === 'number' && value % 2 === 0;
};

// Use the custom validator
const rule = {
  type: 'custom',
  value: 'isEven',
  message: 'Number must be even'
};

ValidatorUtils.validate(rule, 4, {}); // true
ValidatorUtils.validate(rule, 5, {}); // false
```

Custom validators receive two parameters:
- `value`: The value being validated
- `formValue`: The entire form's value object (useful for cross-field validation)

### Adding New Validator Libraries

You can add your own validator library implementation:

```typescript
import ValidatorUtils from '@dymik-form/dymik-core/utils/validator';
import type { IValidatorLib, ValidationRule } from '@dymik-form/dymik-core/interfaces';

class MyCustomValidatorLib implements IValidatorLib {
  validate(rule: ValidationRule, value: any): boolean {
    // Your validation logic here
    return true;
  }
}

// Register the new library
ValidatorUtils.addLib('my_validator', new MyCustomValidatorLib());

// Switch to your library
ValidatorUtils.setLib('my_validator');
```

## Form Field Validation

When defining form fields, you can add validation rules:

```typescript
const formField = {
  label: 'Email Address',
  name: 'email',
  type: 'text',
  required: true,
  validation_rules: [
    {
      type: 'email',
      message: 'Please enter a valid email address'
    }
  ]
};

const formField2 = {
  label: 'Age',
  name: 'age',
  type: 'number',
  validation_rules: [
    {
      type: 'min',
      value: 18,
      message: 'Must be at least 18 years old'
    },
    {
      type: 'max',
      value: 100,
      message: 'Must be less than 100'
    }
  ]
};
```

## Error Handling

When validation fails, the validation libraries will throw appropriate errors:

```typescript
try {
  ValidatorUtils.setLib('invalid_lib');
} catch (error) {
  console.error(error); // Error: Validator library "invalid_lib" is not supported.
}

// Custom validator not found
try {
  ValidatorUtils.validate({ type: 'custom', value: 'nonexistent' }, 'test', {});
} catch (error) {
  console.error(error); // Error: Custom validation function "nonexistent" not found.
}
```