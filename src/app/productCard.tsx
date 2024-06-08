"use client";
import Link from "next/link";
import "./page.css";
import { useEffect, useRef, useState } from "react";
import AddFavorite from "./addFavorite";

interface Props {
  id: string;
  title: string;
  subText: string;
  description: string;
  price: number;
  pic: string;
  isFavorite: boolean;
}

export default function ProductCard({ data }: any) {
  const val = data.productCard as Props[];

  const parent = useRef<HTMLElement | any>(null);
  const option = useRef<HTMLCollection | any>(null);
  var wid: number;
  var PC: number;
  var index = 0;

  useEffect(() => {
    if (typeof document !== "undefined") {
      parent.current = document.getElementById("sliderCard") as HTMLElement;
      option.current = document.getElementsByClassName("option");
      if (parent.current.children.length > 0) {
        wid =
          parseInt(getComputedStyle(parent.current.children[0]).width) +
          parseInt(getComputedStyle(parent.current.children[0]).marginRight);
        PC = parseInt(
          (100 / ((100 * wid) / document.body.clientWidth)).toFixed(0)
        );
      }
    }
  }, []);

  function goBack() {
    index--;
    if (parent.current.scrollLeft > 0) {
      parent.current.scrollTo(index * wid, 0);
    } else {
      index = val.length - (PC - 2);
      parent.current.scrollTo(index * wid, 0);
    }
    console.log(index);
  }

  function goNext() {
    index++;
    const maxScrollLeft =
      parent.current.scrollWidth - parent.current.clientWidth;
    if (parent.current.scrollLeft < maxScrollLeft) {
      parent.current.scrollTo(index * wid, 0);
    } else {
      index = 0;
      parent.current.scrollTo(0, 0);
    }
  }

  function selectOption(elem: any) {
    for (let i = 0; i < option.current.length; i++) {
      option.current[i].classList.remove("optionActive");
    }
    elem.currentTarget.classList.add("optionActive");
  }
  function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }
  return (
    <>
      <div className="w-full hidden sm:flex justify-between items-center border-b-2 border-solid border-gray-300 mb-6">
        <div className="w-56 hidden sm:block"></div>
        <div className="h-11 hidden sm:flex items-center gap-x-4">
          <button
            className="option.current option.currentActive h-full text-gray-500 text-sm border-b-2 border-solid border-white"
            onClick={(e) => {
              selectOption(e);
            }}
          >
            Featured
          </button>
          <button
            className="option.current h-full text-gray-500 text-sm border-b-2 border-solid border-white"
            onClick={(e) => {
              selectOption(e);
            }}
          >
            Editors Pack
          </button>
        </div>
        <div className="flex items-center gap-x-4">
          <Link
            href={"/clothes"}
            className="p-5 py-2 text-sm border-2 border-solid border-gray-300 rounded-sm grid place-items-center"
          >
            see all
          </Link>
          <div className="flex items-center gap-x-1">
            <button
              className="p-5 py-2 grid place-items-center border-2 border-solid border-gray-300 rounded-sm"
              onClick={() => {
                goBack();
              }}
            >
              <i className="bi-chevron-left"></i>
            </button>
            <button
              className="p-5 py-2 grid place-items-center border-2 border-solid border-gray-300 rounded-sm"
              onClick={() => {
                goNext();
              }}
            >
              <i className="bi-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
      <section
        className="w-full mb-10 flex gap-x-5 overflow-scroll whitespace-nowrap overflow-y-hidden"
        id="sliderCard"
      >
        {val.map((item: Props) => (
          <div className="min-w-56 h-64 px-2 relative hover:h-[340px] cursor-pointer bg-[#f5f5f5] rounded-sm overflow-hidden" key={item.description + item.id}>
            <Link href={`/products/${item.id}`}>
              <img src={item.pic} alt={item.title}></img>
            </Link>
            <AddFavorite
              itemId={item.id}
              isFavo={item.isFavorite}
            ></AddFavorite>
            <p className="w-full text-xl text-gray-900 grid place-items-center my-3 text-center">
              {item.subText}
            </p>
            <p className="w-full h-5 overflow-hidden text-sm text-gray-500 grid place-items-center mb-3 text-center">
              {item.subText}
            </p>
            <p className="w-full text-xl text-gray-900 grid place-items-center text-center">
              ${item.price}
            </p>
          </div>
        ))}
      </section>
    </>
  );
}