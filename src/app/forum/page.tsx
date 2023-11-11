"use client";
import { Tomboldiskusi } from "@/components/ui/tomboldiskusi"
import React, { useState, useEffect} from 'react'
export default function Forum() {
  return <div className="justify-start flex py-6">
    <section className="pl-60">
      <div className="container-md max-w-none text-center">
        <Tomboldiskusi text={"Buat Diskusi"}/>
      </div>
      <div className="container pt-4">
        <nav className="mb-5">
        <a className="flex items-center px-4 py-2 text-black hover:text-white hover:bg-black  rounded-md relative group" >
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 h-1/2 bg-black w-2 group-hover:bg-white transition"></div>
          <span className="mx-4 font-medium">Semua Diskusi</span>
            </a>
        </nav>

        <nav className="mb-5">
        <a className="flex items-center px-4 py-2 text-black hover:text-white hover:bg-black  rounded-md relative group" >
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 h-1/2 bg-black w-2 group-hover:bg-white transition"></div>
          <span className="mx-4 font-medium">Pertanyaan Saya</span>
            </a>
        </nav>

        <nav className="mb-5">
        <a className="flex items-center px-4 py-2 text-black hover:text-white hover:bg-black  rounded-md relative group" >
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 h-1/2 bg-black w-2 group-hover:bg-white transition"></div>
          <span className="mx-4 font-medium">Partisipasi Saya</span>
            </a>
        </nav>

        <nav className="mb-5">
        <a className="flex items-center px-4 py-2 text-black hover:text-white hover:bg-black  rounded-md relative group" >
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 h-1/2 bg-black w-2 group-hover:bg-white transition"></div>
          <span className="mx-4 font-medium">Jawaban Terbaik Saya</span>
            </a>
        </nav>

        <nav className="mb-5">
        <a className="flex items-center px-4 py-2 text-black hover:text-white hover:bg-black  rounded-md relative group" >
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 h-1/2 bg-black w-2 group-hover:bg-white transition"></div>
          <span className="mx-4 font-medium">Populer Minggu Ini</span>
            </a>
        </nav>

        <nav className="mb-5">
        <a className="flex items-center px-4 py-2 text-black hover:text-white hover:bg-black  rounded-md relative group" >
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 h-1/2 bg-black w-2 group-hover:bg-white transition"></div>
          <span className="mx-4 font-medium">Populer Sepanjang Masa</span>
            </a>
        </nav>

        <nav className="mb-5">
        <a className="flex items-center px-4 py-2 text-black hover:text-white hover:bg-black  rounded-md relative group" >
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 h-1/2 bg-black w-2 group-hover:bg-white transition"></div>
          <span className="mx-4 font-medium">Terselesaikan</span>
            </a>
        </nav>

        <nav className="mb-5">
        <a className="flex items-center px-4 py-2 text-black  hover:text-white hover:bg-black  rounded-md relative group" >
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 h-1/2 bg-black w-2 group-hover:bg-white transition"></div>
          <span className="mx-4 font-medium">Belum Terselesaikan</span>
            </a>
        </nav>

        <nav className="mb-5">
        <a className="flex items-center px-4 py-2 text-black  hover:text-white hover:bg-black  rounded-md relative group" >
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 h-1/2 bg-black w-2 group-hover:bg-white transition"></div>
          <span className="mx-4 font-medium">Pertanyaan Terlama</span>
            </a>
        </nav>

        <nav className="mb-5">
        <a className="flex items-center px-4 py-2 text-black  hover:text-white hover:bg-black  rounded-md relative group" >
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 h-1/2 bg-black w-2 group-hover:bg-white transition"></div>
          <span className="mx-4 font-medium">Belum Ada Jawaban</span>
            </a>
        </nav>

        <nav className="mb-5">
        <a className="flex items-center px-4 py-2 text-black hover:text-white hover:bg-black  rounded-md relative group" >
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 h-1/2 bg-black w-2 group-hover:bg-white transition"></div>
          <span className="mx-4 font-medium">Papan Peringkat</span>
            </a>
        </nav>
      </div>
    </section>


    <section className="mx-40 flex">
      <div>       
        <form>   
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"> 
                  </div>
                <input type="search" id="default-search" className="block w-full p-4 pr-28 text-sm  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-zinc-500 focus:border-zinc-500 " placeholder="Search..." required/>
                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-black hover:bg-zinc-500 focus:ring-4 focus:outline-none focus:ring-zinc-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
            </div>
        </form>
      </div>

      <div className="px-32">
        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-black hover:bg-zinc-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center " type="button">Dropdown button <svg name="w-1 h-1 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg>
        </button>

          <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ">
              <ul className="py-2 text-sm text-gray-700 " aria-labelledby="dropdownDefaultButton">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Dashboard</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Settings</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Earnings</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Sign out</a>
                </li>
              </ul>
          </div>

      </div>
    </section>
  </div>
}