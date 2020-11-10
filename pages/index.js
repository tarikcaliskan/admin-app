import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Tasks from '../components/Tasks';
import LineChart from '../components/LineChart';
import LineChartWrapper from '../components/LineChartWrapper';
import DonutChartWrapper from '../components/DonutChartWrapper';
export const Home = () => {
	return (
		<Layout>
			<div className="grid grid-cols-1 xl:grid-cols-2 items-start p-8">
				<div className="lg:mr-2">
					<Tasks />
				</div>
				<div className="md:flex items-baseline justify-center xl:inline">
					<div className="md:flex-1 md:mr-2 xl:mr-0">
						<LineChartWrapper />
					</div>
					<div className="md:flex-1 md:ml-2 xl:ml-0">
						<DonutChartWrapper />
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Home;
