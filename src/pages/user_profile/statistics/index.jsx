import styles from './styles.css';
import React, {useEffect, useRef} from "react";
import * as d3 from 'd3';

function Statistics() {

  const hospitalQueues = [
    {name: 'A', queue: 11},
    {name: 'B', queue: 23},
    {name: 'C', queue: 16},
    {name: 'D', queue: 23},
    {name: 'E', queue: 22},
    {name: 'F', queue: 30},
    {name: 'G', queue: 2},
    {name: 'H', queue: 9},
  ]

  const BarChart = ({data}) => {
    const d3Chart = useRef()

    useEffect(() => {

      // values of the first element
      const getFirstObjectValues = data.map(data => Object.values(data)[0]);

      // values of the second element
      const getSecondObjectValues = data.map(data => Object.values(data)[1]);

      // size of the container
      const margins = {top: 20, bottom: 10};
      const chartWidth = 600;
      const chartHeight = 400 - margins.top - margins.bottom;

      // available ranges
      const xScale = d3.scaleBand().padding(0.1);
      // d3 max gets the highest value between objects
      const yScale = d3.scaleLinear().range([chartHeight, 0]);

      // allows which data should be scaled
      xScale.domain(getFirstObjectValues).rangeRound([0, chartWidth])
      yScale.domain([0, d3.max(getSecondObjectValues) + 3])

      const chartContainer = d3.select(d3Chart.current)
        .classed('chartContainer', true)
        .attr('width', chartWidth)
        .attr('height', chartHeight + margins.top + margins.bottom)

      const chart = chartContainer

      // bars
      chart
        .selectAll('.bar')
        .data(data)
        .enter()
        .append('rect')
        .classed('bar', true)
        .attr('width', xScale.bandwidth())
        .attr('height', data => chartHeight - yScale(Object.values(data)[1]))
        .attr('x', data => xScale(Object.values(data)[0]))
        .attr('y', data => yScale(Object.values(data)[1]));

      // label bellow the bars
      chart
        .append('g')
        .call(d3.axisBottom(xScale).tickSizeOuter(0))
        .attr('transform', `translate(0, ${chartHeight})`)
        .attr('color', '#2B3F6C');

      // label above the bars
      chart
        .selectAll('.label')
        .data(data)
        .enter()
        .append('text')
        .text(data => Object.values(data)[1])
        .attr('x', data => xScale(Object.values(data)[0]) + xScale.bandwidth() / 2)
        .attr('y', data => yScale(Object.values(data)[1]) - 20)
        .attr('text-anchor', 'middle')
        .classed('label', true)

    }, [])

    return (
      <svg ref={d3Chart}></svg>
    )
  }

  return (
    <div>
      <BarChart data={hospitalQueues}></BarChart>
    </div>
  );
}

export default Statistics;
