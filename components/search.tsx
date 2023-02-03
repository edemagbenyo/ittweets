"use client";
import React, { SyntheticEvent, useState } from "react";
import classnames from "classnames";

type Props = {
  generatePost(topic: string, category: string, mood: string, numberOfTweets: number): void;
  loading: boolean;
};

function Search({ generatePost, loading }: Props) {
  const [topic, setTopic] = useState("");
  const [mood, setMood] = useState("professionalism");
  const [category, setCategory] = useState("technology");
  const [numberOfTweets, setNumberOfTweets] = useState(2);
  const formSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    generatePost(topic, category, mood, numberOfTweets);
    setTopic("");
    setMood("funny");
    setCategory("technology");
  };
  return (
    <section className="w-1/2 px-12">
      <h1 className="text-2xl font-bold text-center py-4">Generate your next tweet</h1>
      <form className="space-y-6" onSubmit={formSubmit}>
        <div>
          <label htmlFor="topic" className="block text-sm  text-gray-900 font-bold">
            Topics
          </label>
          <div className="mt-1">
            <input id="topic" placeholder="eg. hair" value={topic} onChange={(e) => setTopic(e.target.value)} name="topic" type="text" autoComplete="email" required className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
          </div>
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-bold text-gray-900">
            Category
          </label>
          <select id="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" defaultValue="Canada">
            <option value="automotive">Automotive</option>
            <option value="beauty">Beauty</option>
            <option value="book">Book</option>
            <option value="business">Business</option>
            <option value="education">Education</option>
            <option value="finance">Finance</option>
            <option value="movies">Movies</option>
            <option value="music">Music</option>
            <option value="science">Science</option>
            <option value="Sports">Sports</option>
            <option value="fashion">Style & Fashion</option>
            <option value="technology">Technology</option>
            <option value="travel">Travel</option>
          </select>
        </div>
        <div>
          <label htmlFor="mood" className="block text-sm font-bold text-gray-900">
            Mood
          </label>
          <select id="mood" onChange={(e) => setMood(e.target.value)} value={mood} name="mood" className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" defaultValue="Canada">
            <option value={"professionalism"}>👔 Professional</option>
            <option value={"fun"}>😂 Funny </option>
            <option value={"idea generating"}>💡 Idea</option>
            <option value={"casual"}>😊 Casual</option>
          </select>
        </div>
        <div>
          <label htmlFor="default-range" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
            Number of tweets
          </label>
          <div className="flex flex-row items-center justify-between">
            <input id="default-range" type="range" onChange={(e) => setNumberOfTweets(1)} value={numberOfTweets} min={1} max={5} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 px-1" />
            <span className="w-1/5 text-right">{numberOfTweets}</span>
          </div>
          <span className="text-gray-600 italic font-semibold text-sm">This is set to a default of 1 and disabled to limit the number of token used per request</span>
        </div>

        <div>
          <button disabled={loading} type="submit" className={classnames("flex w-full justify-center rounded-md border border-transparent  py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2", loading ? "bg-indigo-600 opacity-50" : "bg-indigo-600")}>
            {loading ? "Loading..." : "Generate"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default Search;
