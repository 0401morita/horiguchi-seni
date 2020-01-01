import React, { useState, useEffect } from 'react';
import RecentPostItem from './item';
import { RecentPostsState } from '../../reducers/recentPosts';
import { RecentEntriesActions } from '../../containers/recentEntries';
import WpError from '../wp/error';

const RecentEntries: React.FC<
  RecentPostsState & RecentEntriesActions
> = props => {
  const { getWpRecentPosts, posts, isLoading, isError, error } = props;
  useEffect(() => {
    if (!posts.length) {
      getWpRecentPosts(5);
    }
  }, []);

  let loadingComponent, errorComponent;
  if (isLoading) {
    loadingComponent = <div className="loading"></div>;
  }

  if (isError) {
    errorComponent = <WpError message={error.message} />;
  }

  return (
    <div className="recent-entries">
      {loadingComponent}
      {errorComponent}

      {posts && (
        <ul className="recent-entry-list">
          {posts.map((post: any, index: number) => {
            return <RecentPostItem {...post} key={index} />;
          })}
        </ul>
      )}
    </div>
  );
};

export default RecentEntries;
