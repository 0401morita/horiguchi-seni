import React, { useEffect, useState } from 'react';
import EntriesList from './list';
import { State } from '../../reducers';
import Router from 'next/router';

interface EntriesProps {
  getWpPosts: any;
}

interface MountState {}
const Entries: React.FC<State & EntriesProps> = ({ wpPosts, getWpPosts }) => {
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      getWpPosts();
    };

    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <div className="entriesContainer">
      {(() => {
        if (wpPosts.isLoading) {
          return <div className="loading"></div>;
        }

        if (wpPosts.isError) {
          return (
            <div className="content__error">
              <p>ネットワークエラーが発生しました。</p>
              <p>時間をおいてからお試しください。</p>
            </div>
          );
        }

        return <EntriesList {...wpPosts} />;
      })()}
    </div>
  );
};

export default Entries;
