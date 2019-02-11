import React, { Component } from 'react'
import Comment, {TypeComment} from '../comment'
import toggleOpen from '../../decorators/toggleOpen'
import PropTypes from 'prop-types';
import CSSTransition from 'react-addons-css-transition-group'

import config from '../config'

import '../data.css'

export const TypeComments = PropTypes.arrayOf(TypeComment)

class CommentList extends Component {
    static propTypes = {
        comments: TypeComments,

        // from decorator
        isOpen: PropTypes.bool,
        toggleOpenItem: PropTypes.func.isRequired
    }

    static defaultProps = {
        comments: []
    }

    render() {
        const { isOpen, toggleOpenItem } = this.props
        return (
            <div>
                <button className='test--comment__button' onClick={toggleOpenItem}>
                    {isOpen ? 'hide comments' : 'show comments'}
                </button>
                <CSSTransition
                    transitionName="data"
                    transitionEnterTimeout={config.TRANSITION_ENTER}
                    transitionLeaveTimeout={config.TRANSITION_LEAVE}
                >
                    {isOpen ? this.getBody() : null}
                </CSSTransition>
            </div>
        )
    }

    getBody() {
        const { comments } = this.props
        const body = comments.length ? (
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id} className='test--comment__list'>
                        <Comment comment={comment} />
                    </li>
                ))}
            </ul>
        ) : (
            <h3>No comments yet</h3>
        )
        return <div>{body}</div>
    }
}

export default toggleOpen(CommentList)
