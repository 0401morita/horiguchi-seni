import React, { useRef, useEffect } from 'react';
import Slider from '../src/components/shares/slider';
import Link from 'next/link';
import { ArrowRightIcon } from '../src/components/icons';
import SailingScrollDown from '../src/containers/sailingScrollDown';

interface FacilityProps {}

const Facility: React.FC<FacilityProps> = () => {
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

  const SlickEl = useRef(null);
  useEffect(() => {
    console.log(SlickEl);
  }, []);

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
        <SailingScrollDown text="Facility" />

        <div className="content mainContainer__content">
          <div className="contentHeader">
            <h3 className="contentHeader__title">
              <span className="en">Facility & Machine</span>
              <span className="ja">施設と設備</span>
            </h3>
          </div>

          <p className="content__lead">
            堀口繊維工業はユニフォームの縫製・販売・クリーニング・クリーニング付リース（リネンサプライ）を中心に展開いたしております。
            <br />
            高品質なユニフォームをお届けするべく様々な設備を導入しております。
          </p>

          <div className="content__caroucel">
            <Slider {...sliderSettings}>
              <img src="http://horiguchi-seni.com/static/images/service/machine-quilting.jpg" />
              <img src="http://horiguchi-seni.com/static/images/service/display.jpg" />
              <img src="http://horiguchi-seni.com/static/images/service/name.jpg" />
            </Slider>
          </div>

          <div className="contentInnerHeader">
            <h3 className="contentInnerHeader__title">
              <span className="ja">設備</span>
              <span className="en">Machine</span>
            </h3>
          </div>

          <div className="machineListContainer">
            <div className="machineList">
              <div className="machineList__taxonomy">CAM</div>
              <div className="machineItem">
                <div className="machineItem__maker">Kawakami</div>
                <div className="machineItem__number">GP50G-3S</div>
              </div>
            </div>
            <div className="machineList">
              <div className="machineList__taxonomy">スキャナー</div>
              <div className="machineItem">
                <div className="machineItem__maker">Colortrac Limited</div>
                <div className="machineItem__number">SmartLF-SC-36-XPRESS</div>
              </div>
            </div>
            <div className="machineList">
              <div className="machineList__taxonomy">プロッタ</div>
              <div className="machineItem">
                <div className="machineItem__maker">ユカアンドアルファ</div>
                <div className="machineItem__number">AlphaJET-1600C-Z</div>
              </div>
            </div>
            <div className="machineList">
              <div className="machineList__taxonomy">PC</div>
              <div className="machineItem">
                <div className="machineItem__maker">HP</div>
                <div className="machineItem__number">
                  HP EliteDesk 800 G1 SFF
                </div>
              </div>
            </div>
            <div className="machineList">
              <div className="machineList__taxonomy">カッティングマシン</div>
              <div className="machineItem">
                <div className="machineItem__maker">KM</div>
                <div className="machineItem__number">KS-EV</div>
              </div>
            </div>
            <div className="machineList">
              <div className="machineList__taxonomy">バンドナイフ</div>
              <div className="machineItem">
                <div className="machineItem__maker">ケーテック</div>
                <div className="machineItem__number">BK-700N</div>
              </div>
            </div>
            <div className="machineList">
              <div className="machineList__taxonomy">
                スクロールコンプレッサ
              </div>
              <div className="machineItem">
                <div className="machineItem__maker">マネスト岩田</div>
                <div className="machineItem__number">SLP-22EFD</div>
              </div>
            </div>

            <div className="machineList">
              <div className="machineList__taxonomy">スクイ縫いミシン</div>
              <div className="machineItem">
                <div className="machineItem__maker">大和ミシン製造</div>
                <div className="machineItem__number">CM-351</div>
              </div>
            </div>
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

export default Facility;
