import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="flex flex-row py-2 justify-between border-t w-full bottom-0 absolute px-4">
      <section></section>
      <section className="flex">
        <span>
        <Link target="_blank" className="px-2 flex flex-row" href={"https://twitter.com/edemAgbenyo"}>
          <Image width={30} height={30} alt="github logo" src={"/twitter.svg"} />
          </Link>

        </span>
        <span>
        <Link target="_blank" className="px-2 flex flex-row" href={"https://github.com/edemagbenyo/ittweets"}>
          <Image width={30} height={30} alt="github logo" src={"/github.svg"} />
          </Link>
        </span>
      </section>
    </div>
  );
};

export default Footer;
