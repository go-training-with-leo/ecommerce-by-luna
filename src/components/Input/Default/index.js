import PropTypes from 'prop-types';
import classNames from 'classnames';
import React, { useState, memo } from 'react';

import eye from 'assets/images/icons/eye.png';
import eyeSlash from 'assets/images/icons/eye-slash.png';

import './style.scss';

const DefaultInput = ({
  name,
  type,
  placeholder,
  errorStatus = false,
  errorMsg = '',
  className,
  register
}) => {
  const [isShow, setIsShow] = useState(false);
  const [typeInput, setTypeInput] = useState(type);

  const togglePassword = () => {
    setIsShow(isShow => !isShow);
  };

  return (
    <div className='input-com'>
      <input
        type={typeInput}
        placeholder={placeholder}
        className={classNames(['default-input', className])}
        name={name}
        autoComplete='off'
        {...register(name)}
      />
      <label className='input__label' data-content='Email'>
        <span>{placeholder}</span>
      </label>
      <button
        style={{ display: type === 'password' ? 'block' : 'none' }}
        type='button'
        className='default-input__show'
        onClick={togglePassword}
      >
        {!isShow ? (
          <img
            src={eyeSlash}
            alt='show password'
            className='default-input__show--icon'
            onClick={() => setTypeInput('text')}
          />
        ) : (
          <img
            src={eye}
            alt='hidden password'
            className='default-input__show--icon'
            onClick={() => setTypeInput('password')}
          />
        )}
      </button>
      <p
        className={classNames([
          'default-input__error',
          { active: errorStatus }
        ])}
      >
        {errorStatus ? errorMsg : ''}
      </p>
    </div>
  );
};

DefaultInput.defaultProps = {
  name: '',
  type: 'text',
  placeholder: '',
  errorStatus: false,
  errorMsg: '',
  className: '',
  register: () => null
};

DefaultInput.propTypes = {
  name: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password', 'email', 'tel']),
  placeholder: PropTypes.string,
  errorStatus: PropTypes.bool.isRequired,
  errorMsg: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired
};

export default memo(DefaultInput);
