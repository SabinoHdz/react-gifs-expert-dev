import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
export const GitExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon ball"]);
  const onAddCategory = (newCategory) => {
    //opcion 1
    //setCategories(category=>category.concat('new element'));
    //opcion 2
    //setCategories(categories.concat('new element 2'))
    //opcion 3
    //setCategories([...categories,'newElement three'])
    //opcion 4
    if (categories.includes(newCategory)) return;
    setCategories([...categories, newCategory]);
    console.log(newCategory);
  };
  return (
    <>
      {/* Titulo */}
      <h1>Git Expert App</h1>
      {/* input */}
      <AddCategory
        //Enviar datos al componente hijo
        //setCategories={setCategories}
        onNewCategory={(value) => onAddCategory(value)}
      />
      {/* <button onClick={onAddCategory}>Agregar</button> */}

      {/* Listado de Gif */}

      {categories.map(
        (category) => (
          <GifGrid key={category} category={category} />
        )
        //Quitar para agregar un componente
        // {
        //   return (
        //     <div key={category}>
        //       <h3>{category}</h3>
        //       <li>{category}</li>
        //     </div>
        //   );
        // }
      )}
      {/* Gif Item */}
    </>
  );
};
