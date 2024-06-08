"use client";
import { useEffect, useState } from "react";
import Data from "../../db.json";
export default function AddFavorite({ itemId , isFavo }: { itemId: string , isFavo : boolean }) {
  const data = Data.products;
  const [currentItem, setCurrentItem] = useState<any>();
  useEffect(() => {
    const item = data.find((item) => item.id == itemId);
    setCurrentItem(item);
    if(isFavo){
      setFill("-fill")
    }
  }, [data , itemId]);

  const [fill , setFill] = useState<string>("")

  async function addFav() {
    if (currentItem.id) {
      var bool : boolean;
      if(currentItem.isFavorite){
        bool = false;
        setFill("")
      }else{
        bool = true
        setFill("-fill")
      }
      await fetch(`http://localhost:5000/products/${currentItem.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...currentItem, isFavorite: bool }),
      });
    }
  }

  return (
    <i
      className={`bi-heart${fill} text-pink-600 absolute top-4 right-4 cursor-pointer`}
      onClick={addFav}
    ></i>
  );
}
