import React from "react";
import ReactApexChart from "react-apexcharts";

type Props = {
  chartData: any;
  chartOptions: any;
};
type State = {
  chartData: any;
  chartOptions: any;
};
class PieChart extends React.Component<any, any> {
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
        type="pie"
        width="100%"
        height="55%"
      />
    );
  }
}

export default PieChart;
