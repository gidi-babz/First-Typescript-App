import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRef } from 'react';
import Navbar from '../components/Navbar';

const Home: NextPage = () => {
	const divref = useRef<HTMLDivElement>(null);

	if (divref.current) {
		const { scrollLeft, clientWidth } = divref.current;

		divref.current?.scrollTo({ left: scrollLeft, behavior: 'smooth' });
	}
	return (
		<div>
			<Head>
				<title>Experiment with Typescript</title>
				<meta name="description" content="A typescript test run" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navbar />
			<main className=""></main>

			<footer className=""></footer>
		</div>
	);
};

export default Home;
