import React from 'react';
import { NextPage, NextPageContext } from 'next';
import Link from 'next/link';
import { ArrowRightIcon } from '../../src/components/icons';
import SailingScrollDown from '../../src/containers/sailingScrollDown';
import fetch from 'isomorphic-unfetch';
import moment from 'moment/moment';
import '../../src/styles/entry.scss';
import NextPrevPost from '../../src/components/entries/next_prev';
import MetaCategories from '../../src/components/entries/meta_categories';
interface ServiceListProps {
  data?: any;
}

const EntryPage: NextPage<any> = props => {
  const {
    title,
    content,
    date,
    post_categories,
    _embedded,
    prev,
    next
  } = props;
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
    <React.Fragment>
      <section className="hero">
        <div
          className="hero-image"
          style={{
            backgroundImage: `url(${eyecatch})`
          }}
        ></div>
      </section>

      <main className="mainContainer">
        <SailingScrollDown text="News" />

        <div className="content mainContainer__content">
          <div className="contentHeader">
            <div className="contentHeader__meta">
              <MetaCategories categories={post_categories} />

              <span className="date">{formatDate}</span>
            </div>
            <h3 className="contentHeader__title">
              <span className="ja">{title.rendered}</span>
            </h3>
          </div>

          <div
            className="entry-content"
            dangerouslySetInnerHTML={{ __html: content.rendered }}
          />

          <div className="contentFooter">
            <Link href="/contact">
              <a className="btn btn-black contentFooter__button">
                お問い合わせ
                <ArrowRightIcon />
              </a>
            </Link>
          </div>
        </div>
      </main>

      <div className="subContent">
        <NextPrevPost next={next} prev={prev} />
      </div>
    </React.Fragment>
  );
};

EntryPage.getInitialProps = async ({ query }: NextPageContext) => {
  const { slug } = query;
  if (typeof slug !== 'string') return;
  const url = encodeURI(
    `https://horiguchi-seni.sauce.jp/wp-json/wp/v2/posts/?_embed&slug=${slug}`
  );

  const res = await fetch(url);
  const json = await res.json();
  console.log(json);
  return json[0];
};

export default EntryPage;
