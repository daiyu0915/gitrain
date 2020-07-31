import React from "react";
// import { withFormik } from "formik";
import { NavLink } from "react-router-dom";
import style from "@/components/Battle/battle.less";
import "@/styles/index.less";

// import { withFormik } from "formik";




class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: '',
      player2: '',
      disabled: true,
      disabled2: true,
      inputValue: '',
      inputValue2: '',
      put: null,
      put2: null
    };
  }

  handleChange = (e) => {
    this.setState({
      disabled: !(e.target.value.length > 0)
    })
    const name = e.target.value;
    if (name === "") {
      return;
    }
    const reg = /^[\u4e00-\u9fa5]+|[a-zA-Z0-9]+$/;
    if (reg.test(name) === false) {
      this.setState({
        put: 'zxc',
        disabled: true,
      });

      // alert("请不要输入特殊字符!");
      document.getElementById("inputName").value = "";
    }
    this.setState({
      put: null,
      // disabled:true,
    });
    e.preventDefault()
  }

  handleChange2 = (e) => {
    this.setState({
      disabled2: !(e.target.value.length > 0)
    })
    const name = e.target.value;
    if (name === "") {
      return;
    }
    const reg = /^[\u4e00-\u9fa5]+|[a-zA-Z0-9]+$/;
    if (reg.test(name) === false) {
      this.setState({
        put2: 'zxc',
        disabled: true,
      });

      // alert("请不要输入特殊字符!");
      document.getElementById("inputName").value = "";
    }
    this.setState({
      put: null,
      // disabled:true,
    });
    e.preventDefault()
  }

  playerBlur1 = (e) => {
    this.setState({
      inputValue: e.target.value,
    })
  }

  playerBlur2 = (e) => {
    this.setState({
      inputValue2: e.target.value,
    })
  }

  onClick = () => {
    const { inputValue } = this.state
    this.setState({
      player1: inputValue
    })
  }

  onClick2 = () => {
    const { inputValue2 } = this.state
    this.setState({
      player2: inputValue2
    })
  }

  onKeyDown = (e) => {
    if (e.nativeEvent.code === 'Enter') {
      this.setState({
        player1: e.target.value,
      })
    }
  }

  onKeyDown2 = (e) => {
    if (e.nativeEvent.code === 'Enter') {
      this.setState({
        player2: e.target.value,
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  // onput = event => {
  //   // const { put } = this.state;
  //   const name = event.target.value;
  //   if (name === "") {
  //     return;
  //   }
  //   const reg = /^[\u4e00-\u9fa5]+|[a-zA-Z0-9]+$/;
  //   if (reg.test(name) === false) {
  //     this.setState({
  //       put:'zxc',
  //       disabled:true,
  //     });

  //     // alert("请不要输入特殊字符!");
  //     document.getElementById("inputName").value = "";
  //   }
  //   this.setState({
  //     put:null,
  //     // disabled:true,
  //   });
  // };

  cancel = (player) => {
    this.setState({
      [player]: '',
      disabled: true,
      disabled2: true
    })
  }

  render() {
    const { handleKeyDown, startBattle } = this.props;
    const { disabled, disabled2, player1, player2, put, put2 } = this.state;
    return (
      <div style={{display:'flex',justifyContent:'center'}}> 
        <div style={{ width: '80%' }}>
          <h2 className="text-center">Players</h2>
          <form onSubmit={this.handleSubmit}>
            <div className={style.playerBox}>
              <div className={style.play}>
                <h3>Player 1</h3>
                {player1 ? (
                  <div className={style.selected}>
                    <div className={style.info}>
                      <div className={style.imgbox}><img src={`https://github.com/${player1}.png?size=200`} alt='' className={style.playerimg} /></div>
                      <span>{player1}</span>
                    </div>
                    <div>
                      <span role="button" tabIndex='0' className="fa-stack fa-lg" onKeyDown={handleKeyDown} onClick={() => this.cancel('player1')} onKeyPress={this.handleKeyDown}>
                        <i className="fa fa-window-close" />
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className={style.emptyBox}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <input id="user" type="text" placeholder="github user" className={style.emptyIn} onInput={this.onput} onChange={this.handleChange} onBlur={this.playerBlur1} onKeyDown={this.onKeyDown} />
                      {put && (
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                          <span style={{ color: 'red' }}>不特殊!</span>
                          {/* message= type="error" showIcon style={{ width: '50%' }} /> */}
                        </div>
                        )}
                    </div>

                    <button disabled={disabled} type="button" className={disabled === true ? style.submitBtn : style.dis} onClick={this.onClick}>submit</button>
                  </div>
                  )}
              </div>
              <div className={style.play}>
                <h3>Player 2</h3>
                {player2 ? (
                  <div className={style.selected}>
                    <div className={style.info}>
                      <div className={style.imgbox}><img src={`https://github.com/${player2}.png?size=200`} alt='' className={style.playerimg} /></div>
                      <span>{player2}</span>
                    </div>
                    <div>
                      <span role="button" tabIndex='0' className="fa-stack fa-lg" onKeyDown={handleKeyDown} onClick={() => this.cancel('player2')}>
                        <i className="fa fa-window-close" />
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className={style.emptyBox}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <input type="text" placeholder="github user" className={style.emptyIn} onChange={this.handleChange2} onInput={this.onput} onBlur={this.playerBlur2} onKeyDown={this.onKeyDown2} />
                      {put2 && (
                      <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <span style={{ color: 'red' }}>不特殊!</span>
                          {/* message= type="error" showIcon style={{ width: '50%' }} /> */}
                      </div>
                        )}
                    </div>
                    <button type="button" disabled={disabled2} className={disabled2 === true ? style.submitBtn : style.dis} onClick={this.onClick2}>submit</button>
                  </div>
                  )}
              </div>
            </div>
            <div className={style.start_battle}>
              {(player1 && player2) ? (
                <div className={style.startBattle}>
                  <NavLink
                    exact
                    to={{
                      search: `player1=${player1}&player2=${player2}`
                    }}
                    onClick={() => startBattle(player1, player2)}
                    className={style.startBattle1}
                  >提交
                  </NavLink>
                  {/* <button type="button" onClick={() => startBattle(player1,player2)} className={style.startBattle}>Battle</button> */}
                </div>
              ) : ''}
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Player;
