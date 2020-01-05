import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import '../src/styles/home.scss';
import { HeroSection } from '../src/components/homes/slider';
import ServiceItem from '../src/components/homes/service_item';
import { ArrowRightIcon } from '../src/components/icons';
import { State } from '../src/reducers';
import EventListener from 'react-event-listener';
import SailingScrollDown from '../src/containers/sailingScrollDown';

interface HomeProps {}

const Home: React.FC<HomeProps & State> = ({ app, service }) => {
  const [windowState, setWindowState] = useState({
    width: 0,
    height: 0,
    vw: 0,
    vh: 0
  });

  const [primaryState, setPrimaryState] = useState({
    height: 0
  });

  const [messageSectionState, setMessageSectionState] = useState({
    height: 0
  });

  const primaryMessageEl = useRef<HTMLDivElement>(null);
  const messageSectionEl = useRef<HTMLDivElement>(null);
  /*
   * リサイズ実行関数
   *
   * @event {Object} event - イベント
   */
  const handleResize = (e: any) => {
    let timer = 200;
    if (timer > 0) {
      clearTimeout(timer);
    }

    timer = setTimeout(function() {
      if (primaryMessageEl.current) {
        const primaryHeight = primaryMessageEl.current.offsetHeight || 0;
        setPrimaryState(prev => {
          return { ...prev, height: primaryHeight };
        });
      }

      if (messageSectionEl.current) {
        const messageSectionHeight = messageSectionEl.current.offsetHeight || 0;
        setMessageSectionState(prev => {
          return { ...prev, height: messageSectionHeight };
        });
      }
    }, timer);
  };
  /*
   * スクロール実行関数
   *
   * @event {Object} event - イベント
   */
  const handleScroll = () => {
    if (primaryMessageEl.current) {
      const {
        scrollTop,
        width: windowWidth,
        height: windowHeight,
        vw,
        vh
      } = app.windows;
      const { height: primaryHeight } = primaryState;
      const { height: messageSectionHeight } = messageSectionState;
      const isSmartPhone = windowWidth < 768;
      let isfix =
        scrollTop > vh * 16 + primaryHeight / 2 + messageSectionHeight / 2;
      if (isSmartPhone) {
        isfix = scrollTop > vh * 8 + primaryHeight;
      }

      if (isfix) {
        document.body.classList.add('primary-fix');
      } else {
        document.body.classList.remove('primary-fix');
      }
    }
  };

  useEffect(() => {
    if (primaryMessageEl.current) {
      const primaryHeight = primaryMessageEl.current.offsetHeight || 0;
      setPrimaryState(prev => {
        return { ...prev, height: primaryHeight };
      });
    }

    if (messageSectionEl.current) {
      const messageSectionHeight = messageSectionEl.current.offsetHeight || 0;
      setMessageSectionState(prev => {
        return { ...prev, height: messageSectionHeight };
      });
    }

    document.body.classList.add('in');
  }, []);

  return (
    <React.Fragment>
      <EventListener
        target="window"
        onScroll={handleScroll}
        onResize={handleResize}
      />

      <HeroSection />
      <main className="mainContainer">
        <SailingScrollDown text="HOME" />

        <div className="mainContainer__index">Company - 会社概要</div>
        <div className="content mainContainer__content">
          <section className="homeMessage" ref={messageSectionEl}>
            <div className="homeMessage__primary">
              <div className="primaryMessage" ref={primaryMessageEl}>
                <h2 className="primaryMessage__title">
                  <span>ENJOY</span>
                  <br />
                  <span>UNIFORM</span>
                </h2>
                <p className="primaryMessage__description">
                  <span>ユニフォームを着る人をもっと快適に。</span>
                  <br />
                  <span>もっと楽しく。</span>
                </p>
              </div>
            </div>
            <div className="homeMessage__secondary">
              <div className="secondaryMessage">
                <p>堀口繊維工業は、戦後まもなく縫製事業を立ち上げました。</p>
                <p>
                  ユニフォームを縫製・販売する一方で平成に入りクリーニング設備を
                  整えました。
                </p>
                <p>
                  現在、ユニフォームの縫製・販売・クリーニング・クリーニング付リース（リネンサプライ）を
                  中心に展開いたしております。
                </p>

                <Link href="/service">
                  <a className="read-more-link">
                    <span className="en">Service</span>
                    <span className="ja">堀口繊維工業の事業について</span>
                  </a>
                </Link>
              </div>
            </div>
          </section>

          <div className="contentInnerHeader">
            <h3 className="contentInnerHeader__title">
              <span className="ja">私たちの事業</span>
              <span className="en">Service</span>
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
