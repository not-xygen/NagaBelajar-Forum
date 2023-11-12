import React from 'react';
import ThreadCell from '@/components/ui/threadcell';

const Forum = () => {
  const threadData = {
    image: '/src/app/assets/bincangberbincang.png',
    title: 'Thread_Title',
    commentCount: 10,
    genre: 'Genre',
    preview: 'Thread preview text...',
    user: 'User Name',
    date: '2023-11-12',
  };

  return (
    <div>
      {/* ... */}
      <ThreadCell thread={threadData} />
      {/* ... */}
    </div>
  );
};

export default Forum;