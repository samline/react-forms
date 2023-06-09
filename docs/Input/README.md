# Input

Classic html input but controlled by [react-hook-form](https://www.react-hook-form.com) and simplified by me.

> If you need more information or more complex implementations visit the official [react-hook-form](https://www.react-hook-form.com) documentation.

## Usage

```jsx
/**
 * Input
 * @param {string} id
 * @param {string} name (required)
 * @param {string} value
 * @param {string} placeholder
 * @param {reference} innerRef - you can still assign to ref
 * @param {object} validations - docs: https://www.react-hook-form.com/get-started#Applyvalidation
 * @param {...reactHookFormProps} props - docs: https://www.react-hook-form.com
 * @param {...any} props
 *
 * @returns component
 *
 * @react-hook-form - docs https://www.react-hook-form.com
 */
```

```jsx
import { Input } from '@honeybee-js/react-forms'
```

```jsx
<Input name="" ...reactHookFormProps ...props />
```

```jsx
/* Example */
<Input name='email' type='email' />
```

```jsx
/* Example reactHookFormProps  */
<Input
  name='email'
  type='email'
  onChange={(e) => console.log(e)}
  onBlur={(e) => console.log(e)}
/>
```

```jsx
/* Example props  */
<Input
  name='email'
  type='email'
  placeholder='Cool!'
  class='...'
  onFocus={(e) => console.log(e)}
/>
```

```jsx
/**
 * @validations {boolean/string} required - true/false or string as error label
 */

/* Example validations  */
<Input
  name='phone'
  type='tel'
  validations={{ required: true, minLength: 7, maxLength: 10 }}
/>
```

## License

MIT © [Samline](https://github.com/samline)
