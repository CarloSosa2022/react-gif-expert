import React, { useState } from "react";
import { AddCategory, GifGrid } from "./component/";

const GifEffectApp = () => {
  const [categories, setCategories] = useState(["One Piece"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExperttApp</h1>

      <AddCategory
        //setCategories={setCategories}
        //categories={categories}
        onNewCategory={onAddCategory}
      />

      {categories.map((category) => {
        return (
          <>
            <GifGrid key={category} category={category} />
          </>
        );
      })}
    </>
  );
};

export default GifEffectApp;
