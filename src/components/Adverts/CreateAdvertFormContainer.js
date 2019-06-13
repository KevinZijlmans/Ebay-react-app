import React from 'react'
import {connect} from 'react-redux'
import {createAdvert} from '../../actions/adverts'
import AdvertsForm from './AdvertsForm'

class CreateAdvertFormContainer extends React.Component {
  state = {
    title: '',
    description: '',
    email: '',
    price: '',
    phoneNumber: '',
    picture: ''
  }

  onChange = (advert) => {
    this.setState({
      [advert.target.name]: advert.target.value
    })
  }

  onSubmit = (advert) => {
    advert.preventDefault()
    this.setState({
        title: '',
        description: '',
        email: '',
        price: '',
        phoneNumber: '',
        picture: ''
    })
    this.props.createAdvert(this.state)
  }

  render() {
    return (<AdvertsForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />)
  }
}

export default connect(null, {createAdvert})(CreateAdvertFormContainer)