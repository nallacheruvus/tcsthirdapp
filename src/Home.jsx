import "./App.css"

function Home(props) {
    return <>
        <div id="layout" className="pure-g">
            <div className="sidebar pure-u-1 pure-u-md-1-4">
                <div className="header">
                    <h1 className="brand-title">A Sample Blog</h1>
                    <h2 className="brand-tagline">Creating a blog layout using Pure</h2>

                    <nav className="nav">
                        <ul className="nav-list">
                            <li className="nav-item">
                                <a className="pure-button" href="http://purecss.io">Pure</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

        </div>
       
<h1>Welcome to home page</h1>
        <div className="footer">
            <div className="pure-menu pure-menu-horizontal">
                <ul>
                    <li className="pure-menu-item"><a href="http://purecss.io/" className="pure-menu-link">About</a></li>
                    <li className="pure-menu-item"><a href="http://github.com/pure-css/pure/" className="pure-menu-link">GitHub</a></li>
                </ul>
                </div>
            </div>
     




    </>
}

export default Home;
