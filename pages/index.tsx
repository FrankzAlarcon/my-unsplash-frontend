import type { GetServerSideProps, NextPage } from 'next'
import Header from '../components/Header'
import Main from '../components/Main'
import AddPhotoModal from '../components/AddPhotoModal'
import { useUnsplash } from '../hooks/useUnsplash'
import DeletePhotoModal from '../components/DeletePhotoModal'
import { getAllPhotos } from '../services/image.service'
import { Photo } from '../types/photos'
import { useEffect } from 'react'

interface Props {
  photos: Photo[]
}

const Home: NextPage<Props> = ({ photos }) => {
  const { showModal, updateShowModal, showDeletePhotoModal, updateShowDeletePhotoModal, handlePhotos, photos: items } = useUnsplash();

  useEffect(() => {
    handlePhotos(photos);
  }, []);

  return (
    <div>
      <Header />
      <Main />
      <AddPhotoModal isOpen={showModal} updateShowModal={updateShowModal} />
      <DeletePhotoModal isOpen={showDeletePhotoModal} updateShowModal={updateShowDeletePhotoModal} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const photos = await getAllPhotos();
  return {
    props: {
      photos
    }
  }
}

export default Home;
