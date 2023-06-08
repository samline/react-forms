/* Default */
import React from 'react'

/* Packages */
import { FormProvider, useForm } from 'react-hook-form'

/**
 * Form
 * @param {object} methods (required) - from useForm
 * @param {children} children (required)
 * @param {boolean} autoSubmit - auto submit if any field changes
 * @param {function} onSubmit - if !onSubmit the form will make a normal request
 * @param {function} onChange
 * @param {reference} innerRef - you can still assign to ref
 * @param {...any} props
 * @returns onSubmit(({ e, data, methods }) => {...})
 * @returns onChange(({ e, methods }) => {...})
 *
 * @docs https://react-hook-form.com
 * @info defaultValues is required for chechbox/radio - optional for all other fields
 */

export const Form = ({
  methods,
  children,
  autoSubmit,
  onSubmit,
  onChange,
  innerRef,
  ...props
}) => {
  const doSubmit = methods.handleSubmit((data, e) =>
    onSubmit({ data: data, methods: methods, e: e })
  )

  return (
    <FormProvider {...methods}>
      <form
        ref={(e) => (innerRef ? (innerRef.current = e) : null)}
        onSubmit={onSubmit && doSubmit}
        onChange={(e) => {
          onChange && onChange({ e: e, methods: methods })
          autoSubmit && onSubmit && doSubmit()
        }}
        {...props}
      >
        {children}
      </form>
    </FormProvider>
  )
}
