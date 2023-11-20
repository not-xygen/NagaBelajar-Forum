import React, { useEffect, useState } from 'react';



type Thread = {
  image?: string;
};


const Reply = ({ thread }: { thread: Thread }) => {
  return (
    <div>
      <div className=''>
        {/* <div className="vertical-line absolute border ml-14 h-full border-black"></div> */}
        
        </div>

      <div className=" bg-zinc-100 max-w-none p-4 my-2 rounded-2xl flex container border-black border-dashed border-2 ml-32">
        <section>
        <div>
        {/* <div className="thread-cell__left mr-4">
            {thread.image && <img src={thread.image} alt="Thread_img" className="thread-cell__image" />}
          </div> */}
          <div>
              ini gambar
          </div>
        </div>
        </section>

        <section className='container fo'>
          <p className='text-black font-semibold'>Tulis jawabanmu disini...</p>
        </section>
        
      </div>
    </div>
  );
};

export default Reply;