import React from 'react'
import { Route, Router } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import Home from './views/home/Home'
import MainLayoutRoute from './views/layouts/main/MainLayoutRoute'
import Order from './views/order/Order'

const App = () => {
	<>
		<Home />
		{/* <Router> */}
		{/* {AppRoutes.map(route => {
			const { Layout, path, Component, exact, ...rest } = route;
			console.log(route);
			return <Route path={path} exact={exact} {...rest} element={<Layout>
				<Component />
				</Layout>} />
			})} */}
		{/* </Router> */}
	</>
}

export default App