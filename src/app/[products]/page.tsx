"use client";
import "./page.css";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import AddFavorite from "../addFavorite";

export default function Products() {
  const parent = useRef<HTMLElement | any>(null);
  const targetIndex = useRef<HTMLCollection | any>(null);
  useEffect(() => {
    parent.current = document.getElementById("pageParent") as HTMLElement;
    targetIndex.current = document.getElementsByClassName(
      "pageActive"
    ) as HTMLCollection;
  }, []);
  const router = useRouter();
  const params = useParams<{ products: string }>();
  const [products, setproducts] = useState<any[]>([]);
  const fetchImages = async (searchTags: string) => {
    if (products != undefined) {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/random?count=15&query=${searchTags}&orientation=landscape&client_id=Lq_dLuMCQ7BEcfDyBPJyFLPQB4uRoJ9MV_OXCK2G2d0&fit=crop&h=400&w=400`
        );
        if (response.ok) {
          const data: Array<any> = await response.json();
          setproducts(data);
          for (const item of data) {
            await fetch("http://localhost:5000/products", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(item),
            }).catch((err) => console.log(err));
          }
        } else {
          console.error("Failed to fetch images");
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    }
  };

  useEffect(() => {
    fetchImages(params.products);
  }, []);

  const [title, setTitle] = useState<string>(params.products);

  function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }
  return (
    <>
      <header className="w-full h-16 bg-transparent flex justify-between items-center relative px-5 mb-10">
        <div className="flex items-center gap-x-8">
          <div className="flex items-center gap-x-3">
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
        </div>
        <div className="w-full h-full px-5 bg-[#242424] absolute left-0 z-[-1] flex justify-start items-center md:justify-center">
          <h1 className="text-2xl text-white font-bold">F A S H I O N</h1>
        </div>
        <div className="items-center gap-x-2 py-2 hidden sm:flex">
          <Link
            href={"./favorite"}
            className="w-7 h-7 bg-[#343434] text-sm text-gray-300 grid place-items-center rounded-full"
          >
            <i className="bi-heart cursor-pointer"></i>
          </Link>
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
      <main className="px-5 sm:px-10 md:px-20 lg:px-24 xl:px-28 mb-10">
        <div className="w-full h-11 flex justify-center items-center gap-x-2 mb-10">
          <div className="w-60 h-full p-4 py-0 flex items-center gap-x-2 border-[1px] border-solid border-gray-300 rounded-md">
            <i className="bi-search text-base text-gray-600"></i>
            <input
              className="w-full h-full text-gray-900 border-none bg-transparent outline-none"
              type="search"
              placeholder="Search..."
              onKeyUp={(e: React.KeyboardEvent) => {
                if (e.key == "Enter") {
                  router.push(`${(e.target as HTMLInputElement).value}`);
                }
              }}
            />
          </div>
          <button type="submit" className="button h-full">
            <i className="bi-search text-xl"></i>
          </button>
        </div>
        <div className="w-full flex flex-col gap-4 justify-center items-center mb-10">
          <h1 className="text-2xl text-gray-900">{title}</h1>
          <p className="text-md text-gray-600">
            {products.length + "+ Products"}
          </p>
        </div>

        <section className="w-full grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10">
          {products.map((item) => (
            <div
              className="flex flex-col gap-y-3 rounded-t-xl relative"
              key={item.id}
            >
              <AddFavorite
                itemId={item.id}
                isFavo={item.isFavorite}
              ></AddFavorite>
              <Link href={`/products/${item.id}`}>
                <img
                  src={item.urls.regular}
                  alt={item.alt_description}
                  className="min-w-full rounded-t-xl h-56"
                />
              </Link>

              <div className="px-3 mb-3">
                <p className="text-gray-900 text-2xl mb-2 whitespace-nowrap overflow-hidden">
                  {item.alt_description}
                </p>
                <p className="h-10 text-gray-600 text-sm overflow-hidden">
                  {item.description}
                </p>
              </div>
              <div className="flex justify-between gap-y-2 items-center mb-2 px-3">
                <p className="text-2xl text-gray-900">
                  ${getRandomNumber()}.{getRandomNumber()}
                </p>
                <button className="w-1/2 py-2 text-white bg-pink-500 rounded-md grid place-items-center">
                  View
                </button>
              </div>
            </div>
          ))}
        </section>

        <div className="w-full grid place-items-center mb-10">
          <div
            id="pageParent"
            className="flex gap-3 flex-wrap"
            onClick={() => {
              fetchImages("clothes");
            }}
          >
            <button
              className="px-5 flex justify-center items-center text-gray-900 bg-transparent border-[1px] border-solid border-gray-300 rounded-md"
              onClick={() => {
                for (
                  let i = 0;
                  i < parent.current.children[1].children.length;
                  i++
                ) {
                  const element = parent.current.children[1].children[i];
                  element.classList.remove("pageActive");
                }
                try {
                  parent.current.children[1].children[
                    targetIndex.current - 1
                  ].classList.add("pageActive");
                } catch {
                  parent.current.children[1].lastElementChild?.classList.add(
                    "pageActive"
                  );
                }
              }}
            >
              <p>Pre</p>
            </button>
            <div
              className="flex gap-x-2 items-center"
              onClick={(e) => {
                const elem = e.target as HTMLElement;
                for (let i = 0; i < e.currentTarget.children.length; i++) {
                  const element = e.currentTarget.children[i];
                  element.classList.remove("pageActive");
                }
                e.currentTarget.children[
                  parseFloat(elem.innerText) - 1
                ].classList.add("pageActive");
              }}
            >
              <button className="pageActive px-5 py-2 grid place-items-center text-gray-900 bg-transparent border-[1px] border-solid border-gray-300 rounded-md">
                1
              </button>
              <button className="px-5 py-2 grid place-items-center text-gray-900 bg-transparent border-[1px] border-solid border-gray-300 rounded-md">
                2
              </button>
              <button className="px-5 py-2 grid place-items-center text-gray-900 bg-transparent border-[1px] border-solid border-gray-300 rounded-md">
                3
              </button>
              <button className="px-5 py-2 grid place-items-center text-gray-900 bg-transparent border-[1px] border-solid border-gray-300 rounded-md">
                4
              </button>
              <button className="px-5 py-2 grid place-items-center text-gray-900 bg-transparent border-[1px] border-solid border-gray-300 rounded-md">
                5
              </button>
            </div>
            <button
              className="px-5 py-2 flex justify-center items-center text-gray-900 bg-transparent border-[1px] border-solid border-gray-300 rounded-md"
              onClick={() => {
                for (
                  let i = 0;
                  i < parent.current.children[1].children.length;
                  i++
                ) {
                  const element = parent.current.children[1].children[i];
                  element.classList.remove("pageActive");
                }
                try {
                  parent.current.children[1].children[
                    targetIndex.current - 1
                  ].classList.add("pageActive");
                } catch {
                  parent.current.children[1].firstElementChild?.classList.add(
                    "pageActive"
                  );
                }
              }}
            >
              <p>Next</p>
            </button>
          </div>
        </div>
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
