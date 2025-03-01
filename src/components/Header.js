import React from "react"
import Image from "./ Image"
import BigiLogo from "/home/ai/Documents/www/src/img/BigiLogo.jpg"


class Header extends React.Component {
  render() {
    return (
      <header className="header"><span>{this.props.title}</span>
      <Image image={BigiLogo} alt=""/>  
      </header>
    )
  }
}

export default Header