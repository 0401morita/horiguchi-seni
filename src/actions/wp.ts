import actionCreatorFactory from 'typescript-fsa';
import { Dispatch } from 'redux';
import { parse, stringify } from 'query-string';
import axiosBase from 'axios';
import { State } from '../reducers';
//import { Dispatch } from 'redux';
//import { CommonState } from '../reducers/common';
/*
 * Action Setting
 */
const axios = axiosBase.create({
  baseURL: 'https://horiguchi-seni.sauce.jp/',
  headers: {
    'Content-Type': 'application/json'
  }
});
const actionCreator = actionCreatorFactory();
//
// Actions
//
export const actions = {
  setWp: actionCreator<{ [key: string]: any }>('SET_WP'),
  setWpPost: actionCreator<{ [key: string]: any }>('SET_WP_POST'),
  setWpPosts: actionCreator<{ [key: string]: any }>('SET_WP_POSTS'),
  setWpPostsHeaders: actionCreator<any>('SET_WP_POSTS_HEADERS')
};
//
// Get Post By Slug
//
export const getWpPostBySlug = (slug: string) => {
  return (dispatch: Dispatch, getState: () => State) => {
    axios
      .get(`/wp-json/wp/v2/posts/?_embed&slug=${slug}`)
      .then(({ status, data }) => {
        console.log(data[0]);
        if (status === 200 && data.length) {
          dispatch(actions.setWpPost(data[0]));
        }
      })
      .catch(({ response }) => {});
  };
};
//
// Get Posts
//
export const fetchWpPosts = (url: string) => {
  return new Promise((resolve, reject) => {
    let url = '/wp-json/wp/v2/posts/?_embed';
    const search = location.search;
    const parseSearch = parse(search);
    if (parseSearch.page) {
      url += '&' + stringify(parseSearch);
    }

    axios
      .get(url)
      .then(res => {
        resolve(res);
      })
      .catch((error: Error) => {
        reject(error);
      });
  });
};

export const getWpPosts = () => {
  return (dispatch: Dispatch, getState: () => State) => {
    let url = '/wp-json/wp/v2/posts/?_embed&per_page=1';
    const search = location.search;
    const parseSearch = parse(search);
    if (parseSearch.page) {
      url += '&' + stringify(parseSearch);
    }
    dispatch(
      actions.setWp({
        isLoading: true,
        isError: false
      })
    );

    axios
      .get(url)
      .then(res => {
        const { status, data, headers, config } = res;
        if (status === 200 && data.length) {
          dispatch(actions.setWpPostsHeaders(headers));
          dispatch(actions.setWpPosts(data));
        }
      })
      .catch(res => {
        dispatch(
          actions.setWp({
            isError: true
          })
        );
      })
      .finally(() => {
        setTimeout(() => {
          dispatch(
            actions.setWp({
              isLoading: false
            })
          );
        }, 500);
      });
  };
};
