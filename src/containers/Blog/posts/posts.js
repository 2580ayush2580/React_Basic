import React,{Component} from 'react'
import axios from 'axios';
import Post from '../../../components/Post/Post'
import './posts.css'
import {Link,Route} from 'react-router-dom'
import FullPost from '../FullPost/FullPost';


class Posts extends Component {
    state={
        posts:[],
    }
    componentDidMount(){
        console.log(this.props)

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
        // this.props.history.push('/'+id)
        this.setState({
            selectedPostId:id
        })
    }
    render(){
        const post=this.state.posts.map(post=>{
            return <Link to={'/posts/'+post.id}  key={post.id} >
                <Post 
                       author={post.author} 
                       title={post.title} 
                    //    {...this.props}
                       clicked={()=>this.postSelectedHandler(post.id)}
                       />
            </Link>
         });
        return(
           <div>
                <section className="Posts">
                  {post}
                </section>
                <Route path={this.props.match.url + '/:id'} exact  component={FullPost} />
           </div>
        )
    }
}
export default Posts;