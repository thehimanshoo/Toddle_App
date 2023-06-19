

export const GET_ALL_POSTS_REQUEST = 'GET_ALL_POSTS_REQUEST';
export const GET_ALL_POSTS_SUCCESS = 'GET_ALL_POSTS_SUCCESS';
export const GET_ALL_POSTS_FAILURE = 'GET_ALL_POSTS_FAILURE';

export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const CREATE_POST_FAILURE = 'CREATE_POST_FAILURE';

export const CREATE_BOARD_SUCCESS = 'CREATE_BOARD_SUCCESS';
export const CREATE_BOARD_FAILURE = 'CREATE_BOARD_FAILURE';

export const GET_POST_REQUEST = 'GET_POST_REQUEST';
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
export const GET_POST_FAILURE = 'GET_POST_FAILURE';


export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE';

export const DELETE_BOARD_SUCCESS = 'DELETE_BOARD_SUCCESS';
export const DELETE_BOARD_FAILURE = 'DELETE_BOARD_FAILURE';

export const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
export const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';

export const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
export const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
export const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';




export const createBoard = (board) => {
    return async (dispatch) => {
        try {

                dispatch({type : CREATE_BOARD_SUCCESS, payload : board});
            
        }
        catch (error) {
            console.error(error);
            dispatch({type : CREATE_BOARD_FAILURE , payload : {error : error}});
        }
    };
};

// export const getAllPosts = () => {
//     return async (dispatch) => {
//         try {
//             if(userUtil.isLoggedIn()) {
//                 let token = userUtil.getToken();
//                 authUtil.setAuthToken(token);
//                 dispatch({type : GET_ALL_POSTS_REQUEST});
//                 let dataUrl = `/api/posts/`;
//                 let response = await Axios.get(dataUrl);
//                 dispatch({type : GET_ALL_POSTS_SUCCESS, payload : response.data});
//             }
//         }
//         catch (error) {
//             console.error(error);
//             dispatch({type : GET_ALL_POSTS_FAILURE , payload : {error : error}});
//         }
//     };
// };

export const createPost = (post) => {
    return async (dispatch) => {
        try {
                dispatch({type : CREATE_POST_SUCCESS, payload : post});
            
        }
        catch (error) {
            console.error(error);
            dispatch({type : CREATE_POST_FAILURE , payload : {error : error}});
        }
    };
};



// export const getPost = (postId) => {
//     return async (dispatch) => {
//         try {
//             if(userUtil.isLoggedIn()) {
//                 let token = userUtil.getToken();
//                 authUtil.setAuthToken(token);
//                 dispatch({type : GET_POST_REQUEST});
//                 let dataUrl = `/api/posts/${postId}`;
//                 let response = await Axios.get(dataUrl);
//                 dispatch({type : GET_POST_SUCCESS, payload : response.data});
//             }
//         }
//         catch (error) {
//             console.error(error);
//             dispatch({type : GET_POST_FAILURE , payload : {error : error}});
//         }
//     };
// };

// export const deletePost = (postId) => {
//     return async (dispatch) => {
//         try {
//             if(userUtil.isLoggedIn()) {
//                 let token = userUtil.getToken();
//                 authUtil.setAuthToken(token);
//                 dispatch({type : DELETE_POST_REQUEST});
//                 let dataUrl = `/api/posts/${postId}`;
//                 let response = await Axios.delete(dataUrl);
//                 dispatch({type : DELETE_POST_SUCCESS, payload : response.data});
//                 dispatch(alertActions.setAlert('Post is Deleted' , 'success'));
//             }
//         }
//         catch (error) {
//             console.error(error);
//             dispatch({type : DELETE_POST_FAILURE , payload : {error : error}});
//         }
//     };
// };

export const deleteBoard = (id) => {
    return async (dispatch) => {
        try {
                dispatch({type : DELETE_BOARD_SUCCESS, payload : id});
                
            }
        
        catch (error) {
            console.error(error);
            dispatch({type : DELETE_BOARD_FAILURE , payload : {error : error}});
        }
    };
};

// export const likePost = (postId) => {
//     return async (dispatch) => {
//         try {
//             if(userUtil.isLoggedIn()) {
//                 let token = userUtil.getToken();
//                 authUtil.setAuthToken(token);
//                 dispatch({type : LIKE_POST_REQUEST});
//                 let dataUrl = `/api/posts/like/${postId}`;
//                 let response = await Axios.put(dataUrl, postId);
//                 dispatch({type : LIKE_POST_SUCCESS, payload : response.data});
//             }
//         }
//         catch (error) {
//             console.error(error);
//             dispatch({type : LIKE_POST_FAILURE , payload : {error : error}});
//         }
//     };
// };

// export const unlikePost = (postId) => {
//     return async (dispatch) => {
//         try {
//             if(userUtil.isLoggedIn()) {
//                 let token = userUtil.getToken();
//                 authUtil.setAuthToken(token);
//                 dispatch({type : UNLIKE_POST_REQUEST});
//                 let dataUrl = `/api/posts/unlike/${postId}`;
//                 let response = await Axios.put(dataUrl, postId);
//                 dispatch({type : UNLIKE_POST_SUCCESS, payload : response.data});
//             }
//         }
//         catch (error) {
//             console.error(error);
//             dispatch({type : UNLIKE_POST_FAILURE , payload : {error : error}});
//         }
//     };
// };




