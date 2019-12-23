import React from 'react';
import Link from 'next/link';
import moment from 'moment/moment';
interface EntriesItemProps {
  post: WpPostProps;
}

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

const EntriesItem: React.FC<WpPostProps> = ({
  id,
  date,
  title,
  slug,
  _embedded
}) => {
  const formatDate = moment(date).format('DD.MM.YYYY');
  return (
    <div className="entryList__item">
      <Link href={`/entry/${slug}`}>
        <a className="entryItem">
          <figure className="entryItem__figure">
            <div className="entryItemFigure">
              <img
                src="http://horiguchi-seni.com/static/images/service/winding.jpg"
                className="entryItemFigure__image"
                alt="image"
              />
            </div>
          </figure>
          <div className="entryItem__summary">
            <h5 className="entryItemSummary__title">{title.rendered}</h5>
            <span className="entryItemSummary__meta">
              <div className="entryItemMeta">
                <span className="entryItemMeta__cat">News</span>
                <span className="entryItemMeta__date">{formatDate}</span>
              </div>
            </span>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default EntriesItem;
