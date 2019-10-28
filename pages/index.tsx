import React, { useState } from 'react';
import { connect } from 'react-redux';
//import Link from 'next/link';
import '../src/styles/home.scss';
import Header from '../src/containers/header';
import Footer from '../src/components/shares/footer';
//import Footer from '../src/components/shares/footer';
import { HeroSection } from '../src/components/homes/slider';
import { ArrowRightIcon } from '../src/components/icons';
import ServiceItem from '../src/components/homes/service_item';
import { State } from '../src/reducers';

interface HomeProps {}

const Home: React.FC<HomeProps & State> = props => {
  console.log(props);
  const [Services] = useState([
    {
      image_src: '/static/images/service/machine-quilting.jpg',
      title: '縫製・販売',
      summary: '生地・デザインの選定からユニフォームを縫製・販売',
      label_en: 'Sewing & Sales',
      label_ja: '縫製・販売について',
      link: '/service/sewing'
    },
    {
      image_src: '/static/images/service/name.jpg',
      title: 'ユニフォーム販売',
      summary: '各種メーカー品を特別価格にて販売',
      label_en: 'Sale',
      label_ja: '販売について',
      link: '/service/sale'
    },
    {
      image_src: '/static/images/service/iron.jpg',
      title: 'リネンサプライ',
      summary: 'ユニフォームのリースやクリーニング付リース',
      label_en: 'Linen supply',
      label_ja: 'リネンサプライについて',
      link: '/service/linen-supply'
    }
  ]);
  return (
    <div className="wrapper">
      <Header />

      <article className="home">
        <HeroSection />

        <section className="section section-about">
          <div className="about-message">
            <p>堀口繊維工業は、戦後まもなく縫製事業を立ち上げました。</p>
            <p>
              ユニフォームを縫製・販売する一方で平成に入りクリーニング設備を
              整えました。
            </p>
            <p>
              現在、ユニフォームの縫製・販売・クリーニング・クリーニング付リース（リネンサプライ）を
              中心に展開いたしております。
            </p>
          </div>
        </section>

        <main className="main-content">
          <div className="section-heading">
            <h3 className="section-title">
              <span className="ja">サービス</span>
              <span className="en">Service</span>
            </h3>
          </div>

          <div className="service-list">
            {Services.map((service, index) => {
              return (
                <ServiceItem
                  {...{ ...service, index: '0' + (index + 1) }}
                  key={index}
                />
              );
            })}
          </div>
        </main>

        <section className="section">
          <div className="row">
            <div className="col-md-5">
              <div className="section-heading">
                <h3 className="section-title">
                  <span className="ja">お知らせ</span>
                  <span className="en">News and Column</span>
                </h3>
              </div>
            </div>

            <div className="col-md-7">
              <div className="recent-entries">
                <ul className="recent-entry-list">
                  <li className="recent-entry-item">
                    <a href="/" className="recent-entry-link">
                      <p className="date">2019/10/21・News</p>
                      <div className="recent-entry-body">
                        <span className="title">夏季休暇のお知らせ</span>
                        <span className="arrow"></span>
                      </div>
                    </a>
                  </li>

                  <li className="recent-entry-item">
                    <a href="/" className="recent-entry-link">
                      <p className="date">2019/10/19・Column</p>
                      <div className="recent-entry-body">
                        <span className="title">
                          暑い夏を快適に過ごせる素材
                        </span>
                        <span className="arrow"></span>
                      </div>
                    </a>
                  </li>

                  <li className="recent-entry-item">
                    <a href="/" className="recent-entry-link">
                      <p className="date">2019/10/17・Column</p>
                      <div className="recent-entry-body">
                        <span className="title">
                          企業におけるユニフォーム導入の価値
                        </span>
                        <span className="arrow"></span>
                      </div>
                    </a>
                  </li>

                  <li className="recent-entry-item">
                    <a href="/" className="recent-entry-link">
                      <p className="date">2019/10/10・News</p>
                      <div className="recent-entry-body">
                        <span className="title">キャドカム導入のお知らせ</span>
                        <span className="arrow"></span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </article>

      <div className="section to-contact">
        <h2 className="to-contact-message">
          <span className="ja">ご相談はありますか？</span>
          <span className="en">Let’s talk！</span>
        </h2>
        <ArrowRightIcon />
      </div>
      <Footer />
    </div>
  );
};

export default connect(state => state)(Home);
