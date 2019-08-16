import { h } from 'preact';

const Home = () => (
	<div>
	<section className="cover cover-home">
		<div className="image"></div>
		<div className="copy">
			<p className="copy-message">堀口繊維はユニフォームの<br />レンタル・販売からクリーニング<br />までトータルサポート。</p>

			<a href="/" className="btn btn-lg btn-h-red btn-rounded copy-link d-block d-sm-inline-block">私たちについて</a>
		</div>

		<div className="progress-circle-bar carousel-counter">
		  <div className="pregress-circle-inner">
				<svg class="pc_disp tb_disp">
					<circle cx="70" cy="70" r="69"></circle>
				</svg>
			</div>
		</div>

		<div className="cover-scrolldown">
			<span className="point"></span>
		</div>
	</section>

	<section className="section"></section>
	</div>
);

export default Home;
