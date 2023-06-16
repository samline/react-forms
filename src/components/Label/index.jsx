/* Default */
import { Fragment, useId } from 'react'

/* Packages */
import { useFormContext } from 'react-hook-form'

/**
 * Label
 * @param {children} children
 * @param {string} id - the id will be required to link to a form component, they must share a unique id
 * @param {string} name (required) - name is required to link to form component
 * @param {string} content
 * @param {reference} innerRef - you can still assign to ref
 * @param {...any} props
 *
 * @returns component
 */

export const Label = ({ children, id, name, content, innerRef, ...props }) => {
  const {
    formState: { errors }
  } = useFormContext()

  return (
    <Fragment>
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
    </Fragment>
  )
}
