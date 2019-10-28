import Link from 'next/link';

export default () => {
  return (
    <footer className="global-footer">
      <div className="footer-container d-md-flex align-items-center">
        <div className="footer-nav">
          <ul className="footer-menu">
            <li>
              <Link href="/about">
                <a className="footer-nav-link">堀口繊維工業について</a>
              </Link>
            </li>
            <li>
              <Link href="/service">
                <a className="footer-nav-link">施設と設備</a>
              </Link>
            </li>
            <li>
              <Link href="/service">
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

        <div className="footer-nav">
          <ul className="footer-menu">
            <li>
              <Link href="/about">
                <a className="footer-nav-link">縫製</a>
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
      </div>

      <p className="copyright">© Horiguchi, Inc.</p>
    </footer>
  );
};
