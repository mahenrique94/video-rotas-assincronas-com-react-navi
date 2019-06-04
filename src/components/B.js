import React from 'react'

import { mount, route } from 'navi'

const B = () => <h1 className="App-Title">B</h1>

export default mount({
    '': route({
        title: 'B',
        view: <B/>
    })
})
