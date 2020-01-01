import React, { useState, useRef, useEffect } from 'react';
import { NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';

import Link from 'next/link';
import { connect } from 'react-redux';
import { ArrowRightIcon } from '../../src/components/icons';
import { State } from '../../src/reducers';
import SailingScrollDown from '../../src/containers/sailingScrollDown';
import '../../src/styles/home.scss';
//import Entry from '../../src/containers/entries/show';
import fetch from 'isomorphic-unfetch';
import moment from 'moment/moment';
import '../../src/styles/twentytwenty.scss';
interface ServiceListProps {
  data?: any;
}

const EntryPage: NextPage<any> = ({ title, content, date, category }) => {
  const formatDate = moment(date).format('DD.MM.YYYY');

  return (
    <React.Fragment>
      <section className="hero">
        <div
          className="hero-image"
          style={{
            backgroundImage: `url(http://horiguchi-seni.com/static/images/service/winding.jpg)`
          }}
        ></div>
      </section>

      <main className="mainContainer">
        <SailingScrollDown text="News" />

        <div className="content mainContainer__content">
          <div className="contentHeader">
            <div className="contentHeader__meta">
              <span className="categoryName" data-slug={category.slug}>
                {category.name}
              </span>
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
