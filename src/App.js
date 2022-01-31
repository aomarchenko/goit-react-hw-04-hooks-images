import './App.css';
import { ToastContainer } from 'react-toastify';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Modal from './components/Modal/Modal';
// import React, { Component } from 'react';
import { useState } from 'react';

export default function ImageFinder() {
  const [name, setName] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [gallery, setGallery] = useState(null);
  const [id, setId] = useState(null);

  const searchbarSubmit = name => {
    setName(name);
  };

  const galleryFetch = gallery => {
    setGallery(gallery);
  };

  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };
  const onImageClick = id => {
    setId(id);
  };

  return (
    <>
      <Searchbar onSubmit={searchbarSubmit} />
      <ImageGallery
        name={name}
        onFetch={galleryFetch}
        gallery={gallery}
        toggle={toggleModal}
        onImageClick={onImageClick}
      />
      {showModal && <Modal hits={gallery.hits} toggle={toggleModal} id={id}></Modal>}
      <ToastContainer autoClose={3000} />
    </>
  );
}

// import './App.css';
// import { ToastContainer } from 'react-toastify';
// import Searchbar from './components/Searchbar/Searchbar';
// import ImageGallery from './components/ImageGallery/ImageGallery';
// import Modal from './components/Modal/Modal';
// import React, { Component } from 'react';

// class ImageFinder extends Component {
//   state = {
//     name: '',
//     showModal: false,
//     gallery: null,
//     id: null,
//   };

//   searchbarSubmit = name => {
//     this.setState({ name });
//   };

//   galleryFetch = gallery => {
//     this.setState({ gallery });
//   };

//   toggleModal = () => {
//     this.setState(state => ({ showModal: !this.state.showModal }));
//   };
//   onImageClick = id => {
//     this.setState({ id });
//   };
//   render() {
//     return (
//       <>
//         <Searchbar onSubmit={this.searchbarSubmit} />
//         <ImageGallery
//           name={this.state.name}
//           onFetch={this.galleryFetch}
//           gallery={this.state.gallery}
//           toggle={this.toggleModal}
//           onImageClick={this.onImageClick}
//         />
//         {this.state.showModal && (
//           <Modal
//             hits={this.state.gallery.hits}
//             toggle={this.toggleModal}
//             id={this.state.id}
//           ></Modal>
//         )}
//         <ToastContainer autoClose={3000} />
//       </>
//     );
//   }
// }
// export default ImageFinder;
