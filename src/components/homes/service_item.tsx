import React from 'react';
import Link from 'next/link';

interface ServiceItemProps {
  index: number;
  title: string;
  image_src: string;
  summary: string;
  label_ja: string;
  label_en: string;
  link: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  index,
  title,
  summary,
  image_src,
  label_ja,
  label_en,
  link = '/service/sewing'
}) => {
  let str_index = '0' + index.toString();

  return (
    <div className="service-item">
      <figure className="service-image">
        <img src={image_src} />
      </figure>
      <Link href={link}>
        <a className="service-summary">
          <span className="index">
            <span className="number">{str_index}</span>
          </span>
          <h4 className="summary-title">{title}</h4>
          <p className="summary-description">{summary}</p>

          <div className="read-more">
            <span className="en">{label_en}</span>
            <span className="ja">{label_ja}</span>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ServiceItem;
