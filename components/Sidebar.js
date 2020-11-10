import React from 'react';
import SideItem from './SideItem';

export default function Sidebar() {
	const [isOpen, setIsOpen] = React.useState(false);
	return (
		<>
			<div
				className={`flex-none w-full md:w-auto 2xl:w-1/2 lg:max-w-xs bg-white text-gray-900 shadow-xl ${
					isOpen ? 'pb-5' : 'pb-0'
				} lg:pb-0`}
			>
				<div className="flex justify-between lg:justify-center py-5 px-5 border-b-2 border-gray-300 items-center">
					<h1 className="text-blue-600 font-semibold text-xl">
						Admin Dashboard
					</h1>
					<div className="block lg:hidden">
						<button
							className="flex items-center focus:outline-none"
							onClick={() => setIsOpen(!isOpen)}
						>
							<img
								className="w-6 h-6 hover:text-blue-600"
								src="./assets/icons/menu.svg"
								alt="Hamburger menu"
							/>
						</button>
					</div>
				</div>
				<div className={`ml-6 ${isOpen ? 'block' : 'hidden'} lg:block`}>
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
