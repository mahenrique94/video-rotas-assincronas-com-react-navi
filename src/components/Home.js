import React from 'react'

import { useCurrentRoute } from 'react-navi'

const Home = () => {
    const { data } = useCurrentRoute()
    return (
        <>
            <h1 className="App-Title">Home</h1>
            <table className="App-Table">
                <thead className="App-Table-Header">
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody className="App-Table-Body">
                    { data.people.map(person => (
                        <tr key={person.id}>
                            <td>{ person.name }</td>
                            <td>{ person.age }</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}


export default Home
