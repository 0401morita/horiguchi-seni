import React from 'react';

interface RecentPostItemProps {
  title: string;
  created: string;
  category: string;
  link: string;
}

const RecentPostItem: React.FC<RecentPostItemProps> = ({
  title,
  created,
  category,
  link = '/news'
}) => {
  return (
    <li className="recent-entry-item">
      <a href={link} className="recent-entry-link">
        <p className="recent-entry-meta">
          {created}・{category}
        </p>
        <div className="recent-entry-body">
          <span className="title">{title}</span>
          <span className="arrow"></span>
        </div>
      </a>
    </li>
  );
};

export default RecentPostItem;
