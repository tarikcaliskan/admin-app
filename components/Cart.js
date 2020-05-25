import React, { Component } from 'react';
import Chart from 'chart.js';
import classes from './LineGraph.module.css';
let myLineChart;

//--Chart Style Options--//
Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif";
Chart.defaults.global.legend.display = false;
//--Chart Style Options--//

export default class LineGraph extends Component {
	chartRef = React.createRef();

	componentDidMount() {
		this.buildChart();
	}

	componentDidUpdate() {
		this.buildChart();
	}

	buildChart = () => {
		const myChartRef = this.chartRef.current.getContext('2d');
		const { data, average, labels } = this.props;

		myLineChart = new Chart(myChartRef, {
			type: 'line',
			data: {
				//Bring in data
				labels: labels,
				datasets: [
					{
						label: 'Sales',
						data: data,
						fill: false,
						borderColor: function (context) {
							const { height: graphHeight } = myChartRef.canvas;

							let gradientLine = myChartRef.createLinearGradient(
								0,
								0,
								0,
								graphHeight
							);
							gradientLine.addColorStop(0, 'rgb(255, 0, 110, 0.2)');
							gradientLine.addColorStop(0.5, 'rgb(255, 0, 110, 0.35)');
							gradientLine.addColorStop(1, 'rgb(255, 0, 110, 0.7)');
						},
					},
				],
			},
			options: {
				//Customize chart options
			},
		});
	};

	render() {
		return (
			<div className={classes.graphContainer}>
				<canvas id="myChart" ref={this.chartRef} />
			</div>
		);
	}
}
