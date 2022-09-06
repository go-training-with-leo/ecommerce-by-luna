import React, { useState, memo } from 'react';
import classNames from 'classnames';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import eye from 'assets/images/icons/eye.png';
import eyeSlash from 'assets/images/icons/eye-slash.png';

import './style.scss';

function DefaultInput({
  name = 'name',
  type = 'text',
  errorStatus = false,
  errorMsg = '',
  value = '',
  className = '',
  onChange,
  onKeyDown
}) {
  const [isShow, setIsShow] = useState(false);

  const togglePassword = () => {
    setIsShow(isShown => !isShown);
  };

  return (
    <div>
      <input
        type={isShow ? type : 'password'}
        placeholder='Confirm password'
        className={classNames(['default-input', className])}
        name={name}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        autoComplete='off'
      />
      {isShow && (
        <button
          type='button'
          className='default-input__show'
          onClick={togglePassword}
        >
          <img
            src={!isShow ? eye : eyeSlash}
            className='default-input__show--icon'
          />
        </button>
      )}
      <p
        className={classNames([
          'default-input__error',
          { active: errorStatus }
        ])}
      >
        {errorStatus ? errorMsg : 'valid'}
      </p>
    </div>
  );
}

export default memo(DefaultInput);
