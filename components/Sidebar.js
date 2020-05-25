import React from 'react';
import SideItem from './SideItem';

export default function Sidebar() {
	return (
		<>
			<div className="flex-none w-full md:w-auto 2xl:w-1/2 lg:max-w-xs pb-5 md:pb-0 bg-white text-gray-900 shadow-xl">
				<div className="flex justify-center py-5 border-b-2 border-gray-300">
					<h1 className="text-blue-600 font-semibold text-xl">
						Admin Dashboard
					</h1>
				</div>
				<div className="ml-6">
					<div className="flex items-center justift-center mt-4">
						<img
							className="h-12 w-12 rounded-full"
							src="./assets/img/worker.svg"
							alt="Avatar"
						/>
						<div className="mx-4">
							<h3 className="text-gray-800 font-medium text-md">John Doe</h3>
							<p className="text-gray-600 text-sm font-medium">
								john.doe@example.com
							</p>
						</div>
					</div>
					<div className="mt-12">
						<SideItem name="Dashboard" icon="dashboard" />
						<SideItem name="Tasks" icon="tasks" />
						<SideItem name="Email" icon="email" />
						<SideItem name="Contacts" icon="contacts" />
						<SideItem name="Chat" icon="chat" />
						<SideItem name="Deals" icon="deals" />
						<div className="mt-8 -ml-8 border border-gray-300"></div>
						<SideItem name="Settings" icon="Settings" />
					</div>
				</div>
			</div>
		</>
	);
}
