# Form Model

## Overview

The `FormModel` in `dymik-core` is a TypeScript class that provides a complete solution for managing form state, validation, and submission. It implements the `FormItem` interface and offers methods for field-level and form-level validation, data management, and error handling.

## Constructor

```typescript
constructor(form: FormItem)
```

Creates a new FormModel instance from a FormItem object.

**Parameters:**
- `form`: FormItem object containing:
  - `name`: string - Form name
  - `id?`: string - Optional form identifier
  - `description?`: string - Optional form description
  - `fields`: FormField[] - Array of form fields
  - `css_classes?`: string - Optional CSS classes
  - `submit_endpoint?`: string - Optional API endpoint for submission
  - `disabled?`: boolean - Whether form is disabled

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `name` | string | The name of the form |
| `id` | string \| undefined | Unique identifier for the form |
| `description` | string \| undefined | Optional description of the form |
| `fields` | FormField[] | Array of form fields |
| `css_classes` | string \| undefined | CSS classes to apply to the form |
| `submit_endpoint` | string \| undefined | API endpoint for form submission |
| `invalid` | boolean | Flag indicating if form has validation errors |
| `disabled` | boolean \| undefined | Whether the form is disabled |

## Methods

### Validation Methods

#### `validateField(name: string, value: any): boolean`

Validates a single field against its validation rules.

**Parameters:**
- `name`: The field name to validate
- `value`: The value to validate

**Returns:** `boolean` - true if valid, false otherwise

**Behavior:**
- Resets field error message
- Checks required validation if field is required
- Runs all validation rules for the field
- Sets appropriate error messages
- Updates form's `invalid` state

**Example:**
```typescript
const isValid = formModel.validateField('email', 'user@example.com');
```

#### `validate(): boolean`

Validates all fields in the form.

**Returns:** `boolean` - true if all fields are valid, false otherwise

**Example:**
```typescript
if (formModel.validate()) {
  // Form is valid, proceed with submission
}
```

### Data Management Methods

#### `getFormValue(): Record<string, any>`

Returns an object containing all field values.

**Returns:** Object with field names as keys and field values as values

**Example:**
```typescript
const formData = formModel.getFormValue();
// { email: 'user@example.com', name: 'John Doe' }
```

#### `setFormValue(value: Record<string, any>): void`

Sets multiple field values at once.

**Parameters:**
- `value`: Object containing field names and their new values

**Example:**
```typescript
formModel.setFormValue({
  email: 'user@example.com',
  name: 'John Doe'
});
```

#### `setFieldValue(name: string, value: any): void`

Sets the value of a single field.

**Parameters:**
- `name`: Field name
- `value`: New field value

**Example:**
```typescript
formModel.setFieldValue('email', 'newemail@example.com');
```

#### `reset(): void`

Resets the form to its initial state.

**Behavior:**
- Clears all field values
- Clears all error messages
- Sets `invalid` to false

**Example:**
```typescript
formModel.reset();
```

### Error Management Methods

#### `getFormErrors(): Record<string, string>`

Returns all current form errors.

**Returns:** Object with field names as keys and error messages as values

**Example:**
```typescript
const errors = formModel.getFormErrors();
// { email: 'Invalid email format', name: 'Name is required' }
```

#### `getFormError(name: string): string | undefined`

Gets the error message for a specific field.

**Parameters:**
- `name`: Field name

**Returns:** Error message string or undefined if no error

**Example:**
```typescript
const emailError = formModel.getFormError('email');
```

#### `setFormError(name: string, error: string): void`

Sets an error message for a specific field.

**Parameters:**
- `name`: Field name
- `error`: Error message

**Example:**
```typescript
formModel.setFormError('email', 'This email is already registered');
```

### Submission Method

#### `async submitToEndpoint(): Promise<any>`

Submits the form data to the configured endpoint.

**Behavior:**
- Sends POST request to `submit_endpoint` if configured
- Includes form data as JSON in request body
- Resets form after successful submission
- Throws error if submission fails

**Returns:** Promise that resolves with response data

**Example:**
```typescript
try {
  await formModel.submitToEndpoint();
  console.log('Form submitted successfully');
} catch (error) {
  console.error('Form submission failed:', error);
}
```

## Complete Usage Example

```typescript
import FormModel from 'dymik-core/models/form.model';

// Create a form
const loginForm = new FormModel({
  name: 'Login Form',
  id: 'login-form',
  description: 'User login form',
  submit_endpoint: '/api/login',
  fields: [
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true,
      required_text: 'Email is required',
      props: {},
      validation_rules: [
        {
          type: 'email',
          message: 'Please enter a valid email address'
        }
      ]
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      required: true,
      required_text: 'Password is required',
      props: {},
      validation_rules: [
        {
          type: 'minLength',
          value: 8,
          message: 'Password must be at least 8 characters'
        }
      ]
    }
  ]
});

// Set field values
loginForm.setFieldValue('email', 'user@example.com');
loginForm.setFieldValue('password', 'secret123');

// Validate individual field
const isEmailValid = loginForm.validateField('email', 'user@example.com');

// Validate entire form
if (loginForm.validate()) {
  // Get form data
  const formData = loginForm.getFormValue();
  console.log(formData);
  
  // Submit form
  try {
    await loginForm.submitToEndpoint();
    console.log('Login successful');
  } catch (error) {
    console.error('Login failed:', error);
  }
} else {
  // Display errors
  const errors = loginForm.getFormErrors();
  console.log('Validation errors:', errors);
}

// Reset form
loginForm.reset();
```

## Field Interface

Each field in the `fields` array must conform to the `FormField` interface:

```typescript
interface FormField {
  label?: string;              // Display label
  name: string;                // Unique field identifier
  type: string;                // Field type (text, email, password, etc.)
  required?: boolean;          // Whether field is required
  disabled?: boolean;          // Whether field is disabled
  required_text?: string;      // Custom required error message
  props: any;                  // Additional props for field component
  error?: string;              // Current error message
  classes?: string;            // CSS classes for field
  value?: any;                 // Current field value
  validation_rules?: ValidationRule[];  // Array of validation rules
}
```

## Validation Rules

The `validation_rules` array supports the following rule types:

| Type | Description | Value Type |
|------|-------------|------------|
| `string` | Validates string type | - |
| `number` | Validates number type | - |
| `boolean` | Validates boolean type | - |
| `date` | Validates date format | - |
| `regex` | Validates against regex pattern | string |
| `min` | Minimum numeric value | number |
| `max` | Maximum numeric value | number |
| `minLength` | Minimum string length | number |
| `maxLength` | Maximum string length | number |
| `email` | Validates email format | - |
| `url` | Validates URL format | - |
| `custom` | Custom validation function | function |

**Example validation rules:**
```typescript
validation_rules: [
  {
    type: 'email',
    message: 'Invalid email format'
  },
  {
    type: 'minLength',
    value: 8,
    message: 'Must be at least 8 characters'
  },
  {
    type: 'custom',
    value: (value, formValue) => value === formValue.confirmPassword,
    message: 'Passwords must match'
  }
]
```