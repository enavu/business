import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
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
    title: 'Data Practicum',
    paragraph: 'There always will be many variations of issues that affect small businesses but specifically last year, Covid-19 was one of them. As a business owner, you want to always make sure you understand your growth and what goes in and out. Here we will do a summary of look at a scattered plot for sales daily and monthly, apply a linear regression so we can see what the growth looks like.  We then take a look at our top performers and plot them with Tableau to see some visualizations.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Monthly growth with Date Ordinal in python
                  </div>
                <h3 className="mt-0 mb-12">
                  Jul 2018 - March 2021
                  </h3>
                <p className="m-0">
                  Here is the scatter plot of Monthly Sales with a Date Ordinal in the x-axis.  Python's matplotlib doesnt take dates as a regerssor on the x-axis so to solve this, we create the Date Ordinal that converts the date to be plotable.
                  The analyis here is that the scatter plot show that for the first year, the business is growing in sales, up untill the second year, when Covid-19 infected the world.  
                  Each dot resembles a month and since we only have about 33 months, the regression, with little data, shows a downward trend.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/month_LR.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                Daily growth with Date Ordinal in python
                  </div>
                <h3 className="mt-0 mb-12">
                Jul 18 2018 - March 06 2021
                  </h3>
                <p className="m-0">
                Here is the scatter plot of Daily Sales with a Date Ordinal in the x-axis.  Python's matplotlib doesnt take dates as a regerssor on the x-axis so to solve this, we create the Date Ordinal that converts the date to be plotable.
                The analyis here is that the scatter plot show that for the first year, the business is growing in sales, up untill the second year, when Covid-19 infected the world.  
                Each dot resembles a day, the regression, with more data, shows an upward trend.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/daily_LR.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>
          
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Top Services
                  </div>
                <h3 className="mt-0 mb-12">
                  2018 - 2021
                  </h3>
                <p className="m-0">
                  Top services are Pedicures, Rebases
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/SalesByCategory.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                Tableau: Are there any Seasonal services?
                  </div>
                <h3 className="mt-0 mb-12">
                June - July 2018 - Dec/Jan 2019
                  </h3>
                <p className="m-0">
                  With the Top services, they don't seem to change between winter or summer.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/ServicesBySeason.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  How many clients do staff see yearly?
                  </div>
                <h3 className="mt-0 mb-12">
                  2018 - 2021
                  </h3>
                <p className="m-0">
                We can understand the top service providers and offer benefits and bonuses. On Average, the top service provider sees about 3800 a person pre-covid!!
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/StaffClientsYEarly.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;