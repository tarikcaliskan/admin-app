import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
export default class LineChart extends Component {
	constructor(props) {
		super(props);

		this.state = {
			options: {
				grid: {
					strokeDashArray: 10,
				},
				chart: {
					id: 'basic-bar',
					type: 'area',
					fontFamily: 'Poppins',
					toolbar: {
						show: false,
					},
				},
				dataLabels: {
					enabled: false,
				},

				xaxis: {
					categories: ['1 Dec', '8 Dec', '16 Dec', '31 Dec'],
					labels: {
						style: {
							fontSize: '14px',
							fontWeight: 400,
						},
					},
				},
				yaxis: {
					labels: {
						style: {
							fontSize: '14px',
							fontWeight: 400,
						},
					},
				},
				stroke: {
					curve: 'smooth',
				},
			},
			series: [
				{
					name: 'Deals',
					data: [50, 150, 60, 150],
				},
			],
		};
	}
	render() {
		return (
			<div className="mixed-chart mt-2">
				<Chart
					options={this.state.options}
					series={this.state.series}
					type="area"
					width="100%"
				/>
			</div>
		);
	}
}
