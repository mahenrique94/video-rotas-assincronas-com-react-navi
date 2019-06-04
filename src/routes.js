import React, { Suspense } from 'react'

import { mount, route, lazy } from 'navi'
import { Router, View } from 'react-navi'

import App from './containers/App'

import Home from './components/Home'
import Loading from './components/Loading'

import { getPeople } from './api'

const routes = mount({
    '/': route({
        title: 'Home',
        getData: getPeople,
        view: <Home />
    }),
    '/a': lazy(() => import('./components/A')),
    '/b': lazy(() => import('./components/B')),
    '/c': lazy(() => import('./components/C'))
})

const Routes = () => (
    <Router routes={routes}>
        <App>
            <Suspense fallback={<Loading/>}>
                <View/>
            </Suspense>
        </App>
    </Router>
)

export default Routes