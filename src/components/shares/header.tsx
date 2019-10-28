import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { BrandIconBase } from '../icons/brand';

const Header = ({ toggleMenu }: any) => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.classList.add('in');
    }
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <div className="header-container">
        <Link href="/">
          <a className="brand">
            <BrandIconBase />
          </a>
        </Link>

        <div className="global-nav-container">
          <nav className="global-nav" role="menubar">
            <ul className="nav-menu" role="menu">
              <li role="menuitem">
                <Link href="about">
                  <a className="nav-menu-link">堀口繊維について</a>
                </Link>
              </li>
              <li role="menuitem">
                <Link href="about">
                  <a className="nav-menu-link">サービス</a>
                </Link>
              </li>
              <li role="menuitem">
                <Link href="about">
                  <a className="nav-menu-link">施設と設備</a>
                </Link>
              </li>
              <li role="menuitem">
                <Link href="about">
                  <a className="nav-menu-link">会社情報</a>
                </Link>
              </li>
              <li className="contact" role="menuitem">
                <Link href="/contact">
                  <a className="nav-menu-link">お問い合わせ</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div
          className="menu-trigger"
          onClick={e => {
            e.preventDefault();
            toggleMenu();
          }}
        >
          <div className="menu-trgger-btn">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
