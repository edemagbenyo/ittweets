"use client";
import Header from "@/components/header";
import Search from "@/components/search";
import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const generate = async (topic: string, category: string, mood: string) => {
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
      }),
    });

    const data = await response.json();
    if (response.status !== 200) {
      throw data.error || new Error(`Request failed with status ${response.status}`);
    }
    console.log("response from api", data, response);
    setResult(data.result);
  };
  return (
    <main className="flex w-screen justify-center">
      <div className="flex flex-col sm:w-[1024px]">
        <Header />
        <br />

        <div className="flex flex-row">
          <Search generatePost={generate} />
          <section className="w-1/2">
            <h2 className="text-2xl font-bold">Tweets</h2>
            <article>{result}</article>
          </section>
        </div>
      </div>
    </main>
  );
}
