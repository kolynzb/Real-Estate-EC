import React from "react";
import ReactApexChart from "react-apexcharts";

type Props = {
  chartData: [];
  chartOptions: {};
};
type State = {
  chartData: [];
  chartOptions: {};
};
class LineChart extends React.Component<Props, State> {
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
      <ReactApexChart
        options={this.state.chartOptions}
        series={this.state.chartData}
        type="line"
        width="100%"
        height="100%"
      />
    );
  }
}

export default LineChart;
