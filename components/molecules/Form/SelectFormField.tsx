import { BaseFormFieldConfig, FormFieldType } from 'config/types';
import { Field } from 'formik';
import React from 'react';
import { StringSchema } from 'yup';

export interface SelectFormFieldConfig extends BaseFormFieldConfig {
  type: FormFieldType.select;
  options: OptionType[];
  validationSchema: StringSchema;
}

export interface OptionType {
  label: string | number;
  value: string | number;
}

const SelectFormField = ({
  name,
  testID,
  placeholder,
  disabled,
  options,
  onBlur,
  onChange,
  onClick,
}: SelectFormFieldConfig) => {
  return (
    <Field
      as={FormFieldType.select}
      name={name}
      id={name}
      data-testid={testID}
      data-cy={testID}
      placeholder={placeholder}
      disabled={disabled}
      onBlur={onBlur}
      onChange={onChange}
      onClick={onClick}
    >
      {options.map((option: OptionType) => {
        const { value, label: optionLabel } = option;
        return (
          <option value={value} key={value}>
            {optionLabel}
          </option>
        );
      })}
    </Field>
  );
};

export default SelectFormField;