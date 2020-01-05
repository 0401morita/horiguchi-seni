import Link from 'next/link';
import { BrandIconBase } from '../icons/brand';

export default () => {
  return (
    <footer className="global-footer">
      <div className="container-fluid">
        <div className="footer-row">
          <div className="footer-col">
            <h5 className="title">Company</h5>
            <ul className="footer-nav">
              <li>
                <Link href="/service">
                  <a className="footer-nav-link">私たちの事業について</a>
                </Link>
              </li>
              <li>
                <Link href="/service">
                  <a className="footer-nav-link">施設と設備</a>
                </Link>
              </li>
              <li>
                <Link href="/company">
                  <a className="footer-nav-link">会社情報</a>
                </Link>
              </li>
              <li>
                <Link href="/service">
                  <a className="footer-nav-link">お知らせ</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h5 className="title">Service</h5>
            <ul className="footer-nav">
              <li>
                <Link href="/about">
                  <a className="footer-nav-link">縫製・販売</a>
                </Link>
              </li>
              <li>
                <Link href="/service">
                  <a className="footer-nav-link">ユニフォーム販売</a>
                </Link>
              </li>
              <li>
                <Link href="/service">
                  <a className="footer-nav-link">リネンサプライ</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <div className="brand">
              <BrandIconBase />
            </div>
            <address className="footer-address">
              <p className="address">〒950-2052 新潟県新潟市西区寺尾2-19</p>
              <div className="tel">
                <a href="tel:025-269-2591">025-269-2591</a>
              </div>
            </address>
          </div>
        </div>
      </div>

      <p className="copyright">© Horiguchi, Inc.</p>
    </footer>
  );
};
