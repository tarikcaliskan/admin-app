import React from 'react';

export default function TaskCard(props) {
	return (
		<div
			className={props.isFirst ? 'rounded-md p-4' : 'rounded-md p-4 mt-6'}
			style={{ boxShadow: '2px 3px 10px 1px rgba(0, 0, 0, 0.08)' }}
		>
			<div className="flex items-center justify-between mb-6">
				<h4 className="text-md font-medium text-gray-900 ">
					Send benefit review by Sunday{' '}
				</h4>
				<p className="text-md font-normal text-gray-600">Remind</p>
			</div>
			<p className="text-md font-normal text-gray-900">
				<span className="text-md font-normal text-gray-500">Due date: </span>{' '}
				December 23, 2018
			</p>
			<div className="flex justify-between items-center mt-4 mb-2">
				<div className="flex items-center">
					<img
						className="rounded-full h-8 w-8"
						src="./assets/img/worker.svg"
						alt="Worker image"
					/>
					<p className="ml-2 text-md font-normal text-gray-600">
						George Fields
					</p>
				</div>
				<div className="flex items-center">
					<button className="focus:outline-none">
						<svg
							className="mx-1"
							width="12"
							height="12"
							viewBox="0 0 12 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle cx="6" cy="6" r="5" stroke="#FFB946" stroke-width="2" />
						</svg>{' '}
					</button>

					<button className="focus:outline-none">
						<svg
							className="mx-1 mr-4"
							width="12"
							height="12"
							viewBox="0 0 12 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle cx="6" cy="6" r="5" stroke="#2ED47A" stroke-width="2" />
						</svg>{' '}
					</button>

					<button className="focus:outline-none">
						<svg
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M3.99998 12.6667C3.99998 13.4 4.59998 14 5.33331 14H10.6666C11.4 14 12 13.4 12 12.6667V4.66667H3.99998V12.6667ZM12.6666 2.66667H10.3333L9.66665 2H6.33331L5.66665 2.66667H3.33331V4H12.6666V2.66667Z"
								fill="#C2CFE0"
							/>
						</svg>{' '}
					</button>

					<button className="focus:outline-none">
						<svg
							className="mx-1 mr-3"
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M2 11.5V14H4.5L11.8733 6.62662L9.37333 4.12662L2 11.5ZM13.8067 4.69329C14.0667 4.43329 14.0667 4.01329 13.8067 3.75329L12.2467 2.19329C11.9867 1.93329 11.5667 1.93329 11.3067 2.19329L10.0867 3.41329L12.5867 5.91329L13.8067 4.69329Z"
								fill="#C2CFE0"
							/>
						</svg>
					</button>

					<button
						className={`w-24 h-6 text-sm rounded-md hover:bg-${props.color}-400 font-medium text-white focus:outline-none transition duration-500 ease-in-out`}
						style={
							props.color == 'green'
								? { backgroundColor: '#2ED47A' }
								: { backgroundColor: '#F7685B' }
						}
					>
						{props.color == 'green' ? 'Completed' : 'Ended'}
					</button>
				</div>
			</div>
		</div>
	);
}
