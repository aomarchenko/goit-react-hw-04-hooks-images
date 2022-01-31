import styles from '../Searchbar/Searchbar.module.css';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Searchbar(props) {
  const [name, setName] = useState('');

  const handleInputChange = event => {
    setName(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (name.trim() === '') {
      toast.error('Please, type name of image to search');
      return;
    }

    props.onSubmit(name);
  };

  return (
    <>
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={handleSubmit}>
          <button className={styles.Button} type="submit"></button>

          <input
            className={styles.Input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
        </form>
      </header>
    </>
  );
}
