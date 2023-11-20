import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';


type Thread = {
  image?: string;
  title: string;
  commentCount: number;
  genre: string;
  preview: string;
  user: string;
  date: string;
};

const Replyreply = ({ thread }: { thread: Thread }) => {
    const [isClicked, setIsClicked] = useState(false);
    const [upvotes, setUpvotes] = useState(0);
   
    useEffect(() => {
      fetch('https://api.example.com/upvotes')
        .then(response => response.json())
        .then(data => setUpvotes(data.up_votes))
        .catch(error => console.error('Error:', error));
    }, []);

    
  return (
    <div className='flex'>
        <div className="relative ">
            <div className="vertical-line absolute top-0 bottom-0 border ml-14 border-black"></div>
            
            </div>
            
        
        <div className=" bg-zinc-100 max-w-100% p-4 my-2 rounded-2xl flex container ml-32">
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
            
            <span className="thread-cell__user text-blue-400 mr-4">{thread.user}</span>
                </div>

            </div>
                <div className='max-w-100% my-5'>
                    <p>this is a reply</p>
                    </div>
            </div>
            <div className='flex'>
                <button className='flex' onClick={() => setIsClicked(!isClicked)}>
                        <div><FaHeart className="max-w-none max-h-none" color={isClicked ? 'blue' : 'gray'} /></div>
                        <div className='ml-2'>{upvotes}</div>
                    </button>
                    <div>
                        <button className='bg-zinc-100 max-w-100% p-1 ml-3 rounded-2xl flex container border-black border-dashed border-2 text-center hover:border-zinc-500'>Jawab</button>
                    </div>
            </div>
        </section>

        </div>
    </div>
  );
}

export default Replyreply;