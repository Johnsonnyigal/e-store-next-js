import Image from "next/image";
import Link from "next/link";
import HomeProduct from "../components/HomeProduct";

const HomePage = () => {
  return (
    <main>
      <div className="grid md:grid-cols-2 gap-2 font-lato mt-5 items-center  ">
        <div>
          <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
            <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
            <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
              Be on
              <span className="text-5xl sm:text-2xl">TIME</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white ">
              The iPhone 15 is a game-changer, revolutionizing how we interact
              with technology. With its advanced features and seamless
              integration, its redefining reality and pushing the boundaries of
              possibility.
            </p>
            <div className="flex mt-8">
              <Link
                href="#"
                className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
              >
                Get started
              </Link>
              <Link
                href="#"
                className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md"
              >
                Read more
              </Link>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/images/hero.avif"
            alt=""
            height={500}
            width={1000}
            priority
          />
        </div>
      </div>
      <HomeProduct />
    </main>
  );
};

export default HomePage;
