import React from 'react';
import ContactForm from '../src/components/contacts/form';
import '../src/styles/contact.scss';
import { PhoneIcon } from '../src/components/icons';
import SailingScrollDown from '../src/containers/sailingScrollDown';
interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  return (
    <React.Fragment>
      <section className="hero">
        <div className="hero-image"></div>
      </section>

      <main className="mainContainer">
        <SailingScrollDown text="Contact" />
        <div className="content mainContainer__content">
          <div className="contentInnerHeader">
            <h3 className="contentInnerHeader__title">
              <span className="ja">メールでのお問い合わせ</span>
              <span className="en">Inquiries by Email</span>
            </h3>
          </div>

          <p className="content__lead">
            以下に必要事項をご記入の上送信してください。
          </p>

          <div className="contactForm">
            <ContactForm />
          </div>

          <div className="contentInnerHeader">
            <h3 className="contentInnerHeader__title">
              <span className="ja">電話でのお問い合わせ</span>
              <span className="en">Inquiries by Phone</span>
            </h3>
          </div>

          <p className="content__lead">
            お急ぎのお客様は電話よりお問い合わせください。
          </p>

          <div className="contactPhone">
            <div className="phone">
              <PhoneIcon className="phone__icon" />
              <a href="tel:0252692591" className="phone__number">
                025-269-2591
              </a>
            </div>

            <div className="contentInfoList">
              <div className="contentInfo">
                <div className="contentInfo__title">受付時間</div>
                <div className="contentInfo__summary">
                  平日9:00〜17:00（土日祝日及び年末年始・祝日を除く）
                </div>
              </div>

              <div className="contentInfo">
                <div className="contentInfo__attention">
                  日時によっては電話に出られない可能性があります
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Contact;
