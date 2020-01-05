import React from 'react';
import Link from 'next/link';
import moment from 'moment/moment';
import MetaCategories from './meta_categories';
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
  post_categories?: { [key: string]: string }[];
  _embedded: any;
}

const EntriesItem: React.FC<WpPostProps> = ({
  id,
  date,
  title,
  slug,
  post_categories,
  _embedded
}) => {
  const formatDate = moment(date).format('DD.MM.YYYY');
  let eyecatch = '/static/images/service/winding.jpg';

  if (
    _embedded['wp:featuredmedia'] &&
    _embedded['wp:featuredmedia'].length &&
    _embedded['wp:featuredmedia'][0]['id']
  ) {
    const media = _embedded['wp:featuredmedia'][0]['media_details'];
    if (media.sizes.medium_large) {
      eyecatch = media.sizes.medium_large.source_url;
    } else {
      eyecatch = media.sizes.full.source_url;
    }
  }

  return (
    <div className="entryList__item">
      <Link href={`/entry/${slug}`}>
        <a className="entryItem">
          <figure className="entryItem__figure">
            <div className="entryItemFigure">
              <img
                src={eyecatch}
                className="entryItemFigure__image"
                alt="image"
              />
            </div>
          </figure>
          <div className="entryItem__summary">
            <h5 className="entryItemSummary__title">{title.rendered}</h5>
            <span className="entryItemSummary__meta">
              <div className="entryItemMeta">
                <MetaCategories categories={post_categories} />
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
