import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import IconEnvelope from '../src/components/icons/envelope';
import '../src/styles/home.scss';
import Header from '../src/containers/header';
import Footer from '../src/components/shares/footer';

interface getInitialProps {
  store: any;
}

interface HomeProps {
  custom: string;
}

class Home extends Component<HomeProps> {
  static getInitialProps({ store }: getInitialProps) {
    store.dispatch({ type: 'FOO', payload: 'foo' }); // component will be able to read from store's state when rendered
    return { custom: 'custom' }; // you can pass some custom props to component from here
  }

  render() {
    return (
      <div className="wrapper">
        <Header />

        <article className="home">
          <section className="hero-section section-visual">
            <div className="hero-image bg filter">
              <img src="/static/images/visual/02.jpg" />
            </div>

            <div className="hero-content center">
              <Link href="/about">
                <a className="visual-content-link">
                  <h2 className="title">
                    <span>私たちはユニフォームに関する</span>
                    <br className="d-none d-md-block" />
                    <span>トータルソリューションを提供します。</span>
                  </h2>
                  <p className="description">
                    堀口繊維工業はユニフォームの縫製 / 販売 / リース /
                    クリーニングのワンストップサービスを提供します。真に価値のあるユニフォームとサービスを提供し、ユニフォームの導入から運用までをトータルでサポートします。
                  </p>

                  <button className="btn btn-white btn-read-more mt-4">
                    <span className="txt">View About</span>
                    <span className="arrow"></span>
                  </button>
                </a>
              </Link>
            </div>
          </section>

          <article className="service-stories">
            <section className="section-story">
              <div className="story-image">
                <div
                  className="aspect-rect bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: 'url(/static/images/tiles/sewing.jpg)'
                  }}
                ></div>
              </div>

              <div className="story-content">
                <div className="content-summary white">
                  <div className="en-title">
                    Original Equipment Manufacturer
                  </div>

                  <h4 className="title">アパレル生産</h4>
                  <div className="description">
                    小規模から対応可能なアパレルのOEM生産サービスです。デザインから素材まで全てのカスタマイズが可能です。
                  </div>

                  <div className="read-more">
                    <span className="txt">View More</span>
                    <span className="arrow"></span>
                  </div>
                </div>
              </div>
            </section>

