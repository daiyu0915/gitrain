import React from "react";
import Instructions from "@/components/battle/Instructions";
import Players from "@/components/battle/Players";
import "@/styles/battle.css";

class Battle extends React.Component {
  render() {
    const { startBattle } = this.props;
    return (
      <div id="battle">
        <Instructions />
        <Players startBattle={startBattle} />
      </div>
    );
  }
}

export default Battle;

// import React from 'react';

// import Player from "@/components/battle/Players"

// import style from "@/styles/battle.less"

// export default class Battle extends React.Component {

//   render() {

//     const { startBattle } = this.props;

//     return (

//       <div className={style.battle}>

//         <div className={style.instrutions}>

//           <h2>Instrutions</h2>

//           <ul>

//             <li>

//               <h3>Enter Two Users</h3>

//               <div><i className="fa fa-user icons" style={{ color: "#e06c75" }} /></div>

//             </li>

//             <li>

//               <h3>Battle</h3>

//               <div><i className="fa fa-hand-o-right icons" style={{ color: "#ec981d" }} /></div>

//             </li>

//             <li>

//               <h3>See The Winner</h3>

//               <div><i className="fa fa-trophy icons" style={{ color: "#e06c75" }} /></div>

//             </li>

//           </ul>

//         </div>

//         <Player startBattle={startBattle} />

//       </div>

//     );

//   }

// }
