import React, { useEffect } from 'react';
import Link from 'next/link';
import EntriesList from './list';
import { State } from '../../reducers';
interface EntriesProps {
  getWpPosts: any;
}

const Entries: React.FC<State & EntriesProps> = ({ wpPosts, getWpPosts }) => {
  useEffect(() => {
    getWpPosts();
    console.log(wpPosts);
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

        return <EntriesList posts={wpPosts.data} />;
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
