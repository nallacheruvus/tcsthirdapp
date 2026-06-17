import './App.css';

function App() {
  let mystyle = {
    backgroundColor: 'tomato',
    color: 'blue',
    fontStyle: 'bold'
  }
  return (
    <>
      <div className='pure-g'>
        <div className="pure-u-1-3"><p>Introduction</p></div>
        <div className="pure-u-1-3"><p>About Us</p></div>
        <div className="pure-u-1-3"><p>Contact Us</p></div>
      </div>
      <table className='pure-table pure-table-bordered'>
        <thead>
          <tr><th>Number</th><th>Value</th></tr></thead>
        <tbody>
        {
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
              .map(n => <tr key={n}><td>{n}</td>
                <td><button className='pure-button pure-button-primary'>{Math.log(n)}
                </button></td></tr>)
        }
        </tbody>
      </table>
    </>
  )
}

export default App
