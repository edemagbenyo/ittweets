import React from "react";

type Props = {};

function Header({}: Props) {
  return (
    <div className="w-full flex justify-between border-b py-5">
      <span className="text-xl">itTweets</span>
      <span className="text-lg">Donate</span>
    </div>
  );
}

export default Header;
