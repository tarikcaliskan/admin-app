import React from 'react';
import Sidebar from './Sidebar';
import SearchBar from './SearchBar';

export default function Layout({ children }) {
	return (
		<div className="lg:flex h-screen">
			<Sidebar />
			<div
				className="flex-1 overflow-auto"
				style={{
					boxShadow: 'inset 2px 2px 4px 1px rgba(0, 0, 0, 0.06)',
					backgroundColor: '#F5F6F8',
				}}
			>
				<div className="sticky top-0 z-10">
					<SearchBar />
				</div>
				{children}
			</div>
		</div>
	);
}
