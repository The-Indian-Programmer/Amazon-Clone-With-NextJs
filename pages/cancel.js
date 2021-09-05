import React from "react";
import Head from "next/head";
import Header from "./components/Header/Header";
import { useRouter } from "next/router";
const Cancel = () => {
  const router = useRouter();
  return (
    <div style={{ marginTop: "6rem" }}>
      <Head>
        <title>Order Confirmed</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <main className="container">
        <Header />
        <div className="container h-60 w-2/3 block m-auto bg-white pt-5">
          <h2 className="text-center text-2xl h-20 font-bold">
            <span className="text-xl mx-5 text-white rounded-lg h-20 p-3 bg-red-500">
              &#10006;
            </span>
            OOPS! Order Was Canceled
          </h2>
          <p className="text-center">
            Your order was canceled due to some reasons.
          </p>
          <button
            onClick={() => router.push("/")}
            className="bg-yellow-400 text-black font-bold w-96 border border-black border-2 m-auto my-5 py-3 block"
          >
            Back To Home
          </button>
        </div>
      </main>
    </div>
  );
};

export default Cancel;