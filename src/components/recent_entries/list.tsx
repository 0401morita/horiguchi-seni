import React, { useState } from 'react';
import RecentPostItem from './item';

const RecentEntries: React.FC<{}> = () => {
  const [posts] = useState([
    {
      title: '夏季休暇のお知らせ',
      created: '2019/10/21',
      category: 'News',
      link: '/news'
    },
    {
      title: '暑い夏を快適に過ごせる素材',
      created: '2019/10/19',
      category: 'Column',
      link: '/news'
    },
    {
      title: '企業におけるユニフォーム導入の価値',
      created: '2019/10/17',
      category: 'Column',
      link: '/news'
    },
    {
      title: 'キャドカム導入のお知らせ',
      created: '2019/10/10',
      category: 'News',
      link: '/news'
    }
  ]);

  return (
    <div className="recent-entries">
      <ul className="recent-entry-list">
        {posts.map((post, index) => {
          return <RecentPostItem {...post} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default RecentEntries;
