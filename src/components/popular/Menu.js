import React from "react";
import { HashRouter as Router, Link, withRouter } from "react-router-dom";
// import Content from "@/components/popular/Content";
import "@/styles/git.css";

class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      links: [
        { title: "All", query: "" },
        { title: "JavaScript", query: "javascript" },
        { title: "Ruby", query: "ruby" },
        { title: "Java", query: "java" },
        { title: "CSS", query: "css" },
        { title: "Python", query: "python" },
      ],
    };
  }

  render() {
    const r = window.location.href.split("=").slice(1).toString();
    console.log(r);
    const {links} = this.state;
    return (
      <ul id="headbar">
        {links.map((item, key) => (
          // <div key={key}>
          //   <a
          //     href={`/gitrain/#/popular/?q=${item.query}`}
          //     style={{ color: r === item.query ? "red" : "black" }}
          //   >
          //     {item.title}
          //   </a>
          // </div>

          <Router>
            <div key={key}>
              <Link
                onClick={() => (console.log(`click${key}`))}
                to={{ pathname: `/popular/?q=${item.query}` }}
                style={{ color: r === item.query ? "red" : "black" }}
              >
                {item.title}
              </Link>
              {/* <Switch>
              <Route path={{ `/popular/?q=${item.query}` }} component={Content} />
            </Switch> */}
            </div>
          </Router>

        ))}
      </ul>
    );
  };
}

export default withRouter(Menu);
