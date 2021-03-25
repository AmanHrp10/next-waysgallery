import style from '../../../styles/Home.module.css';

export const Modal = ({ show, title, children, onClick }) => {
  return (
    <>
      <div className='modalContent'>
        {show ? (
          <div className={`${style.modalWrapper}`}>
            <div className={`${style.modal}`}>
              <div className={`${style.modalHeader}`}>
                <div className='modalTitle'>{title}</div>
                <a href='#' onClick={onClick}>
                  X
                </a>
              </div>
              <div className={`${style.modalBody}`}>{children}</div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};
