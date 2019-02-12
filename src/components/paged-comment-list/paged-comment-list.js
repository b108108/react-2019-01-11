import React, { Component } from 'react'
import {connect} from 'react-redux'
import Loader from '../common/loader';
import { loadCommentsPage } from '../../ac'
import Pager from 'react-pager';
import 'bootstrap3/dist/css/bootstrap.css'
import { commentsPageSelector } from '../../selectors'

class PagedCommentList extends Component {

    state = {
        pageSize: 5,
        pagerVisiblePages: 3
    }

    componentDidMount() {
        const {loadCommentsPage, pageNumber, commentsPage} = this.props
        const {pageSize} = this.state

        if (!commentsPage) {
            loadCommentsPage(pageSize, pageNumber)
        }
    }

    render() {
        return (
            <div>
                <h3>Paged comments</h3>
                {this.body}
                {this.pager}
            </div>
        )
    }

    get body() {
        const { commentsPage }  = this.props

        if (!commentsPage) return <Loader />

        const body = commentsPage.length ? (
            <ul>
                {commentsPage.map((comment) => (
                    <li key={comment.id}>
                        <div>
                            <h4>{comment.user}</h4>
                            <p>{comment.text}</p>
                        </div>
                    </li>
                ))}
            </ul>
        ) : (
            <h3 className="test--comment-list__empty">No comments</h3>
        )

        return <div>
            {body}
        </div>
    }

    get pager() {
        const { loaded, totalCount } = this.props.pagedComments
        const {pageSize} = this.state
        const pagesCount = totalCount/pageSize

        if(!loaded || pagesCount == 0) return null

        return <div>
            <Pager
              total={pagesCount}
              current={this.props.pageNumber}
              visiblePages={this.state.pagerVisiblePages}
              className="pagination-sm pull-left"
              onPageChanged={this.props.handlePageChanged} />
        </div>
    }
}

export default connect(
  (state, ownProps) => ({
      pagedComments: state.pagedComments,
      commentsPage: commentsPageSelector(state, ownProps)
  }),
  (dispatch) => ({
      loadCommentsPage: (pageSize, pageNumber) => dispatch(loadCommentsPage(pageSize, pageNumber))
  })
)(PagedCommentList)