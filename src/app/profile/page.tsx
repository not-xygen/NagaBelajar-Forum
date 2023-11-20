"use client";
import Detaildetail from "@/components/ui/detaildetail";
import Reply from "@/components/ui/reply";
import Replyreply from "@/components/ui/replyreply";
import React, { useState, useEffect } from 'react';
import { Sidebar } from "@/components/sidebar";
export default function Profile() {
  const [threads, setThreads] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  const threadData = {
    image: '#',
    title: 'I will never be a memory',
    commentCount: 10,
    genre: 'OOT.js',
    preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    user: 'Sephiroth',
    date: '2023-11-12',
  };
  
  useEffect(() => {
    fetch('http://api-forum.panti.my.id/api/v1/threads')
      .then(response => response.json())
      .then(data => setThreads(data.data));
  }, []);

  return (
    <div className="flex">
      <section>
        <Sidebar/>
      </section>
      <section className="container ml-40 mr-80">
      <div>
        <Detaildetail thread={threadData}/></div>
      <div>
        <Reply thread={threadData}/>
        
      </div>
      <div className="ml-32">
      <Replyreply thread={threadData}/>
      </div>

        </section>
    </div>
  );
}

