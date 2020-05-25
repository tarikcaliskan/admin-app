import React from 'react';
import LineChart from './LineChart';
export default function LineChartWrapper(props) {
	return (
		<div className={`bg-white rounded shadow-md p-2 xl:ml-8 mt-4 xl:mt-0`}>
			<div className="flex justify-between items-baseline px-4 py-2">
				<div>
					<h2 className="text-lg font-medium text-gray-900">Deals</h2>
				</div>
				<div className="flex items-baseline justify-end">
					<label
						className="block py-2 text-md font-normal text-gray-500 outline-none"
						forhtml="grid-state"
					>
						Show:
					</label>
					<div className="relative">
						<select
							className="hidden md:block appearance-none w-full bg-white text-blue-600 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-state"
						>
							<option>Monthly</option>
							<option>Weekly</option>
							<option>Daily</option>
						</select>
						<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 text-gray-700">
							<svg
								className="fill-current h-4 w-4"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
							>
								<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
							</svg>
						</div>
					</div>
				</div>
			</div>
			<div className="-mx-2 border border-gray-200"></div>
			<LineChart />{' '}
		</div>
	);
}
