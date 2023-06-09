# Label

Label linked to a form element, it acquires the error status if the component does not pass some validation, otherwise in a powered label.

## Usage

```jsx
/**
 * Label
 * @param {children} children
 * @param {string} id - the id will be required to link to a form component, they must share a unique id
 * @param {string} name (required) - name is required to link to form component
 * @param {string} content
 * @param {reference} innerRef - you can still assign to ref
 * @param {...any} props
 *
 * @returns component
 */
```

```jsx
import { Input } from '@honeybee-js/react-forms'
```

```jsx
<Label name='' content='Cool content!' ...props />
```

```jsx
<Label name='' ...props>
  cool children content!
</Label>
```

```jsx
/* Example Label and Input */
const commonId = useId()

<Label id={commonId} name='email' content='Email field' />
<Input id={commonId} name='email' type='email' placeholder="Type your email here..." validations={{ required: true }} />
```

## License

MIT © [Samline](https://github.com/samline)
