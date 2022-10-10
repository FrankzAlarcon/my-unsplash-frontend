import React, { useState } from 'react'
import { useUnsplash } from '../hooks/useUnsplash';
import { Photo } from '../types/photos';

interface Props {
  photo: Photo
}

export default function Card({ photo }: Props) {
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const { updateShowDeletePhotoModal, updateSelectedIdPhoto, updateSelectedPhotoName } = useUnsplash();

  const handleMouseEnter = () => {
    setShowDeleteButton(true);
  }

  const handleMouseLeave = () => {
    setShowDeleteButton(false);
  }

  const handleDeletePhoto = () => {
    updateShowDeletePhotoModal(true);
    updateSelectedIdPhoto(photo.id);
    updateSelectedPhotoName(photo.label);
  }
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="rounded-xl relative overflow-hidden bg-transparent">
      {
        showDeleteButton && (
          <>
            <button
              type='button'
              className='absolute right-2 top-2 rounded-full px-3 max-w-min text-red-700 bg-transparent border-2 border-red-700'
              onClick={handleDeletePhoto}
            >delete</button>
            <p className='absolute bottom-4 left-4 text-white font-black'>{photo.label}</p>
          </>
        )
      }
      <img src={photo.url} alt={`Image ${photo.label}`} />
    </div>
  )
}
