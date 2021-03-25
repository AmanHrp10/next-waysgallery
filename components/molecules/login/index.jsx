import { Button } from '../../atoms/button';
import { Gap } from '../../atoms/gap';
import { InputText } from '../../atoms/inputText/index';

import styles from '../../../styles/Home.module.css';
import { Modal } from '../modal';
import { useState } from 'react';
export const Login = ({ show, handleClose }) => {
  return (
    <Modal show={show} title='Login' onClick={handleClose}>
      <div className='content'>
        <InputText type='text' title='Email' name='email' required />
        <Gap height='20px' />
        <InputText type='password' title='Password' name='password' required />
        <Gap height='20px' />
        <div className='container'>
          <div className='d-flex justify-content-center'>
            <Button title='Login' style={styles.buttonActive} size='sm' />
            <Button
              title='Cancel'
              onClick={handleClose}
              style={styles.buttonDefault}
              size='sm'
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};
