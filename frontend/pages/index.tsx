import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-gray-100">
      <main className="flex-grow">
        <h1 className="text-5xl font-bold">Navbar</h1>
        <h1 className="text-5xl font-bold">Header</h1>
        <h1 className="text-5xl font-bold">Questions</h1>
        <h1 className="text-5xl font-bold">Footer</h1>
      </main>
    </div>
  );
};

export default Home;
