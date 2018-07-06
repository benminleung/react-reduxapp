import React from 'react';
import { Post } from '../Post';
import { testData } from '../components/testData';
import { navDir } from '../components/navDir';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import { Button } from '../components/Button';

export const Home = (props) => {

    const printPost = (post) => {
      return <div>
        <Link to={'/post/' + post.id} className='post' key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.category}</p>
        </Link>
      </div>
    } 

    return (<section>
        Home
        <Button text='New Post' toLink={'newPost'}/>
        {props.state.posts.map((post) => printPost(post))}
        <p>{props.match.params.id}</p>
    </section>)
}