import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addComment} from '../../ac';

class AddComment extends Component {
    state = {
        text: ''
    }

    addComment(){
        this.setState({text: ''})
        this.props.addComment(this.state.text, this.props.articleId)
    }

    onCommentChange(event){
        this.setState({text: event.target.value})
    }

    render(){
       const { text } = this.state; 
       return (
            <div>
                <h4>Add Comment</h4>
                <button onClick={() => this.addComment()}>Add</button>
                <input value={text} onChange={(e)=>this.onCommentChange(e)}/>
            </div>
        )
    }
}

export default connect(null,{
    addComment
})(AddComment)