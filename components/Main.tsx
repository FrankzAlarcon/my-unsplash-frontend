import { useMemo } from "react";
import Masonry from "react-masonry-css";
import { useUnsplash } from "../hooks/useUnsplash";
import Card from "./Card";

export default function Main() {
  const { photos, searcher } = useUnsplash();

  const filteredPhotos = useMemo(() => photos.filter((photo) => photo.label.toLowerCase().includes(searcher.toLowerCase())), [searcher, photos]);
  return (
    <div className="p-10 w-4/5 mx-auto">
      <Masonry
        className="my-masonry-grid"
        breakpointCols={3}
        columnClassName="my-masonry-grid_column"
      >
        {
          filteredPhotos.map((photo) => (
            <Card key={photo.id} photo={photo} />
          ))
        }
      </Masonry>
    </div>
  )
}
