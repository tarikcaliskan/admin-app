import React from 'react';

export default function Tasks() {
	return (
		<div>
			<div className="pl-8 md:pl-12 py-8 pr-6 md:pr-10">
				<div className="bg-white p-8 rounded shadow-md">
					<div className="flex w-full justify-between items-baseline">
						<h4 className="text-md font-medium text-gray-900 mb-6">
							8 task completed out of 10
						</h4>

						<div className="flex items-baseline justify-end w-full md:w-1/3 px-3 mb-6 md:mb-0">
							<label
								className="block mb-2 text-md font-normal text-gray-500 outline-none"
								forhtml="grid-state"
							>
								Show
							</label>
							<div className="relative">
								<select
									className="block appearance-none w-full bg-white text-blue-600 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
									id="grid-state"
								>
									<option>This week</option>
									<option>Last week</option>
									<option>Last month</option>
								</select>
								<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-gray-700">
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
					<div className="w-full rounded-full bg-gray-200">
						<div className="bg-green-400 hover:bg-orange-500 rounded h-2 w-4/5 text-center text-white transition duration-500 ease-in-out"></div>
					</div>
					<h2 className="text-lg font-medium text-gray-900 mt-8">
						23 December, Sunday
					</h2>
					<div className="flex justify-around w-full mt-4">
						<div className="md:mx-2 xl:mx-6 2xl:mx-10">
							<p className="font-medium text-gray-500 text-center">Sun</p>
							<div className="px-1 py-1 rounded-full bg-blue-500 text-white">
								<p className="text-center">23</p>
							</div>
						</div>
						<div className="mx-4 md:mx-2 xl:mx-4 2xl:mx-10">
							<p className="font-medium text-gray-500 text-center">Mon</p>
							<div className="px-1 py-1">
								<p className="text-center">24</p>
							</div>
						</div>
						<div className="mx-4 md:mx-2 xl:mx-4 2xl:mx-10">
							<p className="font-medium text-gray-500 text-center">Tue</p>
							<div className="px-1 py-1">
								<p className="text-center">25</p>
							</div>
						</div>
						<div className="mx-4 md:mx-2 xl:mx-4 2xl:mx-10">
							<p className="font-medium text-gray-500 text-center">Wed</p>
							<div className="px-1 py-1">
								<p className="text-center">26</p>
							</div>
						</div>
						<div className="mx-4 md:mx-2 xl:mx-4 2xl:mx-10">
							<p className="font-medium text-gray-500 text-center">Thu</p>
							<div className="px-1 py-1">
								<p className="text-center">27</p>
							</div>
						</div>
						<div className="mx-4 md:mx-2 xl:mx-4 2xl:mx-10">
							<p className="font-medium text-gray-500 text-center">Fri</p>
							<div className="px-1 py-1">
								<p className="text-center">28</p>
							</div>
						</div>
						<div className="mx-4 md:mx-2 xl:mx-4 2xl:mx-10">
							<p className="font-medium text-gray-500 text-center">Sat</p>
							<div className="px-1 py-1">
								<p className="text-center">29</p>
							</div>
						</div>
					</div>{' '}
					<div className="my-6 -mx-8 border border-gray-200"></div>
					<div
						className="rounded-md p-4"
						style={{ boxShadow: '2px 3px 10px 1px rgba(0, 0, 0, 0.08)' }}
					>
						<div className="flex items-center justify-between mb-6">
							<h4 className="text-md font-medium text-gray-900 ">
								Send benefit review by Sunday{' '}
							</h4>
							<p className="text-md font-normal text-gray-600">Remind</p>
						</div>
						<p className="text-md font-normal text-gray-900">
							<span className="text-md font-normal text-gray-500">
								Due date:{' '}
							</span>{' '}
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

							<button className="px-2 py-1 text-sm rounded-md bg-green-500 hover:bg-green-400 font-medium text-white focus:outline-none transition duration-500 ease-in-out">
								Completed
							</button>
						</div>
					</div>
					<div
						className="rounded-md p-4 mt-8"
						style={{ boxShadow: '2px 3px 10px 1px rgba(0, 0, 0, 0.08)' }}
					>
						<div className="flex items-center justify-between mb-6">
							<h4 className="text-md font-medium text-gray-900 ">
								Send benefit review by Sunday{' '}
							</h4>
							<p className="text-md font-normal text-gray-600">Remind</p>
						</div>
						<p className="text-md font-normal text-gray-900">
							<span className="text-md font-normal text-gray-500">
								Due date:{' '}
							</span>{' '}
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

							<button className="px-2 py-1 text-sm rounded-md bg-green-500 hover:bg-green-400 font-medium text-white focus:outline-none transition duration-500 ease-in-out">
								Completed
							</button>
						</div>
					</div>
					<div
						className="rounded-md p-4 mt-8"
						style={{ boxShadow: '2px 3px 10px 1px rgba(0, 0, 0, 0.08)' }}
					>
						<div className="flex items-center justify-between mb-6">
							<h4 className="text-md font-medium text-gray-900 ">
								Send benefit review by Sunday{' '}
							</h4>
							<p className="text-md font-normal text-gray-600">Remind</p>
						</div>
						<p className="text-md font-normal text-gray-900">
							<span className="text-md font-normal text-gray-500">
								Due date:{' '}
							</span>{' '}
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

							<button className="px-2 py-1 text-sm rounded-md bg-green-500 hover:bg-green-400 font-medium text-white focus:outline-none transition duration-500 ease-in-out">
								Completed
							</button>
						</div>
					</div>
					<h3 className="mt-8 text-center font-medium text-blue-600">
						Show more
					</h3>
				</div>
			</div>
		</div>
	);
}
