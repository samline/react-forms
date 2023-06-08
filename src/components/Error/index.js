/* Default */
import React from 'react'

/* Packages */
import { useFormContext } from 'react-hook-form'

/**
 * Error
 * @param {string} name (required)
 * @param {object} validations - e.g. { required: 'This field is required', maxLenght: '...', ... }
 * @param {...any} props
 * @returns
 */

export const Error = ({ name, validations, ...props }) => {
  const {
    formState: { errors }
  } = useFormContext()

  return (
    <React.Fragment>
      {name && errors[name]?.type && validations[errors[name]?.type] && (
        <span role='alert' {...props}>
          {validations[errors[name]?.type]}
        </span>
      )}
    </React.Fragment>
  )
}

/**
 * GlobalError
 * @param {string} message (required)
 * @param {...any} props
 * @returns
 */

export const GlobalError = ({ message, ...props }) => {
  const {
    formState: { errors }
  } = useFormContext()

  return (
    <React.Fragment>
      {Object.keys(errors).length > 0 && message && (
        <span role='alert' {...props}>
          {message}
        </span>
      )}
    </React.Fragment>
  )
}
