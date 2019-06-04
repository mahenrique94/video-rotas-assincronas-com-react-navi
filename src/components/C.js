import React from 'react'

import { mount, route } from 'navi'

const C = () => <h1 className="App-Title">C</h1>

export default mount({
    '': route({
        title: 'C',
        view: <C/>
    })
})
