import React from 'react';
import EntriesItem from './list_item';
import Paginate from './paginate';
import { WpPostsState } from '../../reducers/wp_posts';

const EntriesList: React.FC<WpPostsState> = ({ data, headers }) => {
  return (
    <React.Fragment>
      <div className="entryList">
        {data &&
          data.map((post: any, index: number) => {
            return <EntriesItem key={index} {...post} />;
          })}
      </div>
      <Paginate totalPage={headers['x-wp-totalpages']} pathname="entry" />
    </React.Fragment>
  );
};

export default EntriesList;
