import React from 'react';
import Link from 'next/link';
import moment from 'moment/moment';

interface RecentPostItemProps {
  title: string;
  created: string;
  category: string;
  link: string;
}

const RecentPostItem: React.FC<RecentPostItemProps> = (props: any) => {
  const { title, slug, date } = props;
  const formatDate = moment(date).format('DD.MM.YYYY');

  return (
    <li className="recent-entry-item">
      <Link href={`/entry/${slug}`}>
        <a className="recent-entry-link">
          <p className="recent-entry-meta">{formatDate}</p>
          <div className="recent-entry-body">
            <span className="title">{title.rendered}</span>
            <span className="arrow"></span>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default RecentPostItem;
