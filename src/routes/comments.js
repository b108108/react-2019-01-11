import React, {Component} from 'react'
import {Route} from 'react-router-dom';
import PagedCommentList from '../components/paged-comment-list';
import {Switch} from 'react-router-dom';

class CommentsPage extends Component {

    render() {
          return (
              <div>
                  <Switch>
                      <Route path={'/comments/:pageNumber'} 
                            render={ ({match}) => { 
                                return this.getComments(parseInt(match.params.pageNumber)) 
                            } }/>
                      <Route path={'/comments'} render={() => { 
                            return this.getComments(0) 
                            }}/>
                  </Switch>
              </div>
          )
      }
  
    handlePageChanged = (newPage) => this.props.history.push(`/comments/${newPage}`)
  
    getComments = (pageNumber) => {
           return <PagedCommentList 
                    key={pageNumber} 
                    pageNumber={pageNumber} 
                    handlePageChanged={this.handlePageChanged}/>
    }
  }
  
  export default CommentsPage