            <section className="section-story">
              <div className="story-image">
                <div
                  className="aspect-rect bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: 'url(/static/images/tiles/iron.jpg)'
                  }}
                ></div>
              </div>

              <div className="story-content">
                <Link href="/service/cleaning">
                  <a className="content-summary white">
                    <div className="en-title">Cleaning</div>

                    <h4 className="title">クリーニング</h4>
                    <p className="description">
                      毎日使うユニフォームやホテルのシーツ・タオルを清潔な状態でお届けします。大規模クリーニングのサービスです。
                    </p>

                    <div className="read-more">
                      <span className="txt">View More</span>
                      <span className="arrow"></span>
                    </div>
                  </a>
                </Link>
              </div>
            </section>

            {/* Lease */}
            <section className="section-story">
              <div className="story-image">
                <div
                  className="aspect-rect bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: 'url(/static/images/tiles/lease.jpg)'
                  }}
                ></div>
              </div>

              <div className="story-content">
                <Link href="/service/cleaning">
                  <a className="content-summary">
                    <div className="en-title">Leasing a Uniform</div>

                    <h4 className="title">ユニフォーム・リース</h4>
                    <p className="description">
                      クリーニング済み衛生的なユニフォームを定期的にお届けします。医療現場や清潔感を求められる環境に最適です。
                    </p>

                    <div className="read-more">
                      <span className="txt">View More</span>
                      <span className="arrow"></span>
                    </div>
                  </a>
                </Link>
              </div>
            </section>

            {/* Sales */}
            <section className="section-story">
              <div className="story-image">
                <div
                  className="aspect-rect bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: 'url(/static/images/tiles/uniform.jpg)'
                  }}
                ></div>
              </div>

              <div className="story-content">
                <Link href="/service/cleaning">
                  <a className="content-summary white">
                    <div className="en-title">Sales a Uniform</div>

                    <h4 className="title">ユニフォーム販売</h4>
                    <p className="description">
                      制服や作業着などユーザーに合わせたユニフォーム販売・導入をサポートします。
                    </p>

                    <div className="read-more">
                      <span className="txt">View More</span>
                      <span className="arrow"></span>
                    </div>
                  </a>
                </Link>
              </div>
            </section>
          </article>

          <section className="section section-space">
            <div className="recent-entries d-md-flex flex-wrap align-items-center">
              <div className="section-heading">
                <h3 className="section-title">
                  <span className="ja">最新記事</span>
                  <span className="en">News Topics</span>
                </h3>
              </div>

              <div className="recent-entry-list">
                <div className="entry-item">
                  <div className="eyecatch">
                    <div
                      className="bg-cover bg-center image"
                      style={{
                        backgroundImage: `url(/static/images/visual/03.jpg)`
                      }}
                    ></div>
                  </div>
                  <div className="entry-meta">
                    <a href="/" className="name">
                      夏も涼しく清潔に。快適に過ごせるユニフォーム素材。
                    </a>
                    <span className="cat">コラム</span>
                  </div>
                </div>

                <div className="entry-item">
                  <div className="eyecatch">
                    <div
                      className="bg-cover bg-center image"
                      style={{
                        backgroundImage: `url(/static/images/visual/03.jpg)`
                      }}
                    ></div>
                  </div>
                  <div className="entry-meta">
                    <a href="/" className="name">
                      夏も涼しく清潔に。快適に過ごせるユニフォーム素材。
                    </a>
                    <span className="cat">コラム</span>
                  </div>
                </div>

                <div className="entry-item">
                  <div className="eyecatch">
                    <div
                      className="bg-cover bg-center image"
                      style={{
                        backgroundImage: `url(/static/images/visual/03.jpg)`
                      }}
                    ></div>
                  </div>
                  <div className="entry-meta">
                    <a href="/" className="name">
                      夏も涼しく清潔に。快適に過ごせるユニフォーム素材。
                    </a>
                    <span className="cat">コラム</span>
                  </div>
                </div>

                <div className="entry-item">
                  <div className="eyecatch">
                    <div
                      className="bg-cover bg-center image"
                      style={{
                        backgroundImage: `url(/static/images/visual/03.jpg)`
                      }}
                    ></div>
                  </div>
                  <div className="entry-meta">
                    <a href="/" className="name">
                      夏も涼しく清潔に。快適に過ごせるユニフォーム素材。
                    </a>
                    <span className="cat">コラム</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 mt-md-5 d-flex clearfix justify-content-center">
              <Link href="/news">
                <a className="btn btn-read-more">
                  <span className="txt">View Topics</span>
                  <span className="arrow"></span>
                </a>
              </Link>
            </div>
          </section>

          <section className="section-cover-message fit">
            <div
              className="fluid bg-cover bg-center image"
              style={{
                backgroundImage: `url(/static/images/footer-main-visual.jpg)`
              }}
            ></div>

            <div className="overlay">
              <div className="info-summary">
                <Link href="/facility">
                  <a className="info-summary-link">
                    <h3 className="title">OPEN INNOVATION</h3>
                    <p className="message">
                      <span>堀口繊維工業は、</span>
                      <span>共創活動で縫製工場の</span>
                      <span>イノベーションを生み出します。</span>
                    </p>

                    <div className="btn btn-white btn-read-more pull-right">
                      <span className="txt">View Facility</span>
                      <span className="arrow"></span>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </section>
        </article>

        <div className="fixed-flow">
          <a href="/contact" className="fixed-flow-inner">
            <span className="icon">
              <IconEnvelope />
            </span>
            <span className="txt">お問い合わせ・お見積もり</span>
          </a>
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect(state => state)(Home);
