import React from "react"
import Header from "./components/Header"


class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      helpText: "Help text",
      userData: ""
    }
    this.inputClick = this.inputClick.bind(this)
  }

  componentDidUpdate(prevProp) {
    if(this.state.helpText !== "help")
      console.log("Some")
  }

  helpText = "Help Text!"
  render() {
    return(<div className="name">
      <Header title= "BIGICARS" />
      <h1>{this.state.helpText}</h1>
      <h2>{this.state.userData}</h2>
      <input placeholder={this.state.helpText}
             onChange={event => this.setState({userData: event.target.value})}
             onClick={this.inputClick} onMouseEnter={this.mouseOver}/>
      <p>{this.state.helpText === "Help Text!" ? "Yes" : "No"}</p>       
    </div>)
  }
  inputClick() {
    this.setState({ helpText: "Changed" })
    console.log("Clicked")
  }
  mouseOver() {console.log("Mouse Over")}
}

export default App