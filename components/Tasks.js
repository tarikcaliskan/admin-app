import React from 'react';
import TaskCard from './TaskCard';
export default function Tasks() {
	return (
		<div className="bg-white p-8 rounded shadow-md">
			<div className="flex w-full justify-between items-baseline">
				<h4 className="text-blue-800 text-md font-medium">
					8 task completed out of 10
				</h4>
				<div className="flex items-baseline justify-end px-3">
					<label
						className="block py-2 text-md font-normal text-gray-500 outline-none"
						forhtml="grid-state"
					>
						Show
					</label>
					<div className="relative">
						<select
							className="hidden md:block appearance-none w-full bg-white text-blue-600 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-state"
						>
							<option>This week</option>
							<option>Last week</option>
							<option>Last month</option>
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
			<div className="w-full rounded-full bg-gray-200 my-4">
				<div className="bg-green-400 hover:bg-orange-500 rounded h-2 w-4/5 text-center text-white transition duration-500 ease-in-out"></div>
			</div>
			<h2 className="text-lg font-medium text-gray-900 mt-8">
				23 December, Sunday
			</h2>
			<div className="flex justify-around w-full mt-4">
				<div>
					<p className="font-medium text-gray-600 text-center">Sun</p>
					<div className="w-8 h-8 rounded-full bg-blue-500 text-white">
						<p className="text-center py-1">23</p>
					</div>
				</div>
				<div>
					<p className="font-medium text-gray-600 text-center">Mon</p>
					<div className="px-1 py-1 text-gray-900">
						<p className="text-center">24</p>
					</div>
				</div>
				<div>
					<p className="font-medium text-gray-600 text-center">Tue</p>
					<div className="px-1 py-1 text-gray-900 text-white">
						<p className="text-center">25</p>
					</div>
				</div>
				<div>
					<p className="font-medium text-gray-600 text-center">Wed</p>
					<div className="px-1 py-1 text-gray-900 text-white">
						<p className="text-center">26</p>
					</div>
				</div>
				<div>
					<p className="font-medium text-gray-600 text-center">Thu</p>
					<div className="px-1 py-1 text-gray-900  text-white">
						<p className="text-center">27</p>
					</div>
				</div>
				<div>
					<p className="font-medium text-gray-600 text-center">Fri</p>
					<div className="px-1 py-1 text-gray-900  text-white">
						<p className="text-center">28</p>
					</div>
				</div>
				<div>
					<p className="font-medium text-gray-600 text-center">Sat</p>
					<div className="px-1 py-1 text-gray-900 text-white">
						<p className="text-center">29</p>
					</div>
				</div>
			</div>
			<div className="my-6 -mx-8 border border-gray-200"></div>
			<TaskCard isFirst={true} color={'green'} />
			<TaskCard isFirst={false} color={'green'} />
			<TaskCard isFirst={false} color={'red'} />
			<TaskCard isFirst={false} color={'green'} />
		</div>
	);
}
