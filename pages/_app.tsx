import React from 'react';
import Head from 'next/head';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import '../src/styles/common.scss';
import reducers from '../src/reducers';
import { actions, closeMenu } from '../src/actions/app';
import Header from '../src/containers/header';
import Footer from '../src/components/shares/footer';
import RecentEntries from '../src/components/recent_entries/list';
import { AppState } from '../src/reducers/app';
import { NextPageContext } from 'next';

const makeStore = () => {
  return createStore(reducers, applyMiddleware(thunk));
};

interface AppProps {
  Component: React.Component;
  pageProps: any;
  store: any;
}

class MyApp extends App<AppProps> {
  static async getInitialProps({
    Component,
    ctx
  }: {
    Component: any;
    ctx: NextPageContext;
  }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    return { pageProps };
  }

  handleScroll = () => {
    const scrollTop: number =
      Math.max(
        window.pageYOffset,
        document.documentElement.scrollTop,
        document.body.scrollTop
      ) || 0;

    const props = this.props;
    const { app } = props.store.getState();
    const updateState = {
      ...app,
      windows: {
        ...app.windows,
        scrollTop: scrollTop
      }
    };
    this.props.store.dispatch(actions.setApp(updateState));
  };

  handleResize = () => {
    let timer = 200;
    if (timer > 0) {
      clearTimeout(timer);
    }

    const props = this.props;
    timer = setTimeout(function() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const scrollTop: number =
        Math.max(
          window.pageYOffset,
          document.documentElement.scrollTop,
          document.body.scrollTop
        ) || 0;

      props.store.dispatch(
        actions.setApp({
          windows: {
            scrollTop: scrollTop,
            width: width,
            height: height,
            vw: Math.floor(width * 0.01),
            vh: Math.floor(height * 0.01)
          }
        })
      );
    }, timer);
  };

  componentDidUpdate() {
    this.props.store.dispatch(closeMenu());
  }

  componentDidMount() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const scrollTop: number =
      Math.max(
        window.pageYOffset,
        document.documentElement.scrollTop,
        document.body.scrollTop
      ) || 0;

    this.props.store.dispatch(
      actions.setApp({
        windows: {
          scrollTop: scrollTop,
          width: width,
          height: height,
          vw: Math.floor(width * 0.01),
          vh: Math.floor(height * 0.01)
        }
      })
    );
    document.addEventListener('scroll', this.handleScroll, false);
    window.addEventListener('resize', this.handleResize, false);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleScroll);
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <Head>
            <title key="title">株式会社 堀口繊維工業</title>
            <meta
              name="viewport"
              content="width=device-width,minimum-scale=1,initial-scale=1,minimal-ui"
            />
            <meta name="apple-mobile-web-app-capable" content="yes" />
          </Head>
          <div className="wrapper">
            <Header />
            <Component {...pageProps} />

            <section className="section sectionRecentEntries">
              <div className="row">
                <div className="col-md-5">
                  <div className="section-heading">
                    <h3 className="section-title">
                      <span className="ja">お知らせ</span>
                      <span className="en">News and Column</span>
                    </h3>
                  </div>
                </div>

                <div className="col-md-7">
                  <RecentEntries />
                </div>
              </div>
            </section>
          </div>
          <Footer />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(makeStore)(MyApp);
