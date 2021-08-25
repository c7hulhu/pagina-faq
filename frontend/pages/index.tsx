import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gray-100">
      <main>
        <h1 className="text-3xl font-bold lg:text-9xl md:text-7xl sm:text-5xl mb-14">
          CONTENT
        </h1>
      </main>
    </div>
  );
};

export default Home;
