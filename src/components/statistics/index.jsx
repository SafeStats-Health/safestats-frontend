import styles from './styles.module.css';
import React, {useEffect, useRef} from "react";
import * as d3 from 'd3';
import {Card, CardContent} from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Statistics(props) {

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

  // size of the container
  const margins = {top: 20, bottom: 10};
  const chartWidth = 600;
  const chartHeight = 350 - margins.top - margins.bottom;

  const BarChart = ({data, labelNamesPos, labelNumbersPos}) => {
    const d3Chart = useRef()
    useEffect(() => {

      // values of the first element
      const getFirstObjectValues = data.map(data => Object.values(data)[labelNamesPos]);

      // values of the second element
      const getSecondObjectValues = data.map(data => Object.values(data)[labelNumbersPos]);

      // available ranges
      const xScale = d3.scaleBand().padding(0.1);
      // d3 max gets the highest value between objects
      const yScale = d3.scaleLinear().range([chartHeight, 0]);

      // allows which data should be scaled
      xScale.domain(getFirstObjectValues).rangeRound([0, chartWidth])
      yScale.domain([0, d3.max(getSecondObjectValues) + 3])

      const chartContainer = d3.select(d3Chart.current)
        // .classed(styles['chartContainer'], true)
        // .attr('width', chartWidth)
        // .attr('height', chartHeight + margins.top + margins.bottom)
        .attr("viewBox", `0 0 ${chartWidth} ${chartHeight + margins.top + margins.bottom}`)

      const chart = chartContainer

      // bars
      chart
        .selectAll('.bar')
        .data(data)
        .enter()
        .append('rect')
        .classed(styles['bar'], true)
        .attr('width', xScale.bandwidth())
        .attr('height', data => chartHeight - yScale(Object.values(data)[labelNumbersPos]))
        .attr('x', data => xScale(Object.values(data)[labelNamesPos]))
        .attr('y', data => yScale(Object.values(data)[labelNumbersPos]));

      // label bellow the bars
      chart
        .append('g')
        .call(d3.axisBottom(xScale).tickSizeOuter(0))
        .attr('transform', `translate(0, ${chartHeight})`)
        .classed(styles['labelBelow'], true);

      // label above the bars
      chart
        .selectAll('.labelAbove')
        .data(data)
        .enter()
        .append('text')
        .text(data => Object.values(data)[labelNumbersPos])
        .attr('x', data => xScale(Object.values(data)[labelNamesPos]) + xScale.bandwidth() / 2)
        .attr('y', data => yScale(Object.values(data)[labelNumbersPos]) - 5)
        .attr('text-anchor', 'middle')
        .classed(styles['labelAbove'], true)

    }, [])

    return (
      <svg ref={d3Chart}></svg>
    )
  }

  return (
    <div className={styles['statisticsPos']}>
      <div className={'container'}>

        <div className={`${styles['cardPos']} row`}>
          <div className={'col'}>
            <Card className={styles['cardSize']}>
              <CardContent>
                <div className={'col'}>
                  <h1 className={styles['title']}></h1>
                </div>
                <div className={'col'}>
                  <BarChart data={hospitalQueues} labelNamesPos={0} labelNumbersPos={1}></BarChart>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className={`col`}>
            <Card className={styles['cardSize']}>
              <CardContent>
                <div className={'col'}>
                  <h1 className={styles['title']}>TEST</h1>
                </div>
                <div className={'col'}>
                  <BarChart data={hospitalQueues} labelNamesPos={0} labelNumbersPos={1}></BarChart>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </div>
  );
}
