import React, { Component } from 'react';
import {
   BrowserRouter as Router,
   Route,
   Switch,
   Link,
} from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import Home from './pageComponents/Home';
import { Post } from './Post';
import { testData } from './components/testData';
import { navDir } from './components/navDir';
import NewPost from './pageComponents/NewPost';
import  PostNumber from './pageComponents/PostNumber';
import { NEW_POST } from './actions';
import { Button } from './components/Button';
import logo from './images/integrifyLogo.svg';



class App extends Component {

  //checks if id exists.
  _checkId (listOfPosts, checkId) {
    return listOfPosts.filter((item)=>item.id === checkId)[0]
  }

  render() {
    
    return (
      <div className="App">
      <Router>
        <React.Fragment>
          <section class='sec-header'>
            <img src={logo} alt=""/>
            <h1>
              Integrify 2018 Study Sync
            </h1>
            <Button text='Login' />
          </section>
          <Switch>
            <Route exact path={navDir.home} render={(props)=><Home /> } />
            <Route exact path={navDir.newPost} render={()=><NewPost />} />
            <Route exact path={`${navDir.post}/:postId`} render={(props)=>{
              const post = this._checkId(this.props.data.posts, props.match.params.postId)
              return post
              ? (<PostNumber post={post} deletePost={this.deletePost}/>)
              : (<div>ERROR PAGE</div>)
            }} />
          </Switch>
        </React.Fragment>
      </Router>
      </div>
        
    );
  }
}

//gives state
const mapStateToProps = state => {
	return {
		data: state
	};
};

//connects with the action
const mapDispatchToProps = dispatch => {
	return {
		posts: data => dispatch({ type: NEW_POST, data: data })
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
