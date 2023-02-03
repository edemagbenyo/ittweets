"use client";
import Header from "@/components/header";
import Search from "@/components/search";
import { splitTextOnNumber } from "@/utils/string";
import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";
import { ClipboardIcon } from "@heroicons/react/20/solid";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string[]>([]);

  const generate = async (topic: string, category: string, mood: string, numberOfTweets: number) => {
    setLoading(true);
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        topic,
        category,
        mood,
        numberOfTweets,
      }),
    });

    const data = await response.json();
    if (response.status !== 200) {
      throw data.error || new Error(`Request failed with status ${response.status}`);
    }

    setResult(splitTextOnNumber(data.result));
    setLoading(false);
  };
  return (
    <main className="flex w-screen justify-center">
      <div className="flex flex-col w-full px-5 sm:w-[1024px] ">
        <Header />
        <br />

        <div className="flex flex-col sm:flex-row ">
          <Search generatePost={generate} loading={loading} />
          <section className="w-full sm:w-1/2">
            <h2 className="text-2xl font-bold py-4 mb-10 text-center">Tweets</h2>
            {result.map((post, key) => (
              <article key={key} className="flex justify-between items-center my-3">
                <span className="text-lg">
                  {key + 1}.{post}
                </span>
                <ClipboardIcon title="Copy" className="w-8 h-8 px-2 py-1 cursor-pointer" />
              </article>
            ))}
            {result.length === 0 && <span className="text-xl block w-full text-center italic">No tweet generated yet.</span>}
          </section>
        </div>
      </div>
    </main>
  );
}
