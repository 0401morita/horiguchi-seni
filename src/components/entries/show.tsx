import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { EntryActionsTypes } from '../../containers/entries/show';
import { State } from '../../reducers';
import '../../styles/twentytwenty.scss';

interface EntriesListProps {}

interface WpPostProps {
  id: number;
  date: string;
  slug: string;
  status: string;
  title: {
    rendered: string;
  };
  _embedded: any;
}

const Entry: React.FC<State & EntriesListProps & EntryActionsTypes> = ({
  wpPost,
  getWpPostBySlug
}) => {
  const router = useRouter();
  const { slug } = router.query;
  useEffect(() => {
    if (typeof slug !== 'string') return;
    getWpPostBySlug(slug);
  }, []);

  if (wpPost.data) {
    const { title, content } = wpPost.data;
    return (
      <React.Fragment>
        <div className="contentHeader">
          <h3 className="contentHeader__title">
            <span className="en">Service</span>
            <span className="ja">{title.rendered}</span>
          </h3>
        </div>
        <div
          className="entry-content"
          dangerouslySetInnerHTML={{ __html: content.rendered }}
        />
      </React.Fragment>
    );
  }

  return <div className="error">404</div>;
};

export default Entry;
