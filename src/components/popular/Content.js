import React from "react";
import axios from "axios";
// import InfiniteScroll from "react-infinite-scroller";

// import { Spin } from 'antd';
import InfiniteScroll from "react-infinite-scroller";
import LazyLd from "@/components/popular/LazyLd";
import Loading from "@/components/popular/Loading";
import "font-awesome/css/font-awesome.min.css";
import "font-awesome/less/font-awesome.less";
import "@/styles/git.css";

// class Loading extends React.Component {
//     render() {
//       return <div className="load">
//         loading...
//         </div>;
//     }
//   }

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      end: false,
      page: 1,
      items: [],
    };
  }

  componentDidMount() {
    this.search();
  }

  componentDidUpdate(prevProps) {
    if (this.props.query !== prevProps.query) {
      this.search(true);
    }
  }

  search = async (clear = false) => {
    // 另一种获取地址方法
    // function GetQueryString(name) {
    //   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    //   var r = window.location.search.substr(1).match(reg);  //获取url中"?"符后的字符串并正则匹配
    //   var context = "";
    //   if (r != null)
    //     context = r[2];
    //   reg = null;
    //   r = null;
    //   return context === null || context === "" || context === "undefined" ? "" : context;
    // }
    // console.log(GetQueryString("q"));
    const page = clear ? 1 : this.state.page;
    const q = window.location.search.split("=").slice(1).toString();
    console.log(q);
    const url = `https://api.github.com/search/repositories?q=stars:>1+language:${q}&sort=stars&order=desc&type=Repositories&page=${page}`;
    console.log("url", url);
    this.setState({ loading: true });
    //
    //   try {
    //     const res = await axios.get(url)
    //     console.log('res', res.data)
    //     this.setState({
    //       items: res.data.items
    //     })
    //   } catch (e) {
    //     console.log('error', e)
    //   }
    //   this.setState({ loading: false });
    // }

    if (clear) {
      this.setState({ items: [] });
    }
    try {
      const res = await axios.get(url);
      console.log("res", res.data);
      this.setState((state) => ({
        items: clear ? res.data.items : [...state.items, ...res.data.items],
        page: clear ? 1 : state.page + 1,
      }));
    } catch (e) {
      console.log("error", e);
      this.setState({
        end: true,
      });
    }

    this.setState({ loading: false });
  };

  render() {
    const { loading, end } = this.state;
    const cards = this.state.items.map((item, key) => {
      return (
        <div className="card col-lg-3 col-md-3 col-sm-6 col-6">
          <div className="it" key={item.id}>
            <div className="num">#{key + 1}</div>
            <div className="img">
              {<LazyLd width={150} height={150} src={item.owner.avatar_url} />}
              {/* <img src={item.owner.avatar_url} style={{ width: '150px', height: '150px',}} /> */}
              {/* 无占位图 */}
            </div>
            <div className="name">
              <a href={item.html_url}>{item.name}</a>
            </div>
            <div className="desc">
              <div>
                <i className="fa fa-user" id="u" />
                <a href={item.owner.html_url}>{item.name}</a>
              </div>
              <div>
                <i className="fa fa-star" id="s" />
                <span>{item.stargazers_count} stars</span>
              </div>
              <div>
                <i className="fa fa-code-fork" id="c" />
                <span>{item.forks_count} forks</span>
              </div>
              <div>
                <i className="fa fa-exclamation-triangle" id="t" />
                <span>{item.open_issues_count} open_issues</span>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        {/* {loading ? <Loading />
          : ( */}
        <InfiniteScroll
          initialLoad={false}
          loadMore={() => this.search(false)}
          hasMore={!loading || end}
          loader={null}
        >
          <div className="content">{cards}</div>
          {loading && <Loading />}
        </InfiniteScroll>
      </div>
    );
  }
}
export default Content;
