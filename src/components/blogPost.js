import React, { Component } from 'react';
import { BlogWrapper, Title, Content } from '../styledComponents/blog-post-sc';

class BlogPost extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showContent: false,
		}
	}

	handleClick = () => {
		if (this.state.showContent === true) {
			this.setState({
				showContent: false
			})
		} else {
			this.setState({
				showContent: true
			})
		}

	}

	render() {
		return (
			<div>
				<BlogWrapper>
					<Title onClick={() => this.handleClick()}>
						{this.props.title}
					</Title>
					<Content style={{display:this.state.showContent ? "block" : "none"}}>
						{this.props.content}
					</Content>
				</BlogWrapper>
			</div>
		)
	}
}

export default BlogPost;
