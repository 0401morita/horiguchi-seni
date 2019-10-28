import React from 'react';

interface ServiceItemProps {
  index: string;
  title: string;
  image_src: string;
  summary: string;
  label_ja: string;
  label_en: string;
  link: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  index = '01',
  title,
  summary,
  image_src,
  label_ja,
  label_en,
  link = '/service/sewing'
}) => {
  return (
    <div className="service-item">
      <figure className="service-image">
        <img src={image_src} />
      </figure>
      <a href={link} className="service-summary">
        <span className="index">
          <span className="number">{index}</span>
        </span>
        <h4 className="summary-title">{title}</h4>
        <p className="summary-description">{summary}</p>

        <div className="read-more">
          <span className="en">{label_en}</span>
          <span className="ja">{label_ja}</span>
        </div>
      </a>
    </div>
  );
};

export default ServiceItem;
