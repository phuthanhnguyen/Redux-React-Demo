import React, { Component } from 'react';
import { connect } from "react-redux";

import NavBar from '../components/NavBar';
import * as demoActions from '../actions/demoActions';

@connect((store)=>{
  return {
    tweets: store.demo.tweets,
    user: store.demo.user,
    error: store.demo.error,
    fetchedUser: store.demo.fetchedUser,
    fetchedTweets: store.demo.fetchedTweets
  }
})

class Demo extends Component {
  fetchUser(){
    this.props.dispatch(demoActions.fetchUser());
  }

  loadTweets(){
    this.props.dispatch(demoActions.fetchTweets());
  }

  clearTweets(){
    this.props.dispatch(demoActions.clearTweets())
  }

  render(){
    const {user, tweets, fetchedUser, fetchedTweets} = this.props;

    //for tweets part
    let loadTweetsButton = null;
    let clearTweetsButton = null;

    if (!fetchedTweets)
      loadTweetsButton =
        <button className="btn btn-default" onClick={this.loadTweets.bind(this)}>
          Load tweets
        </button>

    else
      clearTweetsButton =
        <div>
          <button className="btn btn-primary" onClick={this.clearTweets.bind(this)}>
            Clear tweets
          </button>
        </div>

    const mapTweets = tweets.map((tweet)=>{
      return (<li key={tweet.id}>{tweet.text}</li>)
    })

    //for user part
    let fetchUserButton = null;
    if (!fetchedUser)
      fetchUserButton =
        <button className="btn btn-primary" onClick={this.fetchUser.bind(this)}>
          Fetch user
        </button>

    return (
      <div>
        <NavBar></NavBar>
        <br/>
        <br/>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2> {user.name} {user.age} </h2>
              <br/>
              {fetchUserButton}
            </div>
            <div className="col-md-6">
              <ul>{mapTweets}</ul>
              {loadTweetsButton}
              {clearTweetsButton}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Demo;
