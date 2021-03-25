import { useState } from 'react';

// Module Next JS
import Image from 'next/image';

// Module Local
import ImageLanding from '../../images/landing.png';
import ImageLogo from '../../images/logo.png';
import ChildLogo from '../../images/catur.png';
import { Button } from '../../components/atoms/button';

// Styles
import styles from '../../styles/Home.module.css';
import { Login } from '../../components/molecules/login';
import { Register } from '../../components/molecules/register';

export const Landing = () => {
  let [modalLogin, setModalLogin] = useState(false);
  let [modalRegister, setModalRegister] = useState(false);

  const showModalLogin = () => {
    setModalLogin(true);
  };

  const showModalRegister = () => {
    setModalRegister(true);
  };
  return (
    <>
      <div className='container'>
        <div className={`row landing-items ${styles.landingItems}`}>
          <div className={`col-md-6 align-self-center ${styles.landingLogo}`}>
            <Image
              src={ImageLogo}
              alt='image-landing'
              width={300}
              height={200}
            />
            <div className={`childLogo ${styles.childLogo}`}>
              <Image
                src={ChildLogo}
                alt='image-landing'
                width={90}
                height={110}
              />
            </div>
            <h5 className='font-weight-bold'>
              Show your work to inspire everyone
            </h5>
            <p>
              Ways Exibition is as website design creator gather to share their
              work with other creator
            </p>
            <div className='auth-btn'>
              <Button
                onClick={showModalRegister}
                dataToggle='modal'
                dataTarget='#register'
                title='Register'
                color='active'
                style={styles.buttonActive}
                size='sm'
              />
              <Button
                onClick={showModalLogin}
                dataToggle='modal'
                dataTarget='#login'
                title='Login'
                color='active'
                style={styles.buttonDefault}
                size='sm'
              />
            </div>
          </div>
          <div className='col-md-6 align-self-center'>
            <Image
              src={ImageLanding}
              alt='image-landing'
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
      <Login show={modalLogin} handleClose={() => setModalLogin(false)} />
      <Register
        show={modalRegister}
        handleClose={() => setModalRegister(false)}
      />
    </>
  );
};
