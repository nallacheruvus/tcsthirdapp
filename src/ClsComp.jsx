import React from "react";
import './App.css'

class ClsComp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            a: '',
            b:''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ a: e.target.value });
    }

    render() {
        return <>
            Enter your input:<input type="text" onChange={this.handleChange} /> 
            <br />
            <label className="satish">{this.state.a}</label>
            <br />
            Enter your input:
            <select onChange={(e) => this.setState({ b: e.target.value })}>
                {
                    ['Einstein', 'Ramanujam', 'Chandrasekhar', 'Bohr', 'Rutherford']
                        .map(n => <option key={n}>{n}</option>)
                    }
            </select><br/><hr/><br/>
            <label className="satish">{this.state.b}</label><br/><hr/><br/>
            <input type="checkbox" value="Vegan" onChange={(e) => this.setState({ b: e.target.value })} />Vegan
            <br/><input type="radio" name="r1" value="Chinese"  onChange={(e) => this.setState({ b: e.target.value })}/>Chinese<br/>
            <input type="radio" name="r1" value="Canotonese"  onChange={(e) => this.setState({ b: e.target.value })}/>Canotenese<br/>
            <input type="radio" name="r1" value="Mandarin"  onChange={(e) => this.setState({ b: e.target.value })}/>Mandarin<br/>
            <br/><textarea rows="10" cols="10"  onChange={(e) => this.setState({ b: e.target.value })}>
                    </textarea>
        </>
    }
}

export default ClsComp;