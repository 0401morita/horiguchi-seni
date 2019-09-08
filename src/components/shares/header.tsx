import Link from 'next/link';
import { IconBrand } from '../icons/brand';
import IconEnvelope from '../icons/envelope';

const Header = ({ toggleMenu }: any) => {
  return (
    <header className="header">
      <div className="brand">
        <IconBrand />
      </div>

      <nav className="global-nav">
        <ul className="nav-menu">
          <li>
            <Link href="about">
              <a className="nav-menu-link">堀口繊維について</a>
            </Link>
          </li>
          <li>
            <Link href="about">
              <a className="nav-menu-link">サービス</a>
            </Link>
          </li>
          <li>
            <Link href="about">
              <a className="nav-menu-link">施設と設備</a>
            </Link>
          </li>
          <li>
            <Link href="about">
              <a className="nav-menu-link">会社情報</a>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="feature-nav">
        <ul className="nav-menu">
          <li>
            <Link href="about">
              <a className="btn btn-primary">
                <IconEnvelope />
                お問い合わせ
              </a>
            </Link>
          </li>
        </ul>
      </div>

      <div
        className="xs-menu-trigger"
        onClick={e => {
          e.preventDefault();
          toggleMenu();
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
