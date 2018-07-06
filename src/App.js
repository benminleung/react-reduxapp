import React, { Component } from 'react';
import './App.css';
import { Home } from './pageComponents/Home';
import { Post } from './Post';
import { testData } from './components/testData';
import {
   BrowserRouter as Router,
   Route,
   Switch,
   Link,
} from 'react-router-dom';

import { navDir } from './components/navDir';
import { NewPost } from './pageComponents/NewPost';
import { PostNumber } from './pageComponents/PostNumber';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      posts: [
      ],
    }

    this.newPost = this.newPost.bind(this);
    this.testPopulatePosts = this.testPopulatePosts.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }

  newPost(title, category, text) {
    this.setState((prevState) => ({
      posts: [new Post(title, category, text), ...prevState.posts]
    }))
  }

  testPopulatePosts () {
    const post = testData[Math.floor(Math.random()*testData.length)]
    this.newPost(post.title, post.category, post.text);
  }

  deletePost (checkId) {
    this.setState((prevState)=>{
      return {posts: [...prevState.posts].filter((item)=> item.id !== checkId)}
    })
  }


  //checks if id exists.
  _checkId (listOfPosts, checkId) {
    return listOfPosts.filter((item)=>item.id === checkId)[0]
  }

  render() {
    
    return (
      <div className="App">
      <Router>
        <React.Fragment>
          <button onClick={()=>this.testPopulatePosts()}> Test Populate Posts </button>
          <Switch>
            <Route exact path={navDir.home} render={(props)=><Home state={this.state} {...props} deletePost={this.deletePost}/> } />
            <Route exact path={navDir.newPost} render={()=><NewPost newPost={this.newPost}/>} />
            {/* <Route exact path={navDir.postNumber} render={()=><PostNumber state={this.state}/>} /> */}
            <Route exact path={`${navDir.post}/:postId`} render={(props)=>{
              const post = this._checkId(this.state.posts, props.match.params.postId)
              return post
              ? (<PostNumber state={this.state} post={post} deletePost={this.deletePost}/>)
              : (<div>ERROR PAGE</div>)
            }} />
            
            {/* <PostNumber state={this.state} id={props.match.params.postId} {...props}/>} /> */}
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
		getData: data => dispatch({ type: 'GET_DATA', data })
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
