import React, { Component } from 'react';
import { Button } from '../components/Button';

export class NewPost extends Component {

    constructor (props){
        super(props);
        this.state = {
            title: '',
            category: '',
            text: '',
        }
    }

    inputChange(field, value){
        // console.log('--field: ', field, ' -- value changed to: ', value)
        this.setState({
            [field]: value
        })
    }

    render(){
        return( <section>
            New Post
            <div>
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
            <div>
                <Button toLink='home' text='Cancel'/>
                <Button text='Save' toLink='home' click={()=>this.props.newPost(this.state.title, this.state.category, this.state.text)} />
            </div>
        </section>)
    }
   
}