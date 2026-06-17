import { useState } from "react";

function FuncComp(props) {

    const [a, SetA] = useState('');
    return <>
        <input type="text" onChange={(e) => SetA(e.target.value)} />
        <br />
        <label>{a}</label>
        <br />
        Enter your input:
            <select onChange={(e) => SetA ( e.target.value )}>
                {
                    ['Einstein', 'Ramanujam', 'Chandrasekhar', 'Bohr', 'Rutherford']
                        .map(n => <option key={n}>{n}</option>)
                    }
            </select><br/><hr/><br/>
            <br/><hr/><br/>
     </>
}

export default FuncComp;