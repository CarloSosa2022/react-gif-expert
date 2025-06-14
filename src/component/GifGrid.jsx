import { GifGridItem } from "./GifGridItem";
import useFetchGifs from "../hook/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {isLoading && <h2>...Cargando</h2>}

      <div className="card-grid">
        {images.map((image) => {
          return (
            <GifGridItem
              key={image.id}
              //title={image.title}
              //url={image.url}
              {...image}
            />
          );
        })}
      </div>
    </>
  );
};
