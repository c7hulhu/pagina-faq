import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export interface IFaq {
  id: number;
  title: string;
  description: string;
}
export interface FaqsProps {
  faqs: IFaq[];
}
export function Home({ faqs }: FaqsProps) {
  const [question, setQuestion] = useState(0);

  return (
    <div className="pt-10">
      <div className="container pt-16 mx-auto bg-gray-100">
        <div className="pb-3 text-center md:pb-10 xl:pb-20">
          <h1 className="px-2 text-2xl font-extrabold text-gray-800 xl:px-0 xl:text-5xl md:text-3xl">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="w-10/12 mx-auto">
          <ul>
            {faqs.map((item, index) => {
              return (
                <li
                  key={index}
                  className="py-6 border-b border-gray-200 border-solid"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="w-10/12 font-sans text-base text-purple-800 md:text-xl xl:text-2xl">
                      {item.title}
                    </h3>
                    <div
                      className="cursor-pointer"
                      onClick={() =>
                        question === index
                          ? setQuestion(null)
                          : setQuestion(index)
                      }
                    >
                      {question === index ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={36}
                          height={36}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#A0AEC0"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-label="Close"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 15l7-7 7 7"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={36}
                          height={36}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#A0AEC0"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-label="Open"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  {question === index && (
                    <p className="pt-2 text-sm text-gray-800 bg-gray-100 rounded-b-lg md:pt-3 lg:pt-5 md:text-base xl:text-lg">
                      {item.description}.{" "}
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<FaqsProps> = async () => {
  const res = await fetch(`http://localhost:3001/faqs`);
  const faqs = await res.json();

  return {
    props: {
      faqs,
    },
  };
};

export default Home;
