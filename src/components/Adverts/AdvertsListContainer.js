import React from 'react'
import {loadAdverts} from '../../actions/adverts'
import {connect} from 'react-redux'
import AdvertsList from './AdvertsList'
import './Adverts.css'

class AdvertsListContainer extends React.Component {
  componentDidMount() {
    this.props.loadAdverts()
  }
  render() {
    return <AdvertsList adverts={this.props.adverts} />
  }
}
const mapStateToProps = state => {
    return {
        adverts: state.adverts
    }
}
export default connect(mapStateToProps, {loadAdverts})(AdvertsListContainer)