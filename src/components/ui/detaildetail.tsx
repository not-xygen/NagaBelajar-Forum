import React, { useEffect, useState } from 'react';



type Thread = {
  image?: string;
  title: string;
  commentCount: number;
  genre: string;
  preview: string;
  user: string;
  date: string;
};

const Detaildetail = ({ thread }: { thread: Thread }) => {
  return (
    <div className=" bg-zinc-100 max-w-100% p-4 my-2 rounded-2xl flex container">
      <section>
      <div>
      <div className="thread-cell__left mr-4">
          {thread.image && <img src={thread.image} alt="Thread_img" className="thread-cell__image" />}
        </div>
      </div>
      </section>

      <section className='container'>
        <div className='justify-end'>
          <div className='flex justify-between'>

          <div className='justify-start flex-grow w-auto'>
          
          <span className="thread-cell__user text-blue-400 mr-4">{thread.user.name}</span>
            </div>

          </div>
            <div className='bg-white max-w-100% p-4 my-2 rounded-2xl'>
            <p className="thread-cell__preview line-clamp-2 mt-2">{thread.message_preview}</p>
                </div>
        </div>
        <p className="thread-cell__preview line-clamp-2 mt-2">{thread.preview}</p>
      </section>
      
    </div>
  );
};

export default Detaildetail;