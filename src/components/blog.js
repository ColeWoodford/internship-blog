import React, { Component } from 'react';
import BlogPost from './blogPost'
import { data } from '../data/blogData';

class Blog extends Component {

  makeBlogPosts = () => {
    const blogPosts = data.map(post => {
      return <BlogPost title={post.title} content={post.content} />
    })
    return blogPosts;
  }
  
  render() {
		return (
			<div>
				{this.makeBlogPosts()}
			</div>
		)
	}
}

export default Blog;