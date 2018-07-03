import React, { Component } from 'react';
import './App.css';
import { Home } from './pageComponents/Home';
import { Post } from './Post';
import { testData } from './components/testData';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      posts: [
        testData[0],
      ],
    }

    this.newPost = this.newPost.bind(this);
    this.testPopulatePosts = this.testPopulatePosts.bind(this);
  }

  newPost(title, category, text) {
    this.setState((prevState) => ({
      posts: [new Post(title, category, text), ...prevState.posts]
    }))
  }

  testPopulatePosts () {
    const post = testData[Math.floor(Math.random()*testData.length)]
    console.log('text ', post.text);
    this.newPost(post.title, post.category, post.text);
  }

  render() {
    return (
      <div className="App">
        <button onClick={()=>this.testPopulatePosts()}> Test Populate Posts </button>
        <Home state={this.state}/>
      </div>
        
    );
  }
}

export default App;
