import './App.css';
import { ToastContainer } from 'react-toastify';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Modal from './components/Modal/Modal';
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
