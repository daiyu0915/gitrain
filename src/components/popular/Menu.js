import React from "react";
import "@/styles/git.css";

class Menu extends React.Component {
  render() {
    const links = [
      { title: "All", query: "" },
      { title: "JavaScript", query: "javascript" },
      { title: "Ruby", query: "ruby" },
      { title: "Java", query: "java" },
      { title: "CSS", query: "css" },
      { title: "Python", query: "python" },
    ];

    const r = window.location.href.split("=").slice(1).toString();
    console.log(r);

    const list = links.map((item, key) => (
      <div key={key}>
        <a
          href={`/gitrain/#/popular/?q=${item.query}`}
          style={{ color: r === item.query ? "red" : "black" }}
        >
          {item.title}
        </a>
      </div>
    ));
    return <ul id="headbar">{list}</ul>;
  }
}

export default Menu;
