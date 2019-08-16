import { h } from 'preact';
import { Link } from 'preact-router/match';
import { Brand } from '../utils';
import { IconEnvelopeDash } from '../utils/icon';

const Header = () => (
	<header id="header">
		<div className="header-container d-flex justify-content-between align-items-center">
			<Brand />
			<div className="header-nav d-flex justify-content-between">
				<a href="/contact" className="btn btn-lg btn-rounded btn-white header-nav-contact">
				  <IconEnvelopeDash className="d-sm-none" />
					<span className="txt d-none d-sm-block">お問い合わせ</span>
				</a>

				<button className="global-nav-trigger">
					<span></span>
					<span></span>
					<span></span>
				</button>
			</div>
		</div>

		<nav className="global-nav">
			<ul className="global-nav-ul">
				<li className="global-nav-item">
					<Link href="/" className="global-nav-link">私たちについて</Link>
				</li>
			</ul>
		</nav>
	</header>
);

export default Header;
