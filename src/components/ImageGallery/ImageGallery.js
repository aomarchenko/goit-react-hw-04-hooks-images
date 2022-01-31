import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Loader from 'react-loader-spinner';
import Button from '../Button/Button';
import styles from '../ImageGallery/ImageGallery.module.css';
import { useState, useEffect } from 'react';

export default function ImageGallery(props) {
  const [galery, setGalery] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (props.name) setLoading(true);
  }, [page, props.name]);

  useEffect(() => {
    if (props.name)
      fetch(
        `https://pixabay.com/api/?key=23676314-92d729b6642f8dfd3ee72d5a9&q=${props.name}&image_type=photo&per_page=12&page=${page}`,
      )
        .then(res => res.json())
        .then(galery => setGalery(galery))
        .finally(() => setLoading(false));

    props.onFetch(galery);
  }, [galery, props.name, page]);

  useEffect(() => {
    setPage(1);
  }, [props.name]);

  const nextPage = () => {
    setPage(page + 1);
  };
  const mouseClik = e => {
    props.toggle();
    props.onImageClick(e.target.id);
  };

  return (
    <>
      {loading && (
        <Loader className={styles.Spinner} type="Audio" color="#00BFFF" height={80} width={80} />
      )}
      {galery && (
        <ul className={styles.ImageGallery} onClick={mouseClik}>
          <ImageGalleryItem hits={galery.hits} />
        </ul>
      )}

      {props.name && <Button onClick={nextPage} />}
    </>
  );
}
