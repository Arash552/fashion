"use client";

import { useEffect, useRef, useState } from "react";
import "./page.css";
import Link from "next/link";

interface dataProps {
  id: number;
  title: string;
  subText: string;
  description: string;
  price: number;
  pic: string;
  isFavorite: boolean;
}
export default function BigSlider({ data }: any) {
  const [Data, setData] = useState<dataProps[]>(data.productCard);
  var numb = 0;
  const parent = useRef<HTMLElement | any>(null)
  useEffect(() => {
    parent.current = document.getElementById("bigSlider") as HTMLElement;
  }, []);
  return (
    <section className="py-5 lg:py-10 relative">
      <div className="absolute z-10 right-5 bottom-8 flex items-center gap-x-3">
        <div
          className="w-11 h-11 hidden sm:grid lg:w-14 lg:h-14 text-xl rounded-full place-items-center bg-none border-2 border-gray-500 border-solid cursor-pointer"
          onClick={() => {
            if (numb === 0) {
              return null;
            } else {
              numb--;
              parent.current.scrollTo(numb * parent.current.clientWidth, 0);
            }
          }}
        >
          <i className="bi-chevron-left text-gray-900"></i>
        </div>
        <div
          className="w-11 h-11 hidden sm:grid lg:w-14 lg:h-14 text-xl rounded-full place-items-center bg-none border-2 border-gray-500 border-solid cursor-pointer"
          onClick={() => {
            if (numb === Data.length - 1) {
              return null;
            } else {
              numb++;
            }
            parent.current.scrollTo(numb * parent.current.clientWidth, 0);
          }}
        >
          <i className="bi-chevron-right text-gray-900"></i>
        </div>
      </div>
      <div
        className="bigSlider w-full flex items-center overflow-scroll snap-x snap-mandatory"
        id="bigSlider"
      >
        {Data.map((item: dataProps) => (
          <Link
            href={`/products/${item.id}`}
            className="min-w-full rounded bg-[#f5f5f5] shadow-xl p-10 lg:p-20 mx-auto text-gray-900 relative md:text-left snap-mandatory"
            id={item.id.toString()}
            key={item.description + item.id}
          >
            <div className="md:flex items-center -mx-10">
              <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                <div className="relative">
                  <img
                    src={item.pic}
                    className="w-full relative z-10"
                    alt={item.title}
                  />
                  <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-10">
                <div className="mb-10">
                  <h1 className="font-bold uppercase text-2xl mb-5">
                    {item.title}
                  </h1>
                  <p className="text-sm">
                    {item.description}
                    <a
                      href="#"
                      className="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900"
                    >
                      MORE <i className="mdi mdi-arrow-right"></i>
                    </a>
                  </p>
                </div>
                <div className="flex gap-x-6">
                  <div className="flex items-center">
                    <span className="text-2xl leading-none align-baseline">
                      $
                    </span>
                    <p className="font-bold text-5xl leading-none align-baseline">
                      {item.price}
                    </p>
                  </div>
                  <div className="">
                    <button className="bg-pink-500 opacity-90 hover:opacity-100 text-white rounded-full px-10 py-2 font-semibold">
                      <i className="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
