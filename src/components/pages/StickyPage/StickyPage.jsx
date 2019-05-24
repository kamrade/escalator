import React, { Component } from 'react';
import { Controller, Scene } from 'react-scrollmagic';

import StickyPageNav from './StickyPageNav';
import Slide01 from './slides/Slide01';

import './StickyPage.scss';

class StickyPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      slideHeight: 0
    }
    this.resizeHandler   = this.resizeHandler.bind(this);
  }

  componentDidMount() {
    this.setWindowHeight();
    window.addEventListener('resize', this.resizeHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeHandler);
  }

  resizeHandler() {
    this.setWindowHeight();
  }

  setWindowHeight() {
    this.setState({
      slideHeight: window.innerHeight
    });
  }

  render() {

    return (
      <div className="page container-fluid">

          <StickyPageNav />

          <div className="section" />

          <Controller>

            <Scene
              classToggle="active"
              indicators={true}
              duration={this.state.slideHeight}
              pin={true}>
              {(progress, event) => {

                return (
                  <div className="slide-container section1">
                    <Slide01 progress={progress} />
                  </div>
                )

              }}
            </Scene>

            <Scene
              indicators={true}
              duration={this.state.slideHeight}
              pin={{ pushFollowers: false }}>
              <div className="slide-container section2">
                <div className="sticky-slide">
                  <div>Pin Test 2</div>
                </div>
              </div>
            </Scene>

            <Scene
              indicators={true}
              duration={this.state.slideHeight}
              pin={true}>
              <div className="slide-container">
                <div className="sticky-slide">
                  <div>Pin Test 3</div>
                </div>
              </div>
            </Scene>

          </Controller>

          <div className="section" />

      </div>
    );
  }

}

export default StickyPage;
