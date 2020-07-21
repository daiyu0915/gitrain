import React from "react";
import Menu from "@/components/popular/Menu";
import "@/styles/git.css";

class Header extends React.Component {
  render() {
    const { onClick, current } = this.props;
    return (
      <div>
        <Menu onClick={onClick} current={current} />
      </div>
    );
  }
}

export default Header;
