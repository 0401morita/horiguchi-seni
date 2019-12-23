import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { ArrowRightIcon } from '../../src/components/icons';
import { State } from '../../src/reducers';
import SailingScrollDown from '../../src/containers/sailingScrollDown';
import '../../src/styles/home.scss';
import Entry from '../../src/containers/entries/show';

interface ServiceListProps {}

const Home: React.FC<ServiceListProps & State> = props => {
  useEffect(() => {
    console.log(props);
  }, []);

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
          <Entry />

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

export default connect(state => state)(Home);
