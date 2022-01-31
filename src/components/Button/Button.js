import styles from '../Button/Button.module.css';

export default function Button(props) {
  return (
    <>
      <button className={styles.Button} type="button" onClick={props.onClick}>
        Load more
      </button>
    </>
  );
}
