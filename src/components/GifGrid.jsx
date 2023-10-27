import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const {images,isLoading}=useFetchGifs(category);
  // const [images, setImages] = useState([]);
  // const getImages = async () => {
  //   const newImages = await getGifs(category);
  //   setImages(newImages);
  // };
  // useEffect(() => {
  //   //getGifs(category).then(newImages=>setImages(newImages));
  //   getImages();
  // }, []);

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading &&( <h2>Cargando ...</h2>)
      }
     
      <div className="card-grid">
        {images.map((image) => {
          return ( 
            <GifItem key={image.id}
            {...image}
            />
            // <li key={image.id}>
            //   <img src="" alt="" />
            //  <p>{image.title}</p>
            // </li>
          );
        })}
      </div>
    </>
  );
};
