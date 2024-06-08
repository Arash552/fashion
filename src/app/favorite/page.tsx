"use client";
import "./page.css";
import Image from "next/image";
import Link from "next/link";
import Data from "../../../db.json";
import { useEffect, useState } from "react";
import AddFavorite from "../addFavorite";
export default function Favorites() {
  const data = Data.products;
  const [fav, setFav] = useState<any[]>([]);

  useEffect(() => {
    const favoriteItems = data.filter((item) => item.isFavorite);
    setFav(favoriteItems);
  }, []);

  function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }
  return (
    <>
      <header className="w-full h-16 bg-transparent flex justify-between relative px-5 mb-10">
        <div className="flex gap-x-8">
          <div className="items-center gap-x-3 hidden md:flex">
            <Link
              href={"/suits"}
              className="text-sm text-gray-300 hover:text-pink-500 cursor-pointer genderActive"
            >
              Men
            </Link>
            <Link
              href={"/dress"}
              className="text-sm text-gray-300 hover:text-pink-500 cursor-pointer"
            >
              Woman
            </Link>
            <Link
              href={"/kids"}
              className="text-sm text-gray-300 hover:text-pink-500 cursor-pointer"
            >
              Kids
            </Link>
          </div>
        </div>
        <div className="w-full h-full px-5 bg-[#242424] absolute left-0 z-[-1] flex justify-start items-center md:justify-center">
          <h1 className="text-2xl text-white font-bold">F A S H I O N</h1>
        </div>
        <div className="flex items-center gap-x-2 py-2">
          <p className="text-white text-xs">UserNumber</p>
          <Image
            src={"/human1.jpg"}
            alt="human1"
            width={100}
            height={100}
            className="w-8 h-8 rounded-full"
          ></Image>
          <i className="bi-chevron-down text-sm text-gray-300 cursor-pointer"></i>
        </div>
      </header>
      <main className="w-full px-12 box-border lg:px-40 xl:px-20">
        <div className="w-full flex justify-between items-center mb-1">
          <h1 className="text-gray-900 text-xl sm:text-2xl">Your Favorite Items</h1>
          <p className="text-gray-500">{fav.length}+ items</p>
        </div>
        <section className="w-full flex flex-wrap justify-around md:justify-between mb-10">
          {fav.map((item : any) => (
            <div
              className="w-80 bg-white shadow-lg rounded-lg overflow-hidden my-10 relative"
              key={item.description + item.id}
            >
              <AddFavorite itemId={item.id} isFavo={item.isFavorite}></AddFavorite>
              <div className="px-4 py-2">
                <h1 className="h-16 text-gray-900 font-bold text-2xl sm:text-3xl uppercase overflow-hidden mb-4">
                  {item.alt_description}
                </h1>
                <p className="h-24 text-gray-600 text-sm mt-1 overflow-hidden">
                  {item.description}
                </p>
              </div>
              <Link href={`/products/${item.id}`} className="min-w-full">
                <img
                  className="h-56 min-w-full object-cover mt-2"
                  src={item.urls.regular}
                  alt={item.alt_description}
                />
              </Link>

              <div className="flex items-center justify-between px-4 py-2 bg-pink-500">
                <h1 className="text-gray-200 font-bold text-xl">
                  ${getRandomNumber()}
                </h1>
                <button className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">
                  Add to card
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>
      <footer className="bg-[#242424]">
        <div className="max-w-2xl mx-auto text-white py-10">
          <div className="text-center">
            <h3 className="text-3xl mb-3"> Enjoy our great collection </h3>
            <p> Stay handsome. All day, every day. </p>
            <div className="flex justify-center my-10">
              <div className="flex items-center border rounded-lg px-4 py-2 w-52 mx-2">
                <img src="/instagram.png" className="w-7 md:w-8" />
                <div className="text-left ml-3">
                  <p className="text-xs text-gray-200">follow on </p>
                  <p className="text-sm md:text-base"> instagram </p>
                </div>
              </div>
              <div className="flex items-center border rounded-lg px-4 py-2 w-44 mx-2">
                <img src="/telegram.png" className="w-7 md:w-8" />
                <div className="text-left ml-3">
                  <p className="text-xs text-gray-200">follow on </p>
                  <p className="text-sm md:text-base"> telegram </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
            <p className="order-2 md:order-1 mt-8 md:mt-0">
              {" "}
              &copy; Beautiful Footer, 2021.{" "}
            </p>
            <div className="order-1 md:order-2">
              <span className="px-2">About us</span>
              <span className="px-2 border-l">Contact us</span>
              <span className="px-2 border-l">Privacy Policy</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
