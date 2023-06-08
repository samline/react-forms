/* Default */
import React from 'react'

/* Packages */
import { useFormContext } from 'react-hook-form'
import { useId } from 'react-id-generator'

/**
 * Select
 * @param {string} id
 * @param {string} name (required)
 * @param {string} value
 * @param {reference} innerRef - you can still assign to ref
 * @param {object} validations (Docs: https://react-hook-form.com/get-started#Applyvalidation)
 * @param {...any} props
 * @returns
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
    <React.Fragment>
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
    </React.Fragment>
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
