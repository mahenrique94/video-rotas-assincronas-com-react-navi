import React from 'react'

import { Link, useLoadingRoute } from 'react-navi'

import Busy from 'react-busy-indicator'

import './App.css'

const App = ({ children }) => {
    const isLoadingRoute = useLoadingRoute()
    return (
        <div className="App-Container">
            <Busy delayMs={300} isBusy={isLoadingRoute}/>
            <nav className="App-Menu">
                <ul className="App-Menu-List">
                    <li className="App-Menu-Item">
                        <Link className="App-Menu-Link" href="/">
                            Home
                        </Link>
                    </li>
                    <li className="App-Menu-Item">
                        <Link className="App-Menu-Link" href="/a">
                            A
                        </Link>
                    </li>
                    <li className="App-Menu-Item">
                        <Link className="App-Menu-Link" href="/b">
                            B
                        </Link>
                    </li>
                    <li className="App-Menu-Item">
                        <Link className="App-Menu-Link" href="/c">
                            C
                        </Link>
                    </li>
                </ul>
            </nav>
            { children }
        </div>
    )
}


export default App
