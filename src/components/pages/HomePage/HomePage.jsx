import React, { Component } from 'react';
import { Controller, Scene } from 'react-scrollmagic';

import { Tween } from 'react-gsap';

// import styles from './HomePage.module.scss';
import Slide02 from './slides/Slide02';

import Logo from 'components/shared/Logo';

class HomePage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      slideHeight: 0
    }
  }

  componentDidMount() {
    this.setState({
      slideHeight: this.slideNode.clientHeight
    });
  }

  render() {
    return (
      <div className="page container">

        <div id="trigger" />

        <Controller>
          <Scene offset={0} duration={ this.state.slideHeight } classToggle="active" triggerElement="#trigger" indicators={true}>

            {(progress, event) => (
              <div ref={ node => { this.slideNode = node } } className="slide">
                <Tween
                  from={{
                    left: '200px'
                  }}
                  ease="Strong.easeOut"
                  totalProgress={progress}
                  paused
                >
                  <div className="slide-content">
                    <div className="slide-text-title">10+ years</div>
                    <div className="slide-text-support">
                      of experience in fintech {progress}
                    </div>
                  </div>
                </Tween>
              </div>
            )}

          </Scene>

          <Scene
            offset={ this.state.slideHeight || 0 }
            duration={ this.state.slideHeight || 0 }
            triggerElement="#trigger"
            indicators={true}
          >

            {(progress, event) => (
              <Slide02
                progress={progress}
                slideHeight={this.state.slideHeight}
              />
            )}

          </Scene>
        </Controller>


        <div className="slide">
          <div className="slide-content">
            <div className="slide-text-title">Spare yourself</div>
            <div className="slide-text-support">from yet another marketing blah blah blah …</div>
          </div>
        </div>


        <div className="slide">
          <div className="slide-content">
            <div className="slide-text-support">Overwhelmed by chargebacks?</div>
            <div className="slide-text-title">Smart Dispute Management Tools</div>
          </div>
        </div>


        <div className="slide">
          <div className="slide-content">
            <div className="slide-text-support">Striving to comply?</div>
            <div className="slide-text-title">Fast Semi-Automated KYC & AML</div>
          </div>
        </div>





        <Logo />
      </div>
    );
  }

}

export default HomePage;
