import axios from "axios";

export function fetchTweets(){
  return function(dispatch){
    axios.get("http://rest.learncode.academy/api/test123/tweets")
      .then((response)=>{
        dispatch({
          type: 'FETCH_TWEETS_FULFILLED',
          payload: response.data
        })
      })
      .catch((err)=>{
        dispatch({
          type: 'FETCH_TWEETS_REJECTED',
          payload: err
        })
      })
  }
}

export function fetchUser(){
  return {
    type: 'FETCH_USER',
    payload: {
      name: 'Thanh',
      age: 23
    }
  }
}

export function clearTweets(){
  return {
    type: 'CLEAR_TWEETS'
  }
}
