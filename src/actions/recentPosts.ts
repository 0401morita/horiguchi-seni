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
  setRecentPosts: actionCreator<{ [key: string]: any }>('SET_RECENT_POSTS')
};

export const getWpRecentPosts = (limit: number) => {
  return (dispatch: Dispatch, getState: () => State) => {
    dispatch(
      actions.setRecentPosts({
        isLoading: true,
        isError: false
      })
    );

    axios
      .get(`/wp-json/wp/v2/posts/?_embed&per_page=${limit}`)
      .then(res => {
        const { status, data } = res;

        if (status === 200 && data.length) {
          dispatch(
            actions.setRecentPosts({
              posts: data
            })
          );
        }
      })
      .catch(({ request, response, message }) => {
        if (response) {
          dispatch(
            actions.setRecentPosts({
              isError: true,
              error: {
                code: request.status,
                message: message
              }
            })
          );
        } else if (request) {
          dispatch(
            actions.setRecentPosts({
              isError: true,
              error: {
                code: request.status,
                message: message
              }
            })
          );
        } else {
          dispatch(
            actions.setRecentPosts({
              isError: true,
              error: {
                code: request.status,
                message: 'Bad Request'
              }
            })
          );
        }
      })
      .finally(() => {
        dispatch(
          actions.setRecentPosts({
            isLoading: false
          })
        );
      });
  };
};
