import styles from '../ImageGalleryItem/ImageGalleryItem.module.css';

export default function ImageGalleryItem(props) {
  const array = props.hits;

  return (
    <>
      {array.map(item => (
        <li className={styles.ImageGalleryItem} key={item.id}>
          <img className={styles.Image} src={item.webformatURL} alt={props.name} id={item.id} />
        </li>
      ))}
    </>
  );
}
