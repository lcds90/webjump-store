import PropTypes from 'prop-types';
import React from 'react';
import styles from './Input.module.css';

const { fieldset, input, labelStyle } = styles;

const Input = ({
  label,
  name,
  onChange,
  placeholder,
  type,
  value,
}) => (
  <fieldset className={fieldset}>
    <label className={labelStyle} htmlFor={name}>
      {label}
    </label>
    <input
      className={input}
      name={name}
      id={name}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
      value={value}
    />
  </fieldset>
);

const { string, func } = PropTypes;

Input.defaultProps = {
  onChange: null,
  type: 'text',
};

Input.propTypes = {
  label: string.isRequired,
  name: string.isRequired,
  onChange: func,
  placeholder: string.isRequired,
  type: string,
  value: string.isRequired,
};

export default Input;
