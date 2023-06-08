/* Default */
import React from 'react'

/* Packages */
import { useFormContext } from 'react-hook-form'
import { useId } from 'react-id-generator'

/**
 * Label
 * @param {children} children
 * @param {string} id
 * @param {string} name (required)
 * @param {string} content
 * @param {reference} innerRef - you can still assign to ref
 * @param {...any} props
 * @returns
 */

export const Label = ({ children, id, name, content, innerRef, ...props }) => {
  const {
    formState: { errors }
  } = useFormContext()

  return (
    <React.Fragment>
      {name && (
        <label
          ref={(e) => (innerRef ? (innerRef.current = e) : null)}
          htmlFor={id ? `${name}:${id}` : `${name}:${useId()}`}
          aria-invalid={errors[name] && 'true'}
          {...props}
        >
          {children ?? content}
        </label>
      )}
    </React.Fragment>
  )
}
