import React from 'react';
import { Post } from '../Post';
import { testData } from '../components/testData';

export const Home = (props) => {

    const printPost = (post) => {
      return <div>
        <h3>{post.title}</h3>
        <p>{post.category}</p>
        <p>{post.text}</p>
        <p>{post.id}</p>
      </div>
    } 

    return (<div>
        Home
        <button>Add Post</button>
        {props.state.posts.map((post) => printPost(post))}
    </div>)
}