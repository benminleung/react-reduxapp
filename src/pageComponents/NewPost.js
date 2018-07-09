import React, { Component } from 'react';
import { Button } from '../components/Button';
import { Post } from '../Post';

import { connect } from 'react-redux';
import { dispatch } from 'react-redux';
import { NEW_POST } from '../actions';


class NewPost extends Component {

    constructor (props){
        super(props);
        this.state = {
            title: '',
            category: '',
            text: '',
            name: '',
        }
    }

    inputChange(field, value){
        // console.log('--field: ', field, ' -- value changed to: ', value)
        this.setState({
            [field]: value
        })
    }

    handleSubmit = (e) => {
        console.log('handle submit', this.state.title, this.state.category, this.state.text, this.state.name)
        this.props.posts(new Post(this.state.title, this.state.category, this.state.text, this.state.name))
    }

    render(){
        console.log('state', this.props)
        return( <section>
            <h1>New Post</h1>
            <div>
                <div className='buttonsBar'>
                    <Button toLink='home' type='neutral' text='Back'/>
                </div>
                <div>
                    <h3>Name of poster:</h3>
                    <input type="text" value={this.state.name} onChange={(e)=>this.inputChange('name', e.target.value)}/>
                </div>
                <div>
                    <h3>Title:</h3>
                    <input type="text" value={this.state.title} onChange={(e)=>this.inputChange('title', e.target.value)}/>
                </div>
                <div>
                    <h3>Category:</h3>
                    <input type="text" value={this.state.category} onChange={(e)=>this.inputChange('category', e.target.value)}/>
                </div>
            </div>
            <div>
                <h3>Write New Post</h3>
                <textarea name="" id="" cols="30" rows="10" value={this.state.text} onChange={(e)=>this.inputChange('text', e.target.value)}></textarea>
            </div>
            <div className='buttonsBar'>
                <Button toLink='home' type='neutral' text='Cancel'/>
                <Button text='Save' toLink='home' click={()=>this.handleSubmit()} />
            </div>
        </section>)
    }
   
}

const mapStateToProps = state => {
    return {data: state}
}

const mapDispatchToProps = dispatch => {
    return {posts: data => dispatch({ type: NEW_POST, data: data })}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);