import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import ServiceItem from '../../src/components/homes/service_item';
import { ArrowRightIcon } from '../../src/components/icons';
import { State } from '../../src/reducers';
import SailingScrollDown from '../../src/containers/sailingScrollDown';
import '../../src/styles/home.scss';

interface ServiceListProps {}

const Home: React.FC<ServiceListProps & State> = ({ service }) => {
  useEffect(() => {
    document.body.classList.add('in');
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
          <div className="contentHeader">
            <h3 className="contentHeader__title">
              <span className="en">Service</span>
              <span className="ja">私たちの事業</span>
            </h3>
          </div>

          <div className="service-list">
            {service.list.map((service: any, index: number) => {
              return <ServiceItem {...service} index={index} key={index} />;
            })}
          </div>

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
