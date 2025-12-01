# Interfaces

## Overview

`dymik-core` provides several TypeScript interfaces to ensure type safety and improve developer experience. These interfaces define the structure of forms, fields, and validation rules used throughout the library.

## Core Interfaces

### FormListItem

Represents a form in a list view with minimal information.

```typescript
interface FormListItem {
  name: string;           // The name of the form
  description?: string;   // Optional description
  id: string;            // Unique identifier
}
```

**Example:**

```typescript
const formListItem: FormListItem = {
  id: 'contact-form-1',
  name: 'Contact Form',
  description: 'A simple contact form'
};
```

### FormItem

Represents a complete form configuration with all its fields and settings.

```typescript
interface FormItem {
  name: string;              // The name of the form
  description?: string;      // Optional description
  id?: string;              // Optional unique identifier
  fields: FormField[];      // Array of form fields
  css_classes?: string;     // CSS classes to apply to the form
  submit_endpoint?: string; // API endpoint for form submission
  invalid?: boolean;        // Whether the form is invalid
  disabled?: boolean;       // Whether the form is disabled
}
```

**Example:**

```typescript
const contactForm: FormItem = {
  id: 'contact-form',
  name: 'Contact Form',
  description: 'Get in touch with us',
  css_classes: 'form-container',
  submit_endpoint: '/api/contact',
  invalid: false,
  disabled: false,
  fields: [
    // FormField objects...
  ]
};
```

### FormField

Represents a single form field with its configuration and validation rules.

```typescript
interface FormField {
  label?: string;                    // Field label displayed to users
  name: string;                      // Field name (must be unique)
  type: string;                      // Field type (text, number, email, etc.)
  required?: boolean;                // Whether the field is required
  disabled?: boolean;                // Whether the field is disabled
  required_text?: string;            // Custom required message
  props: any;                        // Additional props for the field component
  error?: string;                    // Current error message
  classes?: string;                  // CSS classes for the field
  value?: any;                       // Current field value
  validation_rules?: ValidationRule[]; // Array of validation rules
}
```

**Example:**

```typescript
const emailField: FormField = {
  label: 'Email Address',
  name: 'email',
  type: 'email',
  required: true,
  required_text: 'Email is required',
  classes: 'input-field',
  props: {
    placeholder: 'Enter your email',
    autocomplete: 'email'
  },
  validation_rules: [
    {
      type: 'email',
      message: 'Please enter a valid email address'
    }
  ]
};

const ageField: FormField = {
  label: 'Age',
  name: 'age',
  type: 'number',
  required: true,
  props: {
    min: 0,
    max: 120
  },
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

### ValidationRule

Defines a validation rule for a form field.

```typescript
interface ValidationRule {
  type: 'string' 
    | 'number' 
    | 'boolean' 
    | 'date' 
    | 'regex' 
    | 'min' 
    | 'max' 
    | 'minLength' 
    | 'maxLength' 
    | 'email' 
    | 'url' 
    | 'custom';
  message?: string;  // Error message to display when validation fails
  value?: string | number | boolean | ((value: any, formValue: any) => boolean);
}
```

**Validation Types:**

- `string`: Validates string type
- `number`: Validates number type
- `boolean`: Validates boolean type
- `date`: Validates date format
- `regex`: Validates against a regular expression
- `min`: Minimum value for numbers
- `max`: Maximum value for numbers
- `minLength`: Minimum string length
- `maxLength`: Maximum string length
- `email`: Email format validation
- `url`: URL format validation
- `custom`: Custom validation function

**Examples:**

```typescript
// Email validation
const emailRule: ValidationRule = {
  type: 'email',
  message: 'Invalid email format'
};

// Minimum length validation
const passwordRule: ValidationRule = {
  type: 'minLength',
  value: 8,
  message: 'Password must be at least 8 characters'
};

// Regex validation
const phoneRule: ValidationRule = {
  type: 'regex',
  value: '^[0-9]{10}$',
  message: 'Phone number must be 10 digits'
};

// Custom validation
const customRule: ValidationRule = {
  type: 'custom',
  value: 'isEven',  // Reference to a registered custom validator
  message: 'Value must be an even number'
};
```

### IValidatorLib

Interface for implementing custom validator libraries.

```typescript
interface IValidatorLib {
  schemas: Record<ValidationRule['type'], () => StandardSchema> | {};
  
  validate(rule: ValidationRule, value: any): boolean;
  
  schemaFactory(type: ValidationRule['type'], ruleValue: any): StandardSchema;
}
```

This interface allows you to create custom validator implementations that work with the `ValidatorUtils` system.

**Example Implementation:**

```typescript
import type { IValidatorLib, ValidationRule } from '@dymik-form/dymik-core/interfaces';

class MyValidatorLib implements IValidatorLib {
  schemas = {};

  validate(rule: ValidationRule, value: any): boolean {
    const schema = this.schemaFactory(rule.type, rule.value);
    // Your validation logic
    return true;
  }

  schemaFactory(type: ValidationRule['type'], ruleValue: any) {
    // Create and return a schema based on the type
    // Implementation depends on your validation library
  }
}
```

## Usage in Practice

Here's a complete example combining multiple interfaces:

```typescript
import type { FormItem, FormField, ValidationRule } from '@dymik-form/dymik-core/interfaces';

const registrationForm: FormItem = {
  id: 'registration',
  name: 'User Registration',
  description: 'Create a new account',
  css_classes: 'registration-form',
  submit_endpoint: '/api/register',
  fields: [
    {
      label: 'Username',
      name: 'username',
      type: 'text',
      required: true,
      required_text: 'Username is required',
      props: {
        placeholder: 'Choose a username'
      },
      validation_rules: [
        {
          type: 'minLength',
          value: 3,
          message: 'Username must be at least 3 characters'
        },
        {
          type: 'maxLength',
          value: 20,
          message: 'Username must not exceed 20 characters'
        }
      ]
    },
    {
      label: 'Email',
      name: 'email',
      type: 'email',
      required: true,
      validation_rules: [
        {
          type: 'email',
          message: 'Please enter a valid email address'
        }
      ]
    },
    {
      label: 'Age',
      name: 'age',
      type: 'number',
      required: true,
      props: {
        min: 0
      },
      validation_rules: [
        {
          type: 'min',
          value: 18,
          message: 'You must be at least 18 years old'
        }
      ]
    }
  ]
};
```