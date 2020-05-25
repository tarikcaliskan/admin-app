import React from 'react';

export default function SearchBar() {
	return (
		<div
			className="flex justify-between bg-white pl-4 border-b-2 border-gray-300 items-center"
			style={{
				height: '4.53rem',
				boxShadow: 'inset 2px 2px 4px 1px rgba(0, 0, 0, 0.06)',
			}}
		>
			<div className="flex ml-8">
				<div>
					<img
						className="h-6 w-6"
						src="./assets/icons/search.svg"
						alt="Search"
					/>{' '}
				</div>
				<div className="ml-4">
					<input
						className="text-md font-normal text-gray-500 outline-none"
						placeholder="Global Search"
					/>
				</div>
			</div>
			<div className="mr-12">
				<img
					className="h-6 w-6"
					src="./assets/icons/notifications.svg"
					alt="Notifications"
				/>{' '}
			</div>
		</div>
	);
}
