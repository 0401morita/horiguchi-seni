import React from 'react';
import Link from 'next/link';
import moment from 'moment/moment';

interface MetaCategoriesProps {
  categories?: { [key: string]: string }[];
}

const MetaCategories: React.FC<MetaCategoriesProps> = ({ categories }) => {
  if (!categories || !categories.length) {
    return null;
  }
  return (
    <React.Fragment>
      {categories.map((category, index) => {
        if (!category) {
          return null;
        }

        return (
          <span className="category-name" data-slug={category.slug} key={index}>
            {category.name}
          </span>
        );
      })}
    </React.Fragment>
  );
};

export default MetaCategories;
