// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {id: 0}

  leftArrow = () => {
    const {id} = this.state
    if (id > 0) {
      this.setState(prevState => {
        console.log(`${prevState.id - 1}`)
        return {id: prevState.id - 1}
      })
    }
  }

  rightArrow = () => {
    const {reviewsList} = this.props
    const {id} = this.state
    console.log(reviewsList.length)
    if (id < reviewsList.length - 1) {
      this.setState(prevState => {
        console.log(`${prevState.id + 1}`)
        return {id: prevState.id + 1}
      })
    }
  }

  render() {
    const {reviewsList} = this.props
    const {id} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="button-container">
          <button
            type="button"
            className="button"
            onClick={this.leftArrow}
            testId="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="img-container">
            <img
              src={reviewsList[id].imgUrl}
              alt={reviewsList[id].username}
              className="profile"
            />
            <p className="username">{reviewsList[id].username}</p>
            <p>{reviewsList[id].companyName}</p>
            <p>{reviewsList[id].description}</p>
          </div>
          <button
            type="button"
            className="button"
            onClick={this.rightArrow}
            testId="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
