import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { AppState } from '../../reducers/app';
import clsx from 'clsx';
import Router from 'next/router';

interface ServiceItemProps {
  index: number;
  title: string;
  image_src: string;
  summary: string;
  label_ja: string;
  label_en: string;
  link: string;
}

const ServiceItem: React.FC<ServiceItemProps & AppState> = ({
  index,
  title,
  summary,
  image_src,
  label_ja,
  label_en,
  windows,
  link = '/service/sewing'
}) => {
  let str_index = '0' + index.toString();
  const { scrollTop, height } = windows;
  const serviceRef = useRef<HTMLDivElement>(null);
  const [showPoint, setShowPoint] = useState(0);
  const [animIn, setAnimIn] = useState(false);

  useEffect(() => {
    if (serviceRef.current) {
      const {
        top: clientTop,
        height: clientHeight
      } = serviceRef.current.getBoundingClientRect();
      const initScrollTop: number =
        Math.max(
          window.pageYOffset,
          document.documentElement.scrollTop,
          document.body.scrollTop
        ) || 0;

      setShowPoint(clientTop + initScrollTop + clientHeight / 2);
    }
  }, []);

  console.log(animIn, showPoint, scrollTop + height);
  if (!animIn && showPoint !== 0 && showPoint < scrollTop + height) {
    setAnimIn(true);
  }

  return (
    <div className={clsx('service-item', { in: animIn })} ref={serviceRef}>
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
