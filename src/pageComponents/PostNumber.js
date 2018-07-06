import React from 'react';
import { Button } from '../components/Button';


export const PostNumber = (props) => (
    <section>
        <div></div>
        <div>
            <h1>Title: {props.post.title}</h1>
            <h1>{props.id}</h1>
        </div>
        <div>
            <h1>Category: {props.post.category}</h1>
        </div>
        <div>
            <p>{props.post.text}</p>
        </div>
        <div>
            <Button text='Back to Posts' toLink='home'/>
            <Button text='Delete Post' toLink='home' click={()=>props.deletePost(props.post.id)}/>
        </div>
    </section>
)