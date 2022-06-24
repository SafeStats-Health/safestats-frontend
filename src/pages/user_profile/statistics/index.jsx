import styles from './styles.module.css';
import React, {useEffect, useRef, useState} from "react";
import * as d3 from 'd3';
import {Card, CardContent} from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';
import ChartService from '../../../services/chart.service';
import t from '../../../i18n/translate';

export default function Statistics() {

  const [charts, setCharts] = useState();

  useEffect(() => {
    if (!charts)
      ChartService.chart('40.7128', '-74.0060').then(r => {
        setCharts(r.data)
        console.log(r.data);
      })
  }, []);

  const hospitalBeds = [
    {name: 'Nações', number: 233},
    {name: 'Pequeno Principe', number: 111},
    {name: 'Sugisawa', number: 321},
    {name: 'Marcelino Champagnat', number: 126},
  ]

  const hospitalQueues = [
    {name: 'Nações', number: 11},
    {name: 'Pequeno Principe', number: 21},
    {name: 'Sugisawa', number: 13},
    {name: 'Marcelino Champagnat', number: 31},
  ]

  // size of the container
  const margins = {top: 20, bottom: 10};
  const chartWidth = 600;
  const chartHeight = 350 - margins.top - margins.bottom;

  const BarChart = ({data, labelNamesPos, labelNumbersPos}) => {
    const d3Chart = useRef()

    useEffect(() => {
      setTimeout(() => {


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

      }, 2000)
    }, [])

    return (
      <svg ref={d3Chart}></svg>
    )
  }

  // TODO finish truncate names
  return (
    <div className={styles['statisticsPos']}>
      <div className={'container'}>
        <div className={`${styles['cardPos']} row`}>
          <div className={'col'}>
            <Card className={styles['cardSize']}>
              <CardContent>
                <div className={'col'}>
                  <h1 className={styles['title']}>{`${charts?.results[0].name ?? ''} - Doenças`}</h1>
                </div>
                <div className={'col'}>
                  <BarChart data={charts?.results[0].diseases.length > 6 ?
                    charts?.results[0].diseases.substr(0, 6 - 1) + '...' :
                    charts?.results[0].diseases}
                            labelNamesPos={0}
                            labelNumbersPos={1}></BarChart>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className={`col`}>
            <Card className={styles['cardSize']}>
              <CardContent>
                <div className={'col'}>
                  <h1 className={styles['title']}>{`${charts?.results[0].name ?? ''} - Specialties`}</h1>
                </div>
                <div className={'col'}>
                  <BarChart data={charts?.results[0].specialties.length > 6 ?
                    charts?.results[0].specialties.substr(0, 6 - 1) + '...' :
                    charts?.results[0].specialties}
                            labelNamesPos={0} labelNumbersPos={1}></BarChart>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className={`${styles['cardPos']} row`}>
          <div className={'col'}>
            <Card className={styles['cardSize']}>
              <CardContent>
                <div className={'col'}>
                  <h1 className={styles['title']}>{t('HOSPITAL_QUEUES')}</h1>
                </div>
                <div className={'col'}>
                  <BarChart data={hospitalQueues} labelNamesPos={0} labelNumbersPos={1}></BarChart>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className={'col'}>
            <Card className={styles['cardSize']}>
              <CardContent>
                <div className={'col'}>
                  <h1 className={styles['title']}>{t('HOSPITAL_BEDS')}</h1>
                </div>
                <div className={'col'}>
                  <BarChart data={hospitalBeds} labelNamesPos={0} labelNumbersPos={1}></BarChart>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </div>
  );
}
