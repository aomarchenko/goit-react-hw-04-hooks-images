// import { Component } from 'react';
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
    setLoading(true);
  }, [page]);

  useEffect(() => {
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

      {galery && <Button onClick={nextPage} />}
    </>
  );
}

// import { Component } from 'react';
// import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
// import Loader from 'react-loader-spinner';
// import Button from '../Button/Button';
// import styles from '../ImageGallery/ImageGallery.module.css';

// export default class ImageGallery extends Component {
//   state = {
//     galery: null,
//     page: 1,
//     loading: false,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.name !== this.props.name || prevState.page !== this.state.page) {
//       this.setState({ loading: true });

//       fetch(
//         `https://pixabay.com/api/?key=23676314-92d729b6642f8dfd3ee72d5a9&q=${this.props.name}&image_type=photo&per_page=12&page=${this.state.page}`,
//       )
//         .then(res => res.json())
//         .then(galery => this.setState({ galery }))
//         .finally(() => this.setState({ loading: false }));
//     }

//     if (prevProps.name !== this.props.name) {
//       this.setState({ page: 1 });
//     }
//     if (prevProps.gallery !== this.state.galery) {
//       this.props.onFetch(this.state.galery);
//     }
//   }

//   nextPage = prevProps => {
//     this.setState({ page: this.state.page + 1 });
//   };
//   mouseClik = e => {
//     this.props.toggle();
//     this.props.onImageClick(e.target.id);
//   };
//   render() {
//     return (
//       <>
//         {this.state.loading && (
//           <Loader className={styles.Spinner} type="Audio" color="#00BFFF" height={80} width={80} />
//         )}
//         {this.state.galery && (
//           <ul className={styles.ImageGallery} onClick={this.mouseClik}>
//             <ImageGalleryItem hits={this.state.galery.hits} />
//           </ul>
//         )}

//         {this.state.galery && <Button onClick={this.nextPage} />}
//       </>
//     );
//   }
// }
