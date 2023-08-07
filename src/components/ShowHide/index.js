// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    fN: false,
    lN: false,
    fnContainer: 'name-bg-2',
    firstName: null,
    lnContainer: 'name-bg-2',
    lastName: null,
  }

  firstName = () => {
    const {fN} = this.state
    if (fN === true) {
      this.setState(prevState => ({
        fN: false,
        fnContainer: 'name-bg-2',
        firstName: null,
      }))
    } else {
      this.setState(prevState => ({
        fN: true,
        fnContainer: 'name-bg-container',
        firstName: 'Joe',
      }))
    }
  }

  lastName = () => {
    const {lN} = this.state
    if (lN === true) {
      this.setState(prevState => ({
        lN: false,
        lnContainer: 'name-bg-2',
        lastName: null,
      }))
    } else {
      this.setState(prevState => ({
        lN: true,
        lnContainer: 'name-bg-container',
        lastName: 'Jonas',
      }))
    }
  }

  render() {
    const {fnContainer, firstName, lnContainer, lastName} = this.state
    return (
      <div className="show-hide-bg-container">
        <h1 className="show-hide-main-heading">Show/Hide</h1>
        <div className="btn-name-container">
          <div className="btn-name-inner-container">
            <button
              type="button"
              className="show-hide-button"
              onClick={this.firstName}
            >
              Show/Hide Firstname
            </button>
            <h1 className={fnContainer}>{firstName}</h1>
          </div>
          <div className="btn-name-inner-container">
            <button
              type="button"
              className="show-hide-button"
              onClick={this.lastName}
            >
              Show/Hide Lastname
            </button>
            <h1 className={lnContainer}>{lastName}</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
