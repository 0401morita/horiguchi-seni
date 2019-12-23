import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { ArrowRightIcon } from '../../src/components/icons';
import Slider from '../../src/components/shares/slider';
import SailingScrollDown from '../../src/containers/sailingScrollDown';

interface ServiceProps {
  Component: React.Component;
  pageProps: any;
  store: any;
}

const SewingService: React.FC<ServiceProps> = () => {
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
        ja: 'ご提案',
        en: 'Suggestion'
      },
      description:
        '頂いた要望に基づき、お客様にとって最適なプランをご提案いたします。'
    },
    {
      title: {
        ja: 'ご契約',
        en: 'Contract'
      },
      description:
        '提案内容にご納得いただけましたら、ご契約へと進めさせて頂きます。'
    },
    {
      title: {
        ja: '採寸',
        en: 'Fitting'
      },
      description:
        '必要に応じて採寸に伺い、一人ひとりに適したサイズのユニフォームを縫製いたします。'
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
        '実際に業務で着用して頂きます。納品後も必要に応じてメンテナンス、クリーニングなどのサービスをご利用頂けます。'
    }
  ]);

  const [otherServiceList] = useState([
    {
      image_source: 'http://horiguchi-seni.com/static/images/service/iron.jpg',
      title: {
        ja: 'ユニフォームのクリーニング付きリース',
        en: 'Cleaning&Lease'
      },
      description: 'クリーニング付リースについて',
      link: '/service/cleaning-lease'
    },
    {
      image_source: 'http://horiguchi-seni.com/static/images/service/name.jpg',
      title: {
        ja: 'メーカー品のユニフォームをにて特別価格にて販売',
        en: 'Sales'
      },
      description: '販売について',
      link: '/service/sales'
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
        <div className="hero-image"></div>
      </section>

      <main className="mainContainer">
        <SailingScrollDown text="Seawing" />

        <div className="content mainContainer__content">
          <div className="contentHeader">
            <h3 className="contentHeader__title">
              <span className="en">Sewing & Sales</span>
              <span className="ja">
                生地・デザインの選定からユニフォームを縫製販売
              </span>
            </h3>
          </div>

          <p className="content__lead">
            生地・デザインの選定からご希望に沿ったオリジナルのユニフォーム等を縫製販売をいたします。お客様のニーズに合ったユニフォーム提案から予算まで最適なプランをご提案いたします。「デザイン」×「機能性」の優れたユニフォームは社員のモチベーションとブランディングの向上へと繋がります。
          </p>

          <div className="contentInnerHeader">
            <h3 className="contentInnerHeader__title">
              <span className="ja">デザイン</span>
              <span className="en">Design</span>
            </h3>
          </div>
          <p className="content__lead">
            「おしゃれ」で「かっこいい」はモチベーションの向上に繋がります。
          </p>

          <div className="contentInnerHeader">
            <h3 className="contentInnerHeader__title">
              <span className="ja">用途に合わせた機能性</span>
              <span className="en">Functionality</span>
            </h3>
          </div>
          <p className="content__lead">
            ポケットの位置や大きさ、暑さ対策の必要な現場では「通気性が良く吸汗速乾性」、寒さ対策が必要な現場では「断熱性・保温性・防風性」、ニオイや汚れが気になる際は「防臭・撥水性の生地」など利用シーンにあわせた機能性にも対応。
          </p>

          <div className="contentInnerHeader">
            <h3 className="contentInnerHeader__title">
              <span className="ja">ブランディングの向上</span>
              <span className="en">Branding</span>
            </h3>
          </div>
          <p className="content__lead">
            コーポレートアイデンティティに合わせたユニフォームは見ただけで企業名が分かるので歩く広告塔となります。
          </p>

          <div className="content__caroucel">
            <Slider {...sliderSettings}>
              <img src="http://horiguchi-seni.com/static/images/service/machine-quilting.jpg" />
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

export default SewingService;
