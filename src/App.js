import React from "react"
import Header from "./components/Header"


class App extends React.Component {
  helpText = "Help Text!"
  render() {
    return(<div className="name">
      <Header title= "BIGICARS" />
      <h1>{this.helpText}</h1>
      <input className="input" placeholder={this.helpText}
             onClick={this.inputClick} onMouseEnter={this.mouseOver}/>
      <p>{this.helpText === "Help Text!" ? "Yes" : "No"}</p>       
    </div>)
  }
  inputClick() {console.log("Clicked")}
  mouseOver() {console.log("Mouse Over")}
}

export default App