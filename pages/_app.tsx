import React from 'react';
import Head from 'next/head';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import '../src/styles/common.scss';
import reducers from '../src/reducers';
import { setScrollTop } from '../src/actions/app';

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
    ctx: any;
  }) {
    ctx.store.dispatch({ type: 'FOO', payload: 'foo' });
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    console.log('pageProps');
    return { pageProps };
  }

  componentDidMount() {
    const { store } = this.props;
    window.addEventListener('scroll', () => store.dispatch(setScrollTop()));
  }

  componentWillUnmount() {
    const { store } = this.props;
    window.removeEventListener('scroll', () => store.dispatch(setScrollTop()));
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

          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(makeStore)(MyApp);
