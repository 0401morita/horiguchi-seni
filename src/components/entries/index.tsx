import React, { useEffect } from 'react';
import EntriesList from './list';
import { State } from '../../reducers';
import Router from 'next/router';

interface EntriesProps {
  getWpPosts: any;
}

const Entries: React.FC<State & EntriesProps> = ({ wpPosts, getWpPosts }) => {
  useEffect(() => {
    getWpPosts();
  }, [Router.router ? Router.router.query : null]);

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

      <div className="entriesPagination">
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Entries;
