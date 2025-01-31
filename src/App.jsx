//

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect, useState } from 'react';
import slugify from './utils/slugify.mjs';
import './App.scss';

import LoadingIndicator from './components/LoadingIndicator/LoadingIndicator.jsx';

// import PageNav from './components/PageNav/PageNav.jsx';
// import Planet from './components/Planet/Planet.jsx';
// import Member from './components/Member/Member.jsx';
// import Device from './components/Device/Device.jsx';

const PageNav = lazy(() => import('./components/PageNav/PageNav.jsx'));
const Planet = lazy(() => import('./components/Planet/Planet.jsx'));
const Member = lazy(() => import('./components/Member/Member.jsx'));
const Device = lazy(() => import('./components/Device/Device.jsx'));

// import Home from './pages/Home/Home.jsx';
// import Destination from './pages/Destination/Destination.jsx';
// import Crew from './pages/Crew/Crew.jsx';
// import Technology from './pages/Technology/Technology.jsx';
// import PageNotFound from './pages/PageNotFound/PageNotFound.jsx';

const Home = lazy(() => import('./pages/Home/Home.jsx'));
const Destination = lazy(() => import('./pages/Destination/Destination.jsx'));
const Crew = lazy(() => import('./pages/Crew/Crew.jsx'));
const Technology = lazy(() => import('./pages/Technology/Technology.jsx'));
const PageNotFound = lazy(() => import('./pages/PageNotFound/PageNotFound.jsx'));

export default function App() {
	const [{ planets, members, devices }, setData] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function fetchData() {
			try {
				setIsLoading(true);
				// const response = await fetch('../../src/assets/data/data.json');
				const response = await fetch('/assets/data/data.json');
				const newData = await response.json();
				const planets = newData.destinations.map((p) => ({ ...p, url: slugify(p.name) }));
				const members = newData.crew.map((m) => ({ ...m, url: slugify(m.name) }));
				const devices = newData.technology.map((d) => ({ ...d, url: slugify(d.name) }));
				// console.log(planets, members, devices);

				setData({ planets, members, devices });
			} catch (err) {
				alert(`error loading data ${err}`);
			} finally {
				setIsLoading(false);
			}
		}
		fetchData();
	}, []);

	if (isLoading) return;
	return (
		<main className="main">
			<h1 className="visually-hidden">Space tourism</h1>
			<BrowserRouter>
				<Suspense fallback={<LoadingIndicator />}>
					<PageNav />
					{/* <LoadingIndicator /> */}
					<Routes>
						<Route index element={<Navigate replace to="home" />} />

						<Route path="home" element={<Home />} />

						<Route path="destination" element={<Destination planets={planets} />}>
							<Route index element={<Navigate replace to={planets.at(0).url} />} />
							{planets.map((p) => (
								<Route key={p.url} path={p.url} element={<Planet planet={p} />} />
							))}
						</Route>

						<Route path="crew" element={<Crew members={members} />}>
							<Route index element={<Navigate replace to={members.at(0).url} />} />
							{members.map((m) => (
								<Route key={m.url} path={m.url} element={<Member member={m} />} />
							))}
						</Route>

						<Route path="technology" element={<Technology devices={devices} />}>
							<Route index element={<Navigate replace to={devices.at(0).url} />} />
							{devices.map((d) => (
								<Route key={d.url} path={d.url} element={<Device device={d} />} />
							))}
						</Route>

						<Route path="*" element={<PageNotFound />} />
					</Routes>
				</Suspense>
			</BrowserRouter>
		</main>
	);
}
