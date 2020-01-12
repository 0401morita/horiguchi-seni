import React from 'react';
import Link from 'next/link';
import moment from 'moment/moment';
import MetaCategories from './meta_categories';

interface NextPrevPostsProps {
  next?: NextPrevPostProps;
  prev?: NextPrevPostProps;
}

interface NextPrevPostProps {
  post_name: string;
  post_date: string;
  post_title: string;
  featured_image_src: string;
  post_categories: { [key: string]: string }[];
}

const NextPrevPost: React.FC<NextPrevPostsProps> = ({ next, prev }) => {
  return (
    <div className="next-prev-container">
      {[next, prev].map((item, index) => {
        if (!item) {
          return null;
        }

        const {
          post_name,
          post_date,
          post_title,
          featured_image_src,
          post_categories
        } = item;
        const formatDate = moment(post_date).format('DD.MM.YYYY');
        let eyecatch = featured_image_src
          ? featured_image_src
          : '/static/images/service/winding.jpg';
        return (
          <div className="next-prev" key={index}>
            <Link href={`/entry/${post_name}`}>
              <a className="next-prev__link">
                <div className="next-prev__figure">
                  <img src={eyecatch} className="next-prev__image" />
                </div>
                <h4 className="next-prev__title">{post_title}</h4>
                <div className="next-prev__meta">
                  <MetaCategories categories={post_categories} />
                  <span className="date">{formatDate}</span>
                </div>
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default NextPrevPost;
