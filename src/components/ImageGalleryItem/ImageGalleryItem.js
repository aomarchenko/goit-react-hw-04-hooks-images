import { Component } from 'react';
import styles from '../ImageGalleryItem/ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  render() {
    const array = this.props.hits;

    return (
      <>
        {array.map(item => (
          <li className={styles.ImageGalleryItem} key={item.id}>
            <img
              className={styles.Image}
              src={item.webformatURL}
              alt={this.props.name}
              id={item.id}
            />
          </li>
        ))}
      </>
    );
  }
}
