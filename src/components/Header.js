import React from "react"
import Image from "./ Image"
import BigiLogo from "/home/ai/Documents/www/src/img/BigiLogo.jpg"
import Button from "./Button"

class Header extends React.Component {
  render() {
    return (
      <header className="header"><span>{this.props.title}</span>
      <Image image={BigiLogo} /> 
      <Button /> 
      <Button text="Button" />
      </header>
    )
  }
}

export default Header