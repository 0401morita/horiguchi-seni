import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import ServiceItem from '../../src/components/homes/service_item';
import { ArrowRightIcon } from '../../src/components/icons';
import { State } from '../../src/reducers';
import SailingScrollDown from '../../src/containers/sailingScrollDown';
import EntriesList from '../../src/containers/entries';
import '../../src/styles/entries.scss';

interface EntryListProps {}
interface EntryListItemProps {}

const Entries: React.FC<EntryListProps & State> = ({ service }) => {
  return (
    <React.Fragment>
      <section className="hero">
        <div
          className="hero-image"
          style={{
            backgroundImage: `url(https://horiguchi-seni.com/static/images/service/winding.jpg)`
          }}
        ></div>
      </section>

      <main className="mainContainer">
        <SailingScrollDown text="News" />

        <div className="content mainContainer__content">
          <div className="contentHeader">
            <h3 className="contentHeader__title">
              <span className="en">News</span>
              <span className="ja">お知らせ</span>
            </h3>
          </div>

          <EntriesList />

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

export default connect(state => state)(Entries);
