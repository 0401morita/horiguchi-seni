import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '../src/components/icons';
import SailingScrollDown from '../src/containers/sailingScrollDown';

const Company: React.FC<{}> = () => {
  return (
    <React.Fragment>
      <section className="hero">
        <div
          className="hero-image"
          style={{
            backgroundImage: `url(http://horiguchi-seni.com/static/images/service/display.jpg)`
          }}
        ></div>
      </section>

      <main className="mainContainer">
        <SailingScrollDown text="Company" />
        <div className="content mainContainer__content">
          <div className="contentHeader">
            <h3 className="contentHeader__title">
              <span className="en">Company</span>
              <span className="ja">会社概要</span>
            </h3>
          </div>

          <p className="content__lead">
            堀口繊維工業ではユニフォームの縫製・販売、リース、リネンサプライで、
            <br />
            パートナーのビジネスの成長を支援します。
          </p>

          <div className="companyProfile">
            <dl className="companyProfile__dl">
              <dt>会社名</dt>
              <dd>
                <p>株式会社堀口繊維工業</p>
              </dd>
            </dl>
            <dl className="companyProfile__dl">
              <dt>所在地</dt>
              <dd>
                <p>
                  〒950－2052
                  <br />
                  新潟県新潟市西区寺尾2番29号
                </p>
                <a
                  href="https://goo.gl/maps/VZwCeLifhs6qo9oL9"
                  className="link"
                  target="_blank"
                >
                  GoogleMap
                </a>
              </dd>
            </dl>
            <dl className="companyProfile__dl">
              <dt>設立</dt>
              <dd>
                <p>1880年 / 明治13年 - 5月</p>
              </dd>
            </dl>
            <dl className="companyProfile__dl">
              <dt>TEL</dt>
              <dd>
                <p>025－269－2591</p>
              </dd>
            </dl>
            <dl className="companyProfile__dl">
              <dt>FAX</dt>
              <dd>
                <p>025－269－3047</p>
              </dd>
            </dl>
            <dl className="companyProfile__dl">
              <dt>資本金</dt>
              <dd>
                <p>1000万円</p>
              </dd>
            </dl>
            <dl className="companyProfile__dl">
              <dt>代表者</dt>
              <dd>
                <p>代表取締役 堀口弥一</p>
              </dd>
            </dl>
            <dl className="companyProfile__dl">
              <dt>経歴</dt>
              <dd>
                <dl className="history">
                  <dt className="history__dt">明治13年</dt>
                  <dd className="history__dd">
                    堀口商店と称し呉服並びに毛織物販売
                  </dd>
                </dl>

                <dl className="history">
                  <dt className="history__dt">明治42年</dt>
                  <dd className="history__dd">メリヤス類小売業を併業</dd>
                </dl>

                <dl className="history">
                  <dt className="history__dt">大正8年</dt>
                  <dd className="history__dd">羅紗類卸小売並びに注文服販売</dd>
                </dl>

                <dl className="history">
                  <dt className="history__dt">昭和11年</dt>
                  <dd className="history__dd">国鉄新潟鉄道局指定商となる</dd>
                </dl>

                <dl className="history">
                  <dt className="history__dt">昭和14年</dt>
                  <dd className="history__dd">
                    企業整理の為廃業、新潟県洋服組合に加入、統制経済に従い
                    洋服組合により布綿組合に統合され、日本布綿組合員となる
                  </dd>
                </dl>

                <dl className="history">
                  <dt className="history__dt">昭和24年</dt>
                  <dd className="history__dd">
                    営業開始、通産省指定の繊維卸商となる
                  </dd>
                </dl>

                <dl className="history">
                  <dt className="history__dt">昭和30年</dt>
                  <dd className="history__dd">堀口商店を堀口繊維と改称する</dd>
                </dl>

                <dl className="history">
                  <dt className="history__dt">昭和59年</dt>
                  <dd className="history__dd">
                    新潟市本町通７番町から現所在地に移転
                  </dd>
                </dl>

                <dl className="history">
                  <dt className="history__dt">平成20年</dt>
                  <dd className="history__dd">新工場を設立</dd>
                </dl>
              </dd>
            </dl>
            <dl className="companyProfile__dl">
              <dt>取扱品目</dt>
              <dd>
                <dl className="handling">
                  <dt className="handling__dt">
                    衣料（制服/作業服/白衣/看護衣/無塵衣/帽子/調理衣等）
                  </dt>
                  <dd className="handling__dd">
                    <span className="tag">製造販売</span>
                    <span className="tag">レンタル</span>
                    <span className="tag">リース</span>
                  </dd>
                </dl>

                <dl className="handling">
                  <dt className="handling__dt">カーテン類</dt>
                  <dd className="handling__dd">
                    <span className="tag">製造販売</span>
                    <span className="tag">レンタル</span>
                    <span className="tag">リース</span>
                  </dd>
                </dl>

                <dl className="handling">
                  <dt className="handling__dt">寝具・タオル類</dt>
                  <dd className="handling__dd">
                    <span className="tag">製造販売</span>
                    <span className="tag">レンタル</span>
                    <span className="tag">リース</span>
                  </dd>
                </dl>

                <dl className="handling">
                  <dt className="handling__dt">
                    靴（安全靴、長靴、ナースシューズ等）
                  </dt>
                  <dd className="handling__dd">
                    <span className="tag">販売</span>
                  </dd>
                </dl>

                <dl className="handling">
                  <dt className="handling__dt">
                    安全衛生保護具（マスク、手袋、ヘルメット等）
                  </dt>
                  <dd className="handling__dd">
                    <span className="tag">販売</span>
                  </dd>
                </dl>

                <dl className="handling">
                  <dt className="handling__dt">その他繊維製品全般</dt>
                  <dd className="handling__dd">
                    <span className="tag">販売</span>
                  </dd>
                </dl>
              </dd>
            </dl>
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

export default Company;
