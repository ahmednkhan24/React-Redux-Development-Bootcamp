import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    // get just the userId attribute from all the posts, and then remove any duplicates
    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    userIds.forEach(id => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async (dispatch, getState) => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({ 
        type: 'FETCH_POSTS',
        payload: response.data
    });
};

export const fetchUser = id => async (dispatch, getState) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    });
};

// same thing except
// export const fetchPosts = () => {
//     return async (dispatch, getState) => {
//         const response = await jsonPlaceholder.get('/posts');
//         dispatch({ 
//             type: 'FETCH_POSTS', 
//             payload: response 
//         });
//     };
// };

/*
 * actions can ONLY return objects with vanilla redux
 * 
 * middlewares (like redux-thunk) allows actions to return objects and/or functions
 */
