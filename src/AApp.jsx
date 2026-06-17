import { useState } from "react";
import { retArr, retStr } from "./data";
import './App.css'
import ClsComp from "./ClsComp";
import FuncComp from "./FunCmp";
import Menu from "./Menu";

function AApp(props) {
    return <>
        {/* <ClsComp /> */}
        {/* <FuncComp /> */}
<Menu />
    </>
}


function SecApp(props) {
    const [val, SetVal] = useState(51);
    return <>
        <div style={{margin:'50px'}}>
        <label>Select An Id</label>:<select onChange={e=>SetVal(e.target.value)}>
            {
                retArr().map(n=>n.id).map(n => <option key={n}>{ n}</option>)
            }
        </select>
        <br />
<div><button className="satish">{retStr(parseInt(val))}</button></div>
       
    </div>
    </>
}


function InitApp(props) {
    return <>
         <h1>New Entry Point</h1>
        <br />
        <table className="pure-table pure-table-striped">
            <thead>
                <tr><th>Id</th><th>Name</th><th>Email</th></tr>
            </thead>
            <tbody>
                {
                    retArr().map(n => <tr>
                        <td>{n.id}</td>
                        <td>{n.name}</td>
                        <td>{ n.email}</td>
                    </tr>)
                }
            </tbody>
        </table>
    </>
}

export default AApp;
