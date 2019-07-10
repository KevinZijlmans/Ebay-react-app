import request from 'superagent'

export const COMMENTS_FETCHED = 'COMMENTS_FETCHED'
export const COMMENT_CREATE_SUCCESS = 'COMMENT_CREATE_SUCCESS'

const baseUrl = 'http://localhost:4000'

const commentsFetched = comments => ({
    type: COMMENTS_FETCHED,
    comments
  })
  
  export const loadComments = (id) => (dispatch, getState) => {
  
    if (getState().comments.length) 
      return
      request(`${baseUrl}/adverts/${id}/comments`)
        .then(response => {
          dispatch(commentsFetched(response.body.comments))
        })
          .catch(console.error)
  }
  
  const commentCreateSuccess = comment => ({
    type: COMMENT_CREATE_SUCCESS,
    comment
  })
  
  export const createComment = (data) => (dispatch) => { 
    request
      .post(`${baseUrl}/comments`)
      .send(data)
      .then(response => {
        dispatch(commentCreateSuccess(response.body))
      })
      .catch(console.error)
  }