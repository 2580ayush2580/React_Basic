import React, { Component } from 'react';
import {Route,NavLink,Switch,Redirect} from 'react-router-dom'
// import axios from '../../axios'
// import Post from '../../components/Post/Post';
import Posts from './posts/posts'
import './Blog.css';
import asyncComponent from '../../hoc/asyncComponent'
// import NewPost from './NewPost/NewPost';

const AsyncNewPost = asyncComponent(()=>{
    return import('./NewPost/NewPost')
})

class Blog extends Component {  
  state={
      auth:false
  }
    render () {
      

        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                             to='/posts'
                             activeStyle={{
                                 textDecoration:'underline',
                                 color:'#fa923f'
                             }}
                              exact>Post</NavLink></li>
                            <li><NavLink to={{
                                pathname:'/new-post',
                                // hash:'#submit',
                                // search:'?name=ayush'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path='/' exact render={()=><h1>Home</h1>}/>
                <Route path='/new-post'  render={()=><h1>New Post</h1>}/> */}
                <Route path='/posts' component={Posts} />
                <Switch>
                  {/* {this.state.auth ? <Route path='/new-post' component={NewPost} />:null} */}
                  <Route path='/new-post' component={AsyncNewPost} />
                  {/* <Redirect from='/' to='/posts' /> */}
                  <Route render={()=><h1>Page not Found</h1>}/>
                </Switch>
                {/* <Posts/>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;