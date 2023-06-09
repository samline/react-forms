# Select

Classic html select but controlled by [react-hook-form](https://www.react-hook-form.com) and simplified by me.

> If you need more information or more complex implementations visit the official [react-hook-form](https://www.react-hook-form.com) documentation.

## Usage

```jsx
/**
 * Select
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
import { Select } from '@honeybee-js/react-forms'
```

```jsx
<Select name="" ...reactHookFormProps ...props>
  <option value="">...</option>
  ...
</Select>
```

```jsx
/* Example reactHookFormProps  */
<Select name='' onChange={(e) => console.log(e)} onBlur={(e) => console.log(e)}>
  <option value=''>...</option>
  ...
</Select>
```

```jsx
/* Example props  */
<Select name='' class='...' placeholder='Cool!' onFocus={(e) => console.log(e)}>
  <option value=''>...</option>
  ...
</Select>
```

```jsx
/**
 * @validations {boolean/string} required - true/false or string as error label
 * * if required - if required it will not be allowed to switch to empty once an option has been chosen
 */

/* Example validations  */
<Select name='' validations={{ required: true }}>
  <option value=''>...</option>
  ...
</Select>
```

## License

MIT © [Samline](https://github.com/samline)
