import React from 'react';
import Link from 'next/link';
import moment from 'moment/moment';
import MetaCategories from '../entries/meta_categories';

interface RecentPostItemProps {
  title: string;
  created: string;
  category: string;
  link: string;
  post_categories?: { [key: string]: string }[];
}

const RecentPostItem: React.FC<RecentPostItemProps> = (props: any) => {
  const { title, slug, date, post_categories } = props;
  const formatDate = moment(date).format('DD.MM.YYYY');

  return (
    <li className="recent-entry-item">
      <Link href={`/entry/${slug}`}>
        <a className="recent-entry-link">
          <div className="entryItemMeta">
            <MetaCategories categories={post_categories} />
            <span className="entryItemMeta__date">{formatDate}</span>
          </div>
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
