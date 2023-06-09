# Textarea

Classic html textarea but controlled by [react-hook-form](https://www.react-hook-form.com) and simplified by me.

> If you need more information or more complex implementations visit the official [react-hook-form](https://www.react-hook-form.com) documentation.

## Usage

```jsx
/**
 * Textarea
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
import { Textarea } from '@honeybee-js/react-forms'
```

```jsx
<Textarea name="" ...reactHookFormProps ...props />
```

```jsx
/* Example */
<Textarea name='comments' />
```

```jsx
/* Example reactHookFormProps  */
<Textarea
  name=''
  onChange={(e) => console.log(e)}
  onBlur={(e) => console.log(e)}
/>
```

```jsx
/* Example props  */
<Textarea
  name=''
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
<Textarea name='' validations={{ required: true }} />
```

## License

MIT © [Samline](https://github.com/samline)
