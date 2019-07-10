import React from 'react'
import {connect} from 'react-redux'
import {createComment} from '../../actions/comments'
import CommentForm from './CommentForm'

class CreateCommentFormContainer extends React.Component {
  state = {
    text: '',
    advertId: this.props.match.params.id
  }
  onChange = (comments) => {
    this.setState({
      [comments.target.name]: comments.target.value
    })
  }

  onSubmit = (comments) => {
    comments.preventDefault()
    this.setState({
      text: ''
    })
    this.props.createComment(this.state)
  }

  render() {     console.log(this.props)
    return (
    <CommentForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />)
    
  }
}
const mapStateToProps = state => ({
  advert: state.advert,
  comments: state.comments
})

export default connect(mapStateToProps, {createComment})(CreateCommentFormContainer)