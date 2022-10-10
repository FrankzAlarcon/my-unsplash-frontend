import { createContext, useCallback, useMemo, useState } from "react"
import { addPhoto, deletePhoto } from "../services/image.service";
import { Photo } from "../types/photos";

export interface ContextProps {
  props: {
    children?: JSX.Element | JSX.Element[]
  },
  defaultContext: {
    photos: Photo[],
    handlePhotos: (photos: Photo[]) => void,
    selectedIdPhoto: number,
    updateSelectedIdPhoto: (id: number) => void,
    selectedPhotoName: string,
    updateSelectedPhotoName: (name: string) => void,
    searcher: string,
    updateSearcher: (searcher: string) => void,
    showModal: boolean,
    updateShowModal: (value: boolean) => void,
    showDeletePhotoModal: boolean,
    updateShowDeletePhotoModal: (value: boolean) => void,
    handleAddPhoto: (label: string, url: string) => void,
    handleDeletePhoto: (id: number) => void
  }
}

export const UnsplashContext = createContext<ContextProps['defaultContext'] | null>(null);

export default function UnsplashProvider({ children }: ContextProps['props']) {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedIdPhoto, setSelectedIdPhoto] = useState<number>(-1);
  const [selectedPhotoName, setSelectedPhotoName] = useState<string>('');
  const [searcher, setSearcher] = useState<string>('');
  const [showModal, setShowModal] = useState(false);
  const [showDeletePhotoModal, setShowDeletePhotoModal] = useState(false);

  const handlePhotos = (items: Photo[]) => {
    setPhotos(items);
  }
  const updateSelectedIdPhoto = (id: number) => {
    setSelectedIdPhoto(id);
  }

  const updateSelectedPhotoName = (name: string) => {
    setSelectedPhotoName(name);
  }

  const updateSearcher = (value: string) => {
    setSearcher(value);
  }

  const updateShowModal = (value: boolean) => {
    setShowModal(value)
  }

  const updateShowDeletePhotoModal = (value: boolean) => {
    setShowDeletePhotoModal(value)
  }

  const handleAddPhoto = useCallback(async (label: string, url: string) => {
    const newPhoto = await addPhoto(label, url);
    setPhotos([newPhoto, ...photos]);
  }, [photos]);

  const handleDeletePhoto = useCallback(async (id: number) => {
    await deletePhoto(id);
    const newPhotos = photos.filter(photo => photo.id !== id);
    setPhotos(newPhotos);
  }, [photos])

  const values = useMemo(() => ({
    photos,
    handlePhotos,
    selectedIdPhoto,
    updateSelectedIdPhoto,
    selectedPhotoName,
    updateSelectedPhotoName,
    searcher,
    updateSearcher,
    showModal,
    updateShowModal,
    showDeletePhotoModal,
    updateShowDeletePhotoModal,
    handleAddPhoto,
    handleDeletePhoto
  }), [showModal, showDeletePhotoModal, handleAddPhoto, photos, handleDeletePhoto, selectedIdPhoto, selectedPhotoName, searcher])

  return (
    <UnsplashContext.Provider value={values}>
      {children}
    </UnsplashContext.Provider>
  )
}

