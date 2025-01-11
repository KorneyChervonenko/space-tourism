//

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.scss';

import Home from './pages/Home/Home.jsx';
import Destination from './pages/Destination/Destination.jsx';
import Crew from './pages/Crew/Crew.jsx';
import Technology from './pages/Technology/Technology.jsx';
import PageNotFound from './pages/PageNotFound/PageNotFound.jsx';
import PageNav from './components/PageNav/PageNav.jsx';
import Planet from './components/Planet/Planet.jsx';
import Member from './components/Member/Member.jsx';
import Device from './components/Device/Device.jsx';

import slugify from './utils/slugify.mjs';

export default function App() {
	// console.clear();
	const [{ planets, members, devices }, setData] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function fetchData() {
			try {
				setIsLoading(true);
				const response = await fetch('../../src/assets/data/data.json');
				const newData = await response.json();
				// console.log(data);
				const planets = newData.destinations.map((p) => ({ ...p, url: slugify(p.name) }));
				const members = newData.crew.map((m) => ({ ...m, url: slugify(m.name) }));
				const devices = newData.technology.map((d) => ({ ...d, url: slugify(d.name) }));
				// console.log(devices);
				// console.log(devices.at(0).url);

				setData({ planets, members, devices });
				// setCities(data);
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
				<PageNav />
				<Routes>
					<Route index element={<Navigate replace to="technology" />} />
					
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
			</BrowserRouter>
		</main>
	);
}
