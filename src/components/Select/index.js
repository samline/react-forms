/* Default */
import { Fragment, useId } from 'react'

/* Packages */
import { useFormContext } from 'react-hook-form'

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

export const Select = ({
  children,
  id,
  name,
  value = '',
  validations,
  innerRef,
  ...props
}) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()
  const { ref, onChange, onBlur, ...rest } = register(name, { ...validations })

  return (
    <Fragment>
      {name && (
        <select
          id={id ? `${name}:${id}` : `${name}:${useId()}`}
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
        >
          {props.placeholder && (
            <option disabled={validations?.required} value=''>
              {props.placeholder}
            </option>
          )}
          {children}
        </select>
      )}
    </Fragment>
  )
}

/* TODO: styles for placeholder */
/* <style>
      select:required:invalid {
        color: #666;
      }
      option[value=""][disabled] {
        display: none;
      }
      option {
        color: #000;
      }
    </style> */
