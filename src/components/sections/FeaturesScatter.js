import React, { useEffect } from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import Image from '../elements/Image';
import * as d3 from "d3";

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesScatter = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Workflow that just works',
    paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
  };

  const DATA = [
    { x: 10, y: 20 },
    { x: 20, y: 50 },
    { x: 80, y: 90 }
  ];

  
  
  useEffect(() => {
       
    d3.json("/data_prep/monthly_linear_regression.json").then(data => {
    const margin = { top: 10, right: 40, bottom: 30, left: 30 },
    
    width = 450 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

    const svg = d3
      .select("#area")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);
    
    const dataObjx = Object.values(data.Total_sales);
    let miny = Math.min(...dataObjx);
    let maxy = Math.max(...dataObjx);
    
    const x = d3.scaleTime()
              .domain([new Date("2018-07-01"), new Date("2021-03-01")])
              .range([0, width]);
    const xAxis = d3.axisBottom().scale(x)
                  .tickFormat(d3.timeFormat("%b %Y"));

    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(xAxis);
      

    const y = d3.scaleLinear().domain([miny, maxy]).range([height, 0]);
    svg.append("g").call(d3.axisLeft(y));
    
    svg.append("g")
      .selectAll("dot")
      .data(data)
      .enter()
      .append("circle")
        .attr("cx", (d) => y(Date.parse(d.Month)))
        .attr("cy", (d) => y(d.Total_sales))
        .attr("r", 8.5)
        .style("fill", "#69b3a2");
    })
    
  }, []);

  
  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Project Summary:
                  </div>
                <h3 className="mt-0 mb-12">
                  </h3>
                <p className="m-0">
                  <br></br>What I have completed in this project:
                  <ul>
                    <li>Application Framework: React D3 with bootstrap</li>
                    <li>React Routing with a Single Page</li> 
                    <li>Python Data Transformation, Analysis and Linear Regression</li>
                    <li>Tableau Visualizations</li>
                    <li>Application Deployment: Heroku with serve configs</li>
                  </ul>
                  Want to complete
                  <ul>
                    <li>D3 Interactive Visualizations: Averages between time periods</li>
                  </ul>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
              <svg id="area" height={400} width={500}></svg>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesScatter.propTypes = propTypes;
FeaturesScatter.defaultProps = defaultProps;

export default FeaturesScatter;