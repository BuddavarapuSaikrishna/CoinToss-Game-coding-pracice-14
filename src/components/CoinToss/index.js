// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {TossValue: 0, Heads: 0, Tails: 0}

  onChangeToss = () => {
    const {Heads, Tails} = this.state
    const Toss = Math.floor(Math.random() * 2)

    if (Toss === 0) {
      this.setState({Heads: Heads + 1})
    } else {
      this.setState({Tails: Tails + 1})
    }

    this.setState({TossValue: Toss})
  }

  render() {
    const {TossValue, Heads, Tails} = this.state
    console.log(`Heads`, Heads)
    console.log(`Tails`, Tails)

    return (
      <div className="Main-container">
        <div className="Toss-container">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          {TossValue % 2 === 0 ? (
            <img
              className="heads-img"
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
            />
          ) : (
            <img
              className="tails-img"
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
            />
          )}
          <button type="button" onClick={this.onChangeToss}>
            Toss Coin
          </button>
          <div className="count-container">
            <p>Total: {Heads + Tails}</p>
            <p>Heads: {Heads}</p>
            <p>Tails: {Tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
