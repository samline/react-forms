# Form

Classic html form but controlled by [react-hook-form](https://www.react-hook-form.com) and simplified by me.

> If you need more information or more complex implementations visit the official [react-hook-form](https://www.react-hook-form.com) documentation.

## Usage

```jsx
/**
 * Form
 * @param {object} methods (required) - the available methods are obtained from the hook useForm or from the react-hook-form useFormContext.
 * @param {children} children (required)
 * @param {boolean} autoSubmit - auto submit if any field changes
 * @param {function} onSubmit - if !onSubmit the form will make a normal request
 * @param {function} onChange
 * @param {reference} innerRef - you can still assign to ref
 * @param {...reactHookFormProps} props - docs: https://www.react-hook-form.com
 * @param {...any} props
 *
 * @returns onSubmit(({ e, data, methods }) => {...})
 * @returns onChange(({ e, methods }) => {...})
 *
 * @react-hook-form - docs https://www.react-hook-form.com
 * @info if you want to set default values, you must use defaultValues inside useForm
 */
```

```jsx
import { Form, useForm } from '@honeybee-js/react-forms'
```

```jsx
export const CustomForm = () => {
  const methods = useForm()
  const handleSubmit = ({ ...props }) => {
    console.log('Form:', props)
  }

  return (
    <Form methods={methods} onSubmit={handleSubmit} ...reactHookFormProps ...props>
      ...
    </Form>
  )
}
```

```jsx
/* Example */
export const CustomForm = () => {
  const methods = useForm()
  const handleSubmit = ({ ...props }) => {
    console.log('Auto submitted')
  }

  return (
    <Form methods={methods} onSubmit={handleSubmit} autosubmit>
      <Select name="lang">
        <option value="en">En</option>
        <option value="es">Es</option>
        <option value="fr">Fr</option>
      </Select>
    </Form>
  )
}
```

## License

MIT © [Samline](https://github.com/samline)
