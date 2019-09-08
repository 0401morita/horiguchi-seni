import Link from 'next/link';

export default () => {
  return (
    <footer className="global-footer">
      <div className="footer-container d-md-flex align-items-center">
        <div className="footer-nav">
          <h4 className="footer-nav-title">堀口繊維工業について</h4>
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
          <h4 className="footer-nav-title">サービス</h4>
          <ul className="footer-menu">
            <li>
              <Link href="/about">
                <a className="footer-nav-link">アパレル生産</a>
              </Link>
            </li>
            <li>
              <Link href="/service">
                <a className="footer-nav-link">クリーニング</a>
              </Link>
            </li>
            <li>
              <Link href="/service">
                <a className="footer-nav-link">ユニフォームのリース</a>
              </Link>
            </li>
            <li>
              <Link href="/service">
                <a className="footer-nav-link">ユニフォーム販売</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <p className="copyright">© Horiguchi, Inc.</p>
    </footer>
  );
};
