import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

function Header({}: Props) {
  return (
    <div className="w-full flex justify-between border-b py-5 px-2">
      <span className="text-xl text-black">
        <Link href="/">itTweets</Link>
      </span>
      <span className="text-lg  border rounded-3xl p-2 shadow-sm hover:bg-gray-50">
        <Link target="_blank" className="px-2 flex flex-row" href={"https://github.com/edemagbenyo/ittweets"}>
          Star on <Image width={30} height={30} alt="github logo" src={"/github.svg"} />
        </Link>
      </span>
    </div>
  );
}

export default Header;
