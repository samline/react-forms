# API

API from [react-hook-form](https://www.react-hook-form.com).

> If you need more information or more complex implementations visit the official [react-hook-form](https://www.react-hook-form.com) documentation.

## Usage

```jsx
/**
 * API
 *
 * @returns
 *
  Controller
  FormProvider
  useController
  useFieldArray
  useForm
  useFormContext
  useFormState
  useWatch
 *
 * @react-hook-form - docs https://www.react-hook-form.com
 */
```

```jsx
import {
  Controller,
  FormProvider,
  useController,
  useFieldArray,
  useForm,
  useFormContext,
  useFormState,
  useWatch
} from '@honeybee-js/react-forms'
```

```jsx
/* Example */
export const CustomForm = () => {
  const methods = useForm()

  return <Form methods={methods}>...</Form>
}
```

## License

MIT © [Samline](https://github.com/samline)
