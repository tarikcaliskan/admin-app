import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

class DonutChart extends Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [8, 1, 1], // Green, red, yellow

			options: {
				labels: ['Completed', 'Ended', 'Pending'],
				colors: ['#2ED47A', '#F7685B', '#FFB946'],
				dataLabels: {
					enabled: false,
				},
				dropShadow: {
					enabled: false,
				},
				legend: {
					fontSize: '14px',
					fontFamily: 'Poppins',
					fontWeight: 400,
					horizontalAlign: 'center',
					markers: {
						width: 12,
						height: 12,
						strokeWidth: 0,
						strokeColor: '#fff',
						fillColors: undefined,
						radius: 12,

						onClick: undefined,
						offsetX: 0,
						offsetY: 0,
					},
					itemMargin: {
						vertical: 5,
					},
				},
				plotOptions: {
					pie: {
						expandOnClick: false,

						donut: {
							size: '90%',

							labels: {
								show: true,
								name: {
									show: true,
									fontFamily: 'Poppins',
									fontSize: '24px',
									fontWeight: 600,
									formatter: function (val) {
										return val;
									},
								},
								value: {
									show: true,
									fontFamily: 'Poppins',
									fontSize: '24px',
									fontWeight: 600,
									formatter: function (val) {
										return val;
									},
								},
								total: {
									show: true,
									showAlways: false,
									label: 'Completed',
									fontSize: '20px',
									fontFamily: 'Poppins',
									fontWeight: 500,
									color: '#2ED47A',
									formatter: function (w) {
										var val = w.globals.seriesTotals[0] * 10;
										return +val.toString() + '%';
									},
								},
							},
						},
					},
				},
			},
		};
	}

	render() {
		return (
			<div className="donut mt-2">
				<Chart
					options={this.state.options}
					series={this.state.series}
					type="donut"
					width="100%"
				/>
			</div>
		);
	}
}

export default DonutChart;
