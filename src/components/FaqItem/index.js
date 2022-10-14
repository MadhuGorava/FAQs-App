// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isTouched: false}

  onShowAns = () => {
    this.setState(prevState => ({isTouched: !prevState.isTouched}))
  }

  renderButton = () => {
    const {isTouched} = this.state
    const btnUrl = isTouched
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const btnAltText = isTouched ? 'minus' : 'plus'

    return (
      <button type="button" className="btn-text" onClick={this.onShowAns}>
        <img src={btnUrl} alt={btnAltText} />
      </button>
    )
  }

  renderAnsText = () => {
    const {isTouched} = this.state
    const {faqsList} = this.props
    const {answerText} = faqsList
    return isTouched ? (
      <p className="ans-text" value="answer">
        {answerText}
      </p>
    ) : (
      ''
    )
  }

  render() {
    const {faqsList} = this.props
    const {questionText} = faqsList
    return (
      <li className="list-container">
        <div>
          <h1 className="ques-text">{questionText}</h1>
          <hr />
          {this.renderAnsText()}
        </div>
        {this.renderButton()}
      </li>
    )
  }
}

export default FaqItem
