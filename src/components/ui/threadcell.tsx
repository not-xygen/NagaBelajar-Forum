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
            <img src={thread.user.photos} alt="Thread_img" className="thread-cell__image" />
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
              <span className="thread-cell__comment-count font-bold whitespace-nowrap">{thread.reply_count} comments</span>
              <span className="thread-cell__genre ml-2 rounded-full p-0 border-2 px-3" style={{ borderColor: "#ff00ff" }}>{thread.category.name}</span>
            </div>

          </div>
        </div>
        <p className="thread-cell__preview line-clamp-2 mt-2">{thread.message_preview}</p>
        <div className="thread-cell__details mt-2">
          <span className="thread-cell__user text-blue-400 mr-4">{thread.user.name}</span>
          <span className="thread-cell__date">{thread.date}</span>
        </div>
      </section>

    </div>
  );
};

export default ThreadCell;

// const ThreadCell = () => {
//   const [threads, setThreads] = useState<Thread[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://api-forum.panti.my.id/');
//         setThreads(response.data.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []); // The empty dependency array ensures that this effect runs only once when the component mounts
  
//   return (
//     <div>
//       <h1>Threads</h1>
//       <ul>
//         {threads && threads.map((thread) => (
//           <li key={thread.id}>
//             <p>Title: {thread.title}</p>
//             <p>Preview: {thread.message_preview}</p>
//             <p>User: {thread.user_id}</p>
//             {thread.image && <img src={thread.image} alt="Thread_img" />}
//             {/* Add more properties as needed */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
  




// }
