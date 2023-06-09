# InputFormat

Classic html input but controlled by [react-hook-form](https://www.react-hook-form.com) and [cleave.js](https://nosir.github.io/cleave.js) but simplified by me.

> If you need more information or more complex implementations visit the official [react-hook-form](https://www.react-hook-form.com) and [cleave.js](https://nosir.github.io/cleave.js) documentation.

## Usage

```jsx
/**
 * InputFormat
 * @param {string} id
 * @param {string} name (required)
 * @param {string} value
 * @param {string} placeholder
 * @param {reference} innerRef - you can still assign to ref
 * @param {object} validations - docs: https://www.react-hook-form.com/get-started#Applyvalidation
 * @param {object} format - docs: https://nosir.github.io/cleave.js
 * @param {boolean} rawValue - set rawValue as value instead formatted value - default: false
 * @param {...reactHookFormProps} props - docs: https://www.react-hook-form.com
 * @param {...cleavejsProps} props - docs: https://nosir.github.io/cleave.js
 * @param {...any} props
 *
 * @returns component (formatted value or raw value)
 *
 * @react-hook-form - docs https://www.react-hook-form.com
 */
```

```jsx
import { InputFormat } from '@honeybee-js/react-forms'
```

```jsx
<InputFormat name="" ...reactHookFormProps ...cleavejsProps ...props />
```

```jsx
/* Example */
<InputFormat
  rawValue
  name='credit_card'
  placeholder='Credit card'
  value='5152313349701111'
  format={{
    creditCard: true
  }}
  onChange={(e) =>
    console.log(
      'formatValue:',
      e.target.value,
      '- rawValue:',
      e.target.rawValue
    )
  }
  validations={{ minLength: 4, maxLength: 19 }}
/>
```

## License

MIT © [Samline](https://github.com/samline)
