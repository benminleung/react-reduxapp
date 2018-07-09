import React from 'react';

import { connect } from 'react-redux'

import { Button } from '../components/Button';
import { DELETE_POST } from '../actions';

const PostNumber = (props) => (
    <section>
        <div className='buttonsBar'>
            <Button text='Back to Posts' type='neutral' toLink='home'/>
        </div>
        <div>
            <h1>{props.post.title}</h1>
            <h3>by {props.post.name}</h3>
        </div>
        <div>
            <h3>Category: {props.post.category}</h3>
        </div>
        <div>
            <p>{props.post.text}</p>
        </div>
        <div className='buttonsBar'>
            <Button text='Edit' type='amber'/>
            <Button text='Delete Post' toLink='home' type='alert' click={()=>props.posts(props.post)}/>
        </div>
    </section>
)

const mapStateToProps = state => {
    return {data: state}
}

const mapDispatchToProps = dispatch => {
    return {posts: data => dispatch({ type: DELETE_POST, data: data })}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostNumber);