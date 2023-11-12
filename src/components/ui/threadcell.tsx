import React from 'react';

type Thread = {
    image?: string;
    title: string;
    commentCount: number;
    genre: string;
    preview: string;
    user: string;
    date: string;
};

const ThreadCell = ({ thread }: { thread: Thread }) => {
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
              <p className='line-clamp-1 font-extrabold mr-7 justify-self-start'>{thread.title} </p>
            </div>
  
            <div className="thread-cell__info container flex justify-end w-auto">
              <span className="thread-cell__comment-count font-bold whitespace-nowrap">{thread.commentCount} comments</span>
              <span className="thread-cell__genre ml-2 rounded-full border-blue-500 p-0 border-2 px-3">{thread.genre}</span>
            </div>

          </div>
        </div>
        <p className="thread-cell__preview line-clamp-2 mt-2">{thread.preview}</p>
        <div className="thread-cell__details mt-2">
            <span className="thread-cell__user text-blue-400 mr-4">{thread.user}</span>
            <span className="thread-cell__date">{thread.date}</span>
          </div>
      </section>
      
    </div>
  );
};

export default ThreadCell;




