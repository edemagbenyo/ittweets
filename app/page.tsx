import Header from "@/components/header";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="flex w-screen justify-center">
      <div className="flex flex-row sm:w-[1024px]">
        <Header />
        <hr />
      </div>
    </main>
  );
}
