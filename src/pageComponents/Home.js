import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import { connect } from 'react-redux';

import { Post } from '../Post';
import { testData } from '../components/testData';
import { navDir } from '../components/navDir';
import { Button } from '../components/Button';
import { NEW_POST } from '../actions';

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            search: '',
        }
    }

    testPopulatePosts () {
        const post = testData[Math.floor(Math.random()*testData.length)]
        return new Post(post.title, post.category, post.text, post.name);
    }

    handleChange (newSearch) {
        this.setState({
            search: newSearch,
        })
    }

    printPost = (post) => {
        return <div key={post.id}>
            <Link to={'/post/' + post.id} className='post'>
                <h3>{post.title}</h3>
                <p>by {post.name}</p>
                <div className='post-category'>
                    <p className='post-category-tag'>{post.category}</p>
                    <p className='post-category-tag'>Sport</p>
                    <p className='post-category-tag'>Gym</p>
                    <p className='post-category-tag'>Team work</p>
                    <p className='post-category-tag'>Integrify</p>
                </div>
            </Link>
        </div>
    }

    filterList = (posts, search) => {
        return posts.filter((item) => Object.keys(item).some((key) => item[key].toLowerCase().includes(search.toLowerCase())));
    }

    render(){
        console.log(this.state.search)
        return (
            <section>
                <h1>List of entries</h1>
                <div className='buttonsBar'>
                    <Button text='Add New Entry' toLink={'newPost'}/>
                    <Button text='TEST add post' type='neutral' click={()=>this.props.posts(this.testPopulatePosts())}> Test Populate Posts </Button>
                </div>

                <div>
                    <input type='text' placeholder='Search posts' className='searchInput' onChange={(e)=>this.handleChange(e.target.value)} />
                </div>
                {this.props.data.posts && this.filterList(this.props.data.posts, this.state.search).map((post)=>this.printPost(post))}
            </section>
        )
    }
}

const mapStateToProps = state => {
  return {data: state}
}

const mapDispatchToProps = dispatch => {
	return {
		posts: data => dispatch({ type: NEW_POST, data: data })
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);