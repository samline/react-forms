# GlobalError

Error handler for form components, if there is any validation error you can show it globally or individually as needed.

## Usage

```jsx
/**
 * GlobalError
 * @param {string} message (required)
 * @param {...any} props
 *
 * @returns component
 */
```

```jsx
import { GlobalError } from '@honeybee-js/react-forms'
```

```jsx
/* Example */
<button type='submit'>Send</button>
...
<GlobalError message='There are errors in the form, please check the data entered.' />
```

## License

MIT © [Samline](https://github.com/samline)
