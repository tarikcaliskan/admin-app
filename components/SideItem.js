import React from 'react';

export default function SideItem(props) {
	return (
		<button className="mt-6 flex items-center focus:outline-none">
			<img
				className="w-6 h-6 hover:text-blue-600"
				src={`./assets/icons/${props.icon}.svg`}
				alt=""
			/>
			<p className="mx-4 text-gray-700 hover:text-blue-600 font-medium text-md">
				{props.name}
			</p>
		</button>
	);
}
