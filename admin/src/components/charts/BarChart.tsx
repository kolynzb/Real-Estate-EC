import React, { Component } from "react";
import Chart from "react-apexcharts";

type Props = {
  chartData: [];
  chartOptions: {};
};
type State = {
  chartData: [];
  chartOptions: {};
};
class ColumnChart extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      chartData: [],
      chartOptions: {},
    };
  }

  componentDidMount() {
    this.setState({
      chartData: this.props.chartData,
      chartOptions: this.props.chartOptions,
    });
  }

  render() {
    return (
      <Chart
        options={this.state.chartOptions}
        series={this.state.chartData}
        type="bar"
        width="100%"
        height="100%"
      />
    );
  }
}

export default ColumnChart;
