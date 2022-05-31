import axios from "axios";

export const GET_POSTS = "GET_POSTS";
export const GET_ALL_POSTS = "GET_ALL_POSTS"
export const ADD_POST = "ADD_POST"
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST"
export const GET_POST_ERRORS = "GET_POST_ERRORS"

export const getPosts = (num) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/post/`)
      .then((res) => {
        const array = res.data.slice(0, num)
        dispatch({ type: GET_POSTS, payload: array });
        dispatch({ type: GET_ALL_POSTS, payload: res.data })
      })
      .catch((err) => console.log(err));
  };
};

export const addPost = (data) => {
  return async (dispatch) => {
    const res = await axios
      .post(`${process.env.REACT_APP_API_URL}api/post/`, data);
    if (res.data.errors) {
      dispatch({ type: GET_POST_ERRORS, payload: res.data.errors });
    } else {
      dispatch({ type: GET_POST_ERRORS, payload: "" });
    }
  }
}


export const updatePost = (postId, message) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_URL}api/post/${postId}`,
      data: { message },
    })
      .then((res) => {
        dispatch({ type: UPDATE_POST, payload: { message, postId } });
      })
      .catch((err) => console.log(err));
  };
};


export const deletePost = (postId) => {
  return (dispatch) => {
    return axios({
      method: 'delete',
      url: `${process.env.REACT_APP_API_URL}api/post/${postId}`
    })
    .then((res) => {
      dispatch({ type: DELETE_POST, payload: { postId }})
    })
    .catch((err) => console.log(err))
  }
}