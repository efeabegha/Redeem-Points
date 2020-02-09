import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import './bars.scss';

//const data1 = [ 20, 40, 80, 60, 40, 10, 12, 14 ];

function Bars(props) {
    const [data, setData] = useState(props.points);
    const svgRef = useRef();

    useEffect(() => {
        renderSvg();
        setData(props.points);
    }, [data]);

    const renderSvg = () => {
        const svg = d3.select(svgRef.current);
        const xScale = d3.scaleBand()
            .domain(data.map((value, index) => index))
            .range([0, 300])
            .padding(0.5);

        const yScale = d3.scaleLinear()
            .domain([0, 150])
            .range([150, 0]);            

        const colorScale = d3.scaleLinear()
            .domain([50, 100, 150])
            .range(["green", "orange", "red"])
            .clamp(true);

        const xAxis = d3.axisBottom(xScale)
            .ticks(data.length)
            .tickFormat(index => index + 1);

        svg.select(".x-axis")
            .style("transform", "translateY(150px)")
            .call(xAxis);

        const yAxis = d3.axisRight(yScale);
        svg.select(".y-axis")
            .style("transform", "translateX(300px)")
            .call(yAxis);

        svg.selectAll(".bar")
            .data(data)
            .join("rect")
            .attr("class", "bar")
            .style("transform", "scale(1, -1")
            .attr("x", (value, index) => xScale(index))
            .attr("y", -150)
            .attr("width", xScale.bandwidth())
            .transition()
            .attr("fill", colorScale)
            .attr("height", value => 150 - yScale(value));
    };

    return <div className="svg-wrapper">
        <svg ref={svgRef}>
            <g className="x-axis" />
            <g className="y-axis" />
        </svg>
        {/* <br/><br/><br/>
        <button onClick={() => setData(data.map(value => value + 5))}>Update</button>
        <button onClick={() => setData(data.map(value => value + 5))}>Filter</button> */}
        </div>;
}

export {
    Bars
};