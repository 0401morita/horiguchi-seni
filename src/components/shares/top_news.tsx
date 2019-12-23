import React from 'react';
import Link from 'next/link';

interface TopNewsProps {}

const TopNews: React.FC<TopNewsProps> = () => {
  return (
    <div className="topEntry">
      <Link>
        <a href="/" className="topEntry__link"></a>
      </Link>
    </div>
  );
};

export default TopNews;
