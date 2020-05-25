import React from 'react';
import App from 'next/app';
import '../css/style.css';
import ReactBreakpoints from 'react-breakpoints';

const breakpoints = {
	mobile: 320,
	mobileLandscape: 480,
	tablet: 768,
	tabletLandscape: 1024,
	desktop: 1200,
	desktopLarge: 1500,
	desktopWide: 1920,
};
class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<>
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap"
					rel="stylesheet"
				></link>
				<ReactBreakpoints breakpoints={breakpoints}>
					<Component {...pageProps} />
				</ReactBreakpoints>
			</>
		);
	}
}

export default MyApp;
