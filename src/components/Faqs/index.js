// Write your code here.
import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="app-container">
        <h1 className="heading">FAQs</h1>
        <ul className="list-card">
          {faqsList.map(eachFaq => (
            <FaqItem key={eachFaq.id} faqsList={eachFaq} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Faqs
