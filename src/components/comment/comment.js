import React from 'react'
import PropTypes from 'prop-types'

function Comment(props) {
    const { user, text } = props.comment
    return (        
        <div>
            <h4>{user}</h4>
            <p>{text}</p>
        </div>        
    )
}

export const TypeComment = PropTypes.shape({
    user: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
})

Comment.propTypes = {
    comment: TypeComment,
};

export default Comment
