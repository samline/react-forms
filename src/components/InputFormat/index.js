/* Default */
import React from 'react'

/* Packages */
import { useFormContext, Controller } from 'react-hook-form'
import { useId } from 'react-id-generator'
import Cleave from 'cleave.js/react'

/**
 * InputFormat
 * @param {string} id
 * @param {string} name (required)
 * @param {string} value
 * @param {reference} innerRef - you can still assign to ref
 * @param {object} validations (Docs: https://react-hook-form.com/get-started#Applyvalidation)
 * @param {object} format - (e.g. { creditCard: true, ... }) - (Docs: https://nosir.github.io/cleave.js/)
 * @param {boolean} rawValue - set rawValue as value instead formatted value - default: false
 * @param {...any} props
 * @returns (formatted value or raw value)
 */

export const InputFormat = ({
  id,
  name,
  validations,
  format,
  rawValue,
  innerRef,
  ...props
}) => {
  const {
    control,
    setValue,
    getValues,
    formState: { errors }
  } = useFormContext()
  const value = getValues(name)

  /* TODO: test input format, defaultValues and reset */

  return (
    <React.Fragment>
      {name && (
        <Controller
          control={control}
          name={name}
          rules={{ ...validations }}
          render={({ field: { onChange, onBlur } }) => {
            return (
              <Cleave
                ref={(e) => (innerRef ? (innerRef.current = e) : null)}
                id={id ? `${name}:${id}` : `${name}:${useId()}`}
                name={name}
                aria-invalid={errors[name] && 'true'}
                // cleavejs
                options={{ ...format }}
                value={value ? value : ''}
                // end cleavejs

                {...props}
                // mix
                onInit={({ getRawValue, lastInputValue }) => {
                  setValue(name, rawValue ? getRawValue() : lastInputValue)
                }}
                onChange={(e) => {
                  onChange(e)
                  setValue(name, rawValue ? e.target.rawValue : e.target.value)
                  props.onChange && props.onChange(e)
                }}
                onBlur={(e) => {
                  onBlur(e)
                  setValue(name, rawValue ? e.target.rawValue : e.target.value)
                  props.onBlur && props.onBlur(e)
                }}
                // end mix
              />
            )
          }}
        />
      )}
    </React.Fragment>
  )
}
