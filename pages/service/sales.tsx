import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '../../src/components/icons';
import Slider from '../../src/components/shares/slider';
import SailingScrollDown from '../../src/containers/sailingScrollDown';

interface ServiceProps {
  Component: React.Component;
  pageProps: any;
  store: any;
}

const SalesService: React.FC<ServiceProps> = () => {
  const [flowList] = useState([
    {
      title: {
        ja: 'ヒアリング',
        en: 'Hearing'
      },
      description:
        'お問い合わせを頂きましたら、メール又は電話にてご要望をお伺いさせて頂きます。'
    },
    {
      title: {
        ja: 'カタログの配送',
        en: 'Catalogue Shipping'
      },
      description: 'ご要望に合わせたカタログを配送さて頂きます。'
    },
    {
      title: {
        ja: 'カタログの配送',
        en: 'Choice'
      },
      description:
        'カタログよりお気に入りのユニフォームが決まりましたら、メール又は電話にてご注文ください。また補修や刺繍 / プリント等の加工も行っております。'
    },
    {
      title: {
        ja: '納品',
        en: 'Delivery'
      },
      description: '納品前に検品を行いお客様のもとにお届けします。'
    },
    {
      title: {
        ja: '着用開始',
        en: 'Wear'
      },
      description:
        '実際に着用して頂きます。納品後も必要に応じてメンテナンス、リネンサプライなどのサービスをご利用頂けます。'
    }
  ]);

  const [otherServiceList] = useState([
    {
      image_source:
        'http://horiguchi-seni.com/static/images/service/machine-quilting.jpg',
      title: {
        ja: '生地・デザインの選定からユニフォームを縫製販売',
        en: 'Sewing & Sales'
      },
      description: '縫製・販売について',
      link: '/service/sewing'
    },
    {
      image_source: 'http://horiguchi-seni.com/static/images/service/iron.jpg',
      title: {
        ja: 'ユニフォームのクリーニング付きリース',
        en: 'Cleaning&Lease'
      },
      description: 'クリーニング付リースについて',
      link: '/service/cleaning-lease'
    }
  ]);
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <React.Fragment>
      <section className="hero">
        <div
          className="hero-image"
          style={{
            backgroundImage: `url(http://horiguchi-seni.com/static/images/service/name.jpg)`
          }}
        ></div>
      </section>

      <main className="mainContainer">
        <SailingScrollDown text="Sales" />

        <div className="content mainContainer__content">
          <div className="contentHeader">
            <h3 className="contentHeader__title">
              <span className="en">Sales</span>
              <span className="ja">
                メーカー品のユニフォームをにて特別価格にて販売
              </span>
            </h3>
          </div>

          <p className="content__lead">
            各メーカー各種ユニフォームを取り揃えております。カタログを拝見していただいた上でサンプルで確認していただきお選びいただけます。特別価格にて直接販売を承っております。
          </p>

          <div className="contentInnerHeader">
            <h3 className="contentInnerHeader__title">
              <span className="ja">ネット価格より安く</span>
              <span className="en">Pricing</span>
            </h3>
          </div>
          <p className="content__lead">
            各メーカーより直接商品を卸しているためネット上の価格より安く販売させて頂きます。
          </p>

          <div className="contentInnerHeader">
            <h3 className="contentInnerHeader__title">
              <span className="ja">補修や刺繍</span>
              <span className="en">Repair</span>
            </h3>
          </div>
          <p className="content__lead">
            縫製工場ですのでご希望に沿ったオリジナルのユニフォーム等の作成も承っております。
            また補修や刺繍、プリント等の加工も行っております。
          </p>

          <div className="content__caroucel">
            <Slider {...sliderSettings}>
              <img src="http://horiguchi-seni.com/static/images/service/display.jpg" />
              <img src="http://horiguchi-seni.com/static/images/service/name.jpg" />
            </Slider>
          </div>

          <div className="serviceFlow">
            {flowList.map((flowItem, index) => {
              return (
                <div className="serviceFlowItem" key={index}>
                  <div className="serviceFlowItem__index">{index + 1}</div>
                  <div className="serviceFlowItem__icon"></div>
                  <div className="serviceFlowItem__title">
                    <span className="en">{flowItem.title.en}</span>
                    <span className="ja">{flowItem.title.ja}</span>
                  </div>
                  <p className="serviceFlowItem__description">
                    {flowItem.description}
                  </p>
                </div>
              );
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

      <div className="subContent">
        <div className="contentHeader">
          <h3 className="contentHeader__title">
            <span className="en">Other Service</span>
            <span className="ja">その他のサービス</span>
          </h3>
        </div>

        <div className="otherServiceList">
          {otherServiceList.map((otherService, index) => {
            return (
              <div className="otherServiceItem" key={index}>
                <Link href={otherService.link}>
                  <a className="otherServiceItem__link">
                    <img
                      src={otherService.image_source}
                      className="otherServiceItem__image"
                    />
                    <h4 className="otherServiceItem__title">
                      <span className="en">{otherService.title.en}</span>
                      <span className="ja">{otherService.title.ja}</span>
                    </h4>
                    <p className="otherServiceItem__description">
                      {otherService.description}
                    </p>
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default SalesService;
