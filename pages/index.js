import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home() {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const showStats = () => {
    setIsLoading(true);
    router.push(`/${input}`);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Github Stats</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://github.com/anjalbinayak">Github Stats</a>
        </h1>

        <p className={styles.description}>
          Enter your <code className={styles.code}>Github Username</code>
        </p>

        <p className={styles.description}>
          Username{" "}
          <input
            className="border border-blue-600 focus:outline-none text-blue-500 focus:border-b-blue-700  p-1 m-3"
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button
            className="transition delay-50 text-blue-800 rounded-sm outline outline-offset-2 outline-blue-600 p-2 hover:text-white hover:bg-blue-500 "
            onClick={() => showStats()}
            disabled={input.length === 0 ? "disabled" : false}
          >
            {isLoading ? "Gathering Info.." : "Show Stats"}
          </button>
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
