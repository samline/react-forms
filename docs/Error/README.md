# Error

Error handler for form components, if there is any validation error you can show it globally or individually as needed.

## Usage

```jsx
/**
 * Error
 * @param {string} name (required) - name is required to link to form component
 * @param {object} validations - e.g. { required: 'This field is required', maxLenght: '...', ... }
 * @param {...any} props
 *
 * @returns component
 */
```

```jsx
import { Error } from '@honeybee-js/react-forms'
```

```jsx
/* Example */
<Input
  name='email'
  placeholder='example@mail.com'
  validations={{
    required: true,
  }}
/>
<Error
  name='email'
  validations={{
    required: 'This field is required',
  }}
/>
```

```jsx
/* Example */
<Input
  name='customID'
  placeholder='Type your ID'
  validations={{
    required: true,
    validate: {
      customType: (e) => e == 5 || 'Error'
    }
  }}
/>
<Error
  name='customID'
  validations={{
    required: 'This field is required',
    customType: 'The ID is wrong'
  }}
/>
```

## License

MIT © [Samline](https://github.com/samline)
