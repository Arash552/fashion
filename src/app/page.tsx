import "./page.css";
import Image from "next/image";
import Link from "next/link";
import data from "../../db.json";
import Slider from "./slider";
import ProductCard from "./productCard";
import BigSlider from "./bigSlider";
import SearchBar from "./searchBar";
import SearchBar2 from "./searchBar2";

export default function Home() {
  return (
    <body className="w-full">
      <header className="w-full h-16 bg-transparent flex justify-between relative px-5">
        <div className="gap-x-8 hidden md:flex">
          <div className="hover:h-auto mt-[19px]">
            <div className="flex gap-x-2">
              <Image
                src={"/united-states.png"}
                alt="America"
                width={25}
                height={25}
              ></Image>
              <i className="bi-chevron-down text-gray-300"></i>
            </div>
          </div>
          <div className="flex items-center gap-x-3">
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
        <div className="w-1 md:hidden"></div>
        <div className="w-full h-full px-5 bg-[#242424] absolute left-0 z-[-1] flex justify-start items-center md:justify-center">
          <h1 className="text-2xl text-white font-bold">F A S H I O N</h1>
        </div>
        <div className="flex items-center gap-x-2 py-2">
          <div className="hidden border-solid border-r-2 border-r-gray-500 pr-2 xl:block">
            <SearchBar></SearchBar>
          </div>

          <Link
            href={"./favorite"}
            className="w-7 h-7 p-1 bg-[#343434] text-sm text-gray-300 place-items-center rounded-full hidden lg:grid"
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
      <main className="w-full px-6 box-border md:px-20 lg:px-40 xl:px-48">
        <div className="w-full flex justify-between items-center mt-6 xl:hidden lg:justify-center">
          <SearchBar2></SearchBar2>
          <Link
            href={"./favorite"}
            className="w-7 h-7 text-sm border-[1px] mb-3 border-solid border-gray-300 text-gray-900 grid place-items-center rounded-full lg:hidden"
          >
            <i className="bi-heart cursor-pointer"></i>
          </Link>
        </div>
        <header className="w-full h-0 md:h-20 bg-white flex justify-center items-center mb-4">
          <ul className="list-none hidden md:flex md:justify-between md:items-center gap-4 text-sm md:text-base text-gray-900">
            <Link
              href={"/products"}
              className="hover:text-pink-600 hover:cursor-pointer TLALi"
            >
              Sales
            </Link>
            <Link
              href={"/products"}
              className="hover:text-pink-600 hover:cursor-pointer"
            >
              New Items
            </Link>
            <Link
              href={"/products"}
              className="hover:text-pink-600 hover:cursor-pointer"
            >
              Brands
            </Link>
            <Link
              href={"/products"}
              className="hover:text-pink-600 hover:cursor-pointer"
            >
              Clothing
            </Link>
            <Link
              href={"/shoes"}
              className="hover:text-pink-600 hover:cursor-pointer"
            >
              Shoes
            </Link>
            <Link
              href={"/bags"}
              className="hover:text-pink-600 hover:cursor-pointer"
            >
              Bags
            </Link>
            <Link
              href={"/Accessories"}
              className="hover:text-pink-600 hover:cursor-pointer"
            >
              Accessories
            </Link>
            <Link
              href={"/Jwerly"}
              className="hover:text-pink-600 hover:cursor-pointer"
            >
              Jwerly
            </Link>
          </ul>
        </header>
        <Slider data={data}></Slider>
        <div className="w-full flex justify-between items-center gap-x-2 mb-12">
          <Link
            href={"/products"}
            className="w-full h-26vw lg:h-[23vw] rounded-sm overflow-hidden relative"
          >
            <div className="w-full h-full boxShadow absolute z-10"></div>
            <Image
              src={"/2150799809.jpg"}
              alt="none"
              width={1500}
              height={1500}
              className="w-full h-full boxShadow"
            ></Image>
            <div className="absolute bottom-2 left-3 sm:bottom-4 sm:left-6 z-20">
              <p className="text-white text-sm sm:text-lg lg:text-2xl font-medium mb-2">
                Facial Products
              </p>
              <a href="#" className="text-gray-300 underline text-xs sm:text-sm">
                see more
              </a>
            </div>
          </Link>
          <Link
            href={"/products"}
            className="w-full h-26vw lg:h-[23vw] rounded-sm overflow-hidden relative"
          >
            <div className="w-full h-full boxShadow absolute z-10"></div>
            <Image
              src={"/2148452701.jpg"}
              alt="none"
              width={1500}
              height={1500}
              className="w-full h-full boxShadow"
            ></Image>
            <div className="absolute bottom-2 left-3 sm:bottom-4 sm:left-6 z-20">
              <p className="text-white text-sm sm:text-lg lg:text-2xl font-medium mb-2">
                Office Outfits
              </p>
              <a href="#" className="text-gray-300 underline text-xs sm:text-sm">
                see more
              </a>
            </div>
          </Link>
          <Link
            href={"/products"}
            className="w-full h-26vw hidden md:block lg:h-[23vw] rounded-sm overflow-hidden relative"
          >
            <div className="w-full h-full boxShadow absolute z-10"></div>
            <Image
              src={"/2148350112.jpg"}
              alt="none"
              width={1500}
              height={1500}
              className="w-full h-full boxShadow"
            ></Image>
            <div className="absolute bottom-2 left-3 sm:bottom-4 sm:left-6 z-20">
              <p className="text-white text-sm sm:text-lg lg:text-2xl font-medium mb-2">
                Colorfull Designs
              </p>
              <a href="#" className="text-gray-300 underline text-xs sm:text-sm">
                see more
              </a>
            </div>
          </Link>
        </div>
        <section className="w-full hidden sm:grid grid-cols-2 grid-rows-2 xl:grid-cols-4 xl:grid-rows-1 gap-2 mb-8">
          <div className="min-w-[50%] flex flex-col justify-between items-center gap-y-3 p-5 bg-[#f5f5f5] rounded-sm">
            <i className="bi-phone"></i>
            <p className="text-sm sm:text-base text-gray-900 font-bold whitespace-nowrap">
              free shipping world wide
            </p>
            <p className="text-xs text-gray-500 whitespace-nowrap">
              buy a product now!
            </p>
          </div>
          <div className="min-w-[50%] flex flex-col justify-between items-center gap-y-3 p-5 bg-[#f5f5f5] rounded-sm">
            <i className="bi-arrow-clockwise"></i>
            <p className="text-sm sm:text-base text-gray-900 font-bold whitespace-nowrap">
              refresh and exchange
            </p>
            <p className="text-xs text-gray-500 whitespace-nowrap">
              completly free
            </p>
          </div>
          <div className="min-w-[50%] flex flex-col justify-between items-center gap-y-3 p-5 bg-[#f5f5f5] rounded-sm">
            <i className="bi-globe-americas"></i>
            <p className="text-sm sm:text-base text-gray-900 font-bold whitespace-nowrap">
              technical support
            </p>
            <p className="text-xs text-gray-500 whitespace-nowrap">
              service support 24/7
            </p>
          </div>
          <div className="min-w-[50%] flex flex-col justify-between items-center gap-y-3 p-5 bg-[#f5f5f5] rounded-sm">
            <i className="bi-gift"></i>
            <p className="text-sm sm:text-base text-gray-900 font-bold whitespace-nowrap">
              daily gift vouchers
            </p>
            <p className="text-xs text-gray-500 whitespace-nowrap">
              shopping now is more fun
            </p>
          </div>
        </section>
        <section className="w-full mb-20">
          <h1 className="w-full text-base sm:text-2xl text-gray-900 grid place-items-center mb-6">
            Our Products
          </h1>
          <ProductCard data={data}></ProductCard>
        </section>
        <h1 className="w-full text-3xl text-gray-900 grid place-items-center mb-2">
          Popular Products
        </h1>
        <BigSlider data={data}></BigSlider>
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
    </body>
  );
}
