import React from 'react'
import {connect} from 'react-redux'
import AdvertDetails from './AdvertDetails'
import {loadAdvert} from '../../actions/adverts'

class AdvertDetailsContainer extends React.Component {

  componentDidMount() {
    this.props.loadAdvert(Number(this.props.match.params.id))
  }

  render() {
      if (!this.props.advert) {
        return 'Loading...'
      } else {
        return <AdvertDetails 
          advert={this.props.advert}
          comments={this.props.comments}
        />
      }
  }
}

const mapStateToProps = state => ({
  advert: state.advert,
  comments: state.comments
})

export default connect(mapStateToProps, {loadAdvert})(AdvertDetailsContainer)