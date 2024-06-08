"use client";

import Image from "next/image";
import "./page.css";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface valProps {
  id: number;
  title: string;
  subText: string;
  pic: string;
  isBackDark: boolean;
}
export default function Slider({ data }: any) {
  const parent = useRef<HTMLElement | any>(null);
  const dot = useRef<HTMLCollection | any>(null);
  const dotImage = useRef<HTMLElement | any>(null);
  const val: valProps[] = data.heroSection;
  const [numb, setNumb] = useState<number>(-1);

  useEffect(() => {
    if (typeof document !== "undefined") {
      parent.current = document.getElementById("parent") as HTMLElement;
      dot.current = document.getElementsByClassName("dots") as HTMLCollection;
      dotImage.current = document.getElementById("dotsImage") as HTMLElement;
      if (numb !== -1) {
        const timer = setTimeout(() => {
          removeDotClass();
          if (numb === val.length - 1) {
            parent.current?.scrollTo({
              top: 0,
              behavior: "instant",
            });
            setNumb(0);
            dot.current[0].classList.add("dotsActive");
          } else {
            dot.current[numb + 1].click();
            dot.current[numb + 1].classList.add("dotsActive");
          }
        }, 7000);

        return () => clearTimeout(timer);
      }
    }
  }, [numb]);

  useEffect(() => {
    dot.current[0].click();
  }, []);

  function scroll(index: number) {
    parent.current?.scrollTo(0, index * parent.current.clientHeight);
  }

  function removeDotClass() {
    for (let i = 0; i < dot.current.length; i++) {
      dot.current[i].classList.remove("dotsActive");
    }
  }

  var subNumb: number;
  numb === -1 ? (subNumb = 0) : (subNumb = numb);
  function lightMode() {
    var textColor: string;
    if (val[subNumb].isBackDark === false) {
      textColor = "text-gray-900";
    } else {
      textColor = "text-white";
    }
    return textColor;
  }
  return (
    <section className="hero w-full relative mb-4">
      <div className="heroScroll h-[40vw] md:h-[30vw] lg:h-[25vw]" id="parent">
        {val.map((items: valProps) => (
          <Link
            href={`/${items.title}`}
            className="min-w-full h-full rounded-sm"
            key={items.title + items.id}
          >
            <Image
              src={items.pic}
              alt={items.title}
              width={1600}
              height={0}
              className="w-full h-full rounded-sm"
            ></Image>
          </Link>
        ))}
      </div>
      <div
        className="heroSide overflow-hidden"
        onMouseEnter={() => {
          dotImage.current.classList.add("dotsImageAvtive");
        }}
        onMouseLeave={() => {
          dotImage.current.classList.remove("dotsImageAvtive");
        }}
      >
        <ul
          className="h-full py-5 overflow-scroll flex flex-col gap-y-3 list-none mr-5 relative right-[-100%]"
          id="dotsImage"
        >
          {val.map((items: valProps, index: number) => (
            <li
              className="min-w-[6vw] min-h-[6vw] md:min-w-[4vw] md:min-h-[4vw] lg:min-w-[3.5vw] lg:min-h-[3.5vw] rounded-md cursor-pointer"
              key={items.title + items.id}
              style={{
                backgroundImage: `url(${items.pic})`,
                backgroundSize: "cover",
              }}
              onClick={() => {
                removeDotClass();
                dot.current[index].classList.add("dotsActive");
                setNumb(index);
                scroll(index);
                dotImage.current.scrollTo(0, index * 30);
              }}
            ></li>
          ))}
        </ul>
        <ul className="flex items-center flex-col gap-y-3 list-none">
          {val.map((items: valProps, index: number) => (
            <li
              className="dots w-2 h-2 rounded-full bg-white cursor-pointer"
              key={items.id}
              onClick={function (e) {
                removeDotClass();
                e.currentTarget.classList.add("dotsActive");
                setNumb(index);
                scroll(index);
                dotImage.current.scrollTo(0, index * 30);
              }}
            ></li>
          ))}
        </ul>
      </div>
      <div className="absolute bottom-2 left-4 sm:bottom-4 sm:left-8 z-20">
        <p
          className={`${lightMode()} text-xl md:text-2xl lg:text-3xl font-medium mb-2`}
        >
          {val[subNumb].title}
        </p>
        <p
          className={`w-48 h-10 ${lightMode()} hidden md:block text-sm lg:text-sm mb-2 overflow-hidden`}
        >
          {val[subNumb].subText}
        </p>
        <Link
          href="/products"
          className={`${lightMode()} underline text-sm lg:text-lg`}
        >
          see more
        </Link>
      </div>
    </section>
  );
}
