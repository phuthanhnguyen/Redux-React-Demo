export default function reducer(state={
  tweets: [],
  user: {
    name: null,
    age: null
  },
  error: null,
  fetchedTweets: false,
  fetchedUser: false
}, action) {
  switch (action.type) {
    case "FETCH_TWEETS_FULFILLED": {
      return {
        ...state,
        tweets: state.tweets.concat(action.payload),
        fetchedTweets: true
      }
    }
    case "FETCH_TWEETS_REJECTED": {
      return {...state, error: action.payload}
    }
    case "FETCH_USER": {
      return {...state, user: action.payload, fetchUser: true}
    }
    case "CLEAR_TWEETS": {
      return {...state, tweets: [], fetchedTweets:false}
    }
    default: {
      return state;
    }
  }
}
