import React from 'react';
import EntriesItem from './list_item';

interface EntriesListProps {
  posts: [];
}

const EntriesList: React.FC<EntriesListProps> = ({ posts }) => {
  return (
    <div className="entryList">
      {posts &&
        posts.map((post: any, index: number) => {
          return <EntriesItem key={index} {...post} />;
        })}
    </div>
  );
};

export default EntriesList;
