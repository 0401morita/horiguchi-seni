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

const CleaningLeaseService: React.FC<ServiceProps> = () => {
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
        ja: 'サンプルユニフォームの配送',
        en: 'Suggestion'
      },
      description:
        'サンプルユニフォームのを配送致します。実際にご試着頂きお気に入りのユニフォームをお選びください。また補修や刺繍 / プリント等の加工も行っております。'
    },

    {
      title: {
        ja: 'ご契約',
        en: 'Contract'
      },
      description:
        '提案内容にご納得いただけましたら、ご契約へと進めさせて頂きます。ご契約書作成にあたっては弊社ひな型もございますが、ご相談の上お客様のご希望に沿ったご契約内容とさせていただいております。'
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
        <div
          className="hero-image"
          style={{
            backgroundImage: `url(http://horiguchi-seni.com/static/images/service/iron.jpg)`
          }}
        />
      </section>

      <main className="mainContainer">
        <SailingScrollDown text="Cleaning & Lease" />

        <div className="content mainContainer__content">
          <div className="contentHeader">
            <h3 className="contentHeader__title">
              <span className="en">Cleaning & Lease</span>
              <span className="ja">ユニフォームのクリーニング付きリース</span>
            </h3>
          </div>
          <p className="content__lead">
            現在ユニフォームをご購入しクリーニングをクリーニング会社へご依頼もしくは各個人様ご自宅でお洗濯されている場合の法人様へユニフォームのクリーニング付リースをご提案させていただきます。
          </p>
          <p className="content__lead">
            一般的にリネンサプライ・レンタル・リースと呼び名はございますが、弊社ではご希望のご契約期間を設定し、ユニフォームをお選びいただきそのユニフォームを弊社から必要枚数お貸しさせていただき、クリーニングを行い補修や交換、人の入れ替わりに関する管理をさせて頂きます。
          </p>
          <p className="content__lead">
            ご契約書作成にあたっては弊社ひな型もございますが、
            ご相談の上お客様のご希望に沿ったご契約内容とさせていただいております。
          </p>
          <div className="contentInnerHeader">
            <h3 className="contentInnerHeader__title">
              <span className="ja">コスト削減効果</span>
              <span className="en">Cost Reduction</span>
            </h3>
          </div>
          <p className="content__lead">
            ユニフォームのクリーニング付きリースはコストパフォーマンスに優れたサービスです。
          </p>
          <p className="content__lead">
            ユニフォームを一般的なクリーニングに依頼した際にかかるクリーニング費用と、ユニフォームをクリーニング付レンタルリースにした場合の費用がご契約期間内で、ほぼ同じくらいになるよう意識して作成いたします。ユニフォームの種類によって一概には全てそのように作成することは困難ですが基準としては意識して作成いたします
          </p>
          <p className="content__lead">
            各会社様によりユニフォームの種類、枚数、クリーニングの集配回数等により違いがございますので、状況をお伺いさせていただいた上でお見積させていただけたらと思っております。
          </p>
          <div className="content__figure">
            <img
              src="http://horiguchi-seni.com/static/costdown.gif"
              className="image"
            />
          </div>

          <div className="contentInnerHeader">
            <h3 className="contentInnerHeader__title">
              <span className="ja">クリーニング</span>
              <span className="en">Cleaning</span>
            </h3>
          </div>

          <p className="content__lead">
            厚生労働省の定めたクリーニングフローを基準とし、素材や形状に合わせて生地を傷めず、汚れがよく落ちるクリーニングを実施しています。
          </p>
          <div className="content__caroucel">
            <Slider {...sliderSettings}>
              <img src="http://horiguchi-seni.com/static/images/service/iron.jpg" />
              <img src="http://horiguchi-seni.com/static/images/service/fold.jpg" />
            </Slider>
          </div>

          <div className="contentInnerHeader">
            <h3 className="contentInnerHeader__title">
              <span className="ja">貸出ユニフォーム</span>
              <span className="en">Lease</span>
            </h3>
          </div>
          <p className="content__lead">
            各メーカー各種ユニフォームを取り揃えております。
            <br />
            カタログを拝見していただいた上でサンプルで確認していただきお選びいただけます。
            特別価格での直接販売もおこなっております。
            縫製工場ですのでご希望に沿ったオリジナルのユニフォーム等の作成も承っております。
            また補修や刺繍、プリント等の加工も行っております。
          </p>
          <div className="content__caroucel">
            <Slider {...sliderSettings}>
              <img src="http://horiguchi-seni.com/static/images/service/name.jpg" />
              <img src="http://horiguchi-seni.com/static/images/service/display.jpg" />
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

export default CleaningLeaseService;
