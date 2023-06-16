/* Default */
import { Fragment, useId } from 'react'

/* Packages */
import { useFormContext } from 'react-hook-form'

/**
 * Input
 * @param {string} id
 * @param {string} name (required)
 * @param {string} value
 * @param {reference} innerRef - you can still assign to ref
 * @param {object} validations - docs: https://www.react-hook-form.com/get-started#Applyvalidation
 * @param {...reactHookFormProps} props - docs: https://www.react-hook-form.com
 * @param {...any} props
 *
 * @returns component
 *
 * @react-hook-form - docs https://www.react-hook-form.com
 */

export const Input = ({ id, name, value, validations, innerRef, ...props }) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()
  const { ref, onChange, onBlur, ...rest } = register(name, { ...validations })
  const defaultID = useId()

  return (
    <Fragment>
      {name && (
        <input
          id={id ? `${name}:${id}` : `${name}:${defaultID}`}
          name={name}
          defaultValue={value}
          aria-invalid={errors[name] && 'true'}
          ref={(e) => {
            ref(e)
            if (innerRef) innerRef.current = e
          }}
          {...rest}
          {...props}
          onChange={(e) => {
            onChange(e)
            props.onChange && props.onChange(e)
          }}
          onBlur={(e) => {
            onBlur(e)
            props.onBlur && props.onBlur(e)
          }}
        />
      )}
    </Fragment>
  )
}
