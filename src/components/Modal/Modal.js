import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from '../Modal/Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function Modal(props) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('Esc');
      props.toggle();
    }
  };

  const array = props.hits;
  const imageId = props.id;
  const image = array.filter(img => img.id == imageId);

  return createPortal(
    <div className={styles.Overlay} onClick={props.toggle}>
      <div className={styles.Modal}>
        <img src={image[0].largeImageURL} alt={image[0].tags} />
      </div>
    </div>,
    modalRoot,
  );
}
