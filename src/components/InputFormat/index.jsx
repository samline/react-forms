/* Default */
import { Fragment, useId } from 'react'

/* Packages */
import { useFormContext, Controller } from 'react-hook-form'
import Cleave from 'cleave.js/react.js'

/**
 * InputFormat
 * @param {string} id
 * @param {string} name (required)
 * @param {string} value
 * @param {string} placeholder
 * @param {reference} innerRef - you can still assign to ref
 * @param {object} validations - docs: https://www.react-hook-form.com/get-started#Applyvalidation
 * @param {object} format - docs: https://nosir.github.io/cleave.js
 * @param {boolean} rawValue - set rawValue as value instead formatted value - default: false
 * @param {...reactHookFormProps} props - docs: https://www.react-hook-form.com
 * @param {...cleavejsProps} props - docs: https://nosir.github.io/cleave.js
 * @param {...any} props
 *
 * @returns component (formatted value or raw value)
 *
 * @react-hook-form - docs https://www.react-hook-form.com
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
    <Fragment>
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
    </Fragment>
  )
}
