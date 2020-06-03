import React, { Component } from 'react';
import axios from 'axios';
// import axios from '../../axios'
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state={
        posts:[],
        selectedPostId:null
    }
    componentDidMount(){
        axios.get('/posts')
        .then(response=>{
            const posts=response.data.slice(0,6);
            const updatedPost=posts.map(post=>{
                return {...post,
                author:'Ayush'
                }
            })
            this.setState({
                posts:updatedPost
            })
        })
        .catch(error=>console.log(error))
    }
    postSelectedHandler=(id)=>{
        this.setState({
            selectedPostId:id
        })
    }
    render () {
       const post=this.state.posts.map(post=>{
          return <Post 
                     author={post.author} 
                     title={post.title} 
                     key={post.id}
                     clicked={()=>this.postSelectedHandler(post.id)}
                     />
       });

        return (
            <div>
                <section className="Posts">
                   {post}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;