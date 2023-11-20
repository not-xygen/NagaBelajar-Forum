"use client";
import { Tomboldiskusi } from "@/components/ui/tomboldiskusi";
import React, { useState, useEffect} from 'react';
import ThreadCell from '@/components/ui/threadcell';
import { Tombolsidebar } from "@/components/ui/tombolsidebar";
import { Sidebar } from "@/components/sidebar";

export default function Threaddetil() {
  const [selectedOption, setSelectedOption] = useState("");
  const [currentSection, setCurrentSection] = useState("threadList"); // Initial section is the list of threads



  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const threadData = {
    image: '#',
    title: 'I will never be a memory',
    commentCount: 10,
    genre: 'OOT.js',
    preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    user: 'Sephiroth',
    date: '2023-11-12',
  };

  return <div className="justify-start flex py-6">
    <section className="pl-40">
      <Sidebar/>
    </section>

{/* this is where the fun begin */}
{currentSection === "threadList" && (
    <section className="ml-40 mr-80">
      <div className="justify-between flex">       
        
        <form className="flex"> 
            <div>  
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                    <input type="search" id="default-search" className="block w-full p-4 pr-28 text-sm  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-zinc-500 focus:border-zinc-500 " placeholder="Search..." required/>
                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-black hover:bg-zinc-500 focus:ring-4 focus:outline-none focus:ring-zinc-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
              </div>   
            </div>
        </form>

        <form>
            <div className="flex max-h-full">
            <select className="border-black border-2 rounded-lg p-3" value={selectedOption} onChange={handleChange}>
              <option value="">Semua diskusi</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>

            <select className="border-black border-2 rounded-lg ml-4 p-3" value={selectedOption} onChange={handleChange}>
              <option value="">Semua kategori</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            </div>
        </form>
      </div>
      <div>
      <ThreadCell thread={threadData} />
      </div>
      
      

    </section>
)}

    </div>

  // this is where the fun ends, watch out for the div and section above
}