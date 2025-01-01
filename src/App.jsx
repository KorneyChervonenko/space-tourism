// import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';

import Home from './pages/Home/Home.jsx';
import Destination from './pages/Destination/Destination.jsx';
import Crew from './pages/Crew/Crew.jsx';
import Technology from './pages/Crew/Technology.jsx';
import PageNotFound from './pages/PageNotFound/PageNotFound.jsx';
import PageNav from './components/PageNav/PageNav.jsx';
import Planet from './components/PageNav/Planet/Planet.jsx';

export default function App() {
	return (
		<main>
			<h1 className="visually-hidden">Space tourism</h1>
			<BrowserRouter>
				<PageNav />
				<Routes>
					{/* <Route index element={<Home />} /> */}
					<Route index element={<Navigate replace to="home" />} />
					<Route path="home" element={<Home />} />
					<Route path="destination" element={<Destination />}>
						<Route index element={<Navigate replace to="moon" />} />
						<Route path="moon" element={<Planet planetName="moon" />} />
						<Route path="mars" element={<Planet planetName="mars" />} />
						<Route path="europa" element={<Planet planetName="europa" />} />
						<Route path="titan" element={<Planet planetName="titan" />} />
					</Route>
					<Route path="crew" element={<Crew />} />
					<Route path="technology" element={<Technology />} />

					{/* <Route path="app" element={<AppLayout />}>
						<Route index element={<Navigate replace to="cities" />} />
						<Route path="cities" element={<CityList cities={cities} isLoading={isLoading} />} />
						<Route path="cities/:id" element={<City />} />
						<Route
							path="countries"
							element={<CountryList cities={cities} isLoading={isLoading} />}
						/>
						<Route path="form" element={<Form />} />
					</Route> */}
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
		</main>
	);
}
