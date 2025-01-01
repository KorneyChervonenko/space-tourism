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
					<Route path="destination" element={<Destination />} />
					<Route path="crew" element={<Crew />} />
					<Route path="technology" element={<Technology />} />
					{/* <Route path="pricing" element={<Pricing />} /> */}
					{/* <Route path="login" element={<Login />} /> */}
					{/* <Route path="app" element={<AppLayout />}>
					<Route index element={<Navigate replace to="cities" />} />
					<Route path="cities" element={<CityList cities={cities} isLoading={isLoading} />} />
					<Route path="cities/:id" element={<City />} />
					<Route path="countries" element={<CountryList cities={cities} isLoading={isLoading} />} />
					<Route path="form" element={<Form />} />
				</Route> */}
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
		</main>
	);
}

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
