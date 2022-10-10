import { Photo } from "../types/photos";

const API_URL_FRONTEND = process.env.NEXT_PUBLIC_API_URL;
const API_URL_BACKEND = process.env.API_URL;

export const getAllPhotos = async (): Promise<Photo[]> => {
  const response = await fetch(API_URL_BACKEND as string);
  const photos: Photo[] = await response.json();
  return photos;
}

export const addPhoto = async (label: string, url: string): Promise<Photo> => {
  const response = await fetch(API_URL_FRONTEND as string, {
    method: 'POST',
    body: JSON.stringify({ label, url }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data: Photo = await response.json();
  return data;
}

export const deletePhoto = async (id: number): Promise<void> => {
  await fetch(`${API_URL_FRONTEND}/${id}`, {
    method: 'DELETE',
  });
}