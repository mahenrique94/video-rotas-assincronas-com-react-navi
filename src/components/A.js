import React from 'react'

import { mount, route } from 'navi'

const A = () => <h1 className="App-Title">A</h1>

export default mount({
    '': route({
        title: 'A',
        view: <A/>
    })
})
