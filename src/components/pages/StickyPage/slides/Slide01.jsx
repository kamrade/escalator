import React, { Component } from 'react';
import { Tween, SplitLetters } from 'react-gsap';

import ReactBodymovin from 'react-bodymovin';
import animation from './animation.json';

import './Slide01.scss';

class Slide01 extends Component {

  bodymovin;

  breakpointIn = 0.3;
  breakpointOut = 0.7;

  cursorBreakpointIn = 0.1;
  cursorBreakpointOut = 0.9;

  constructor(props) {
    super(props);
    this.state = {
      totalFrames: 0,
      frameRate: 0
    };
  }

  componentDidMount() {
    this.bodymovin.animation.isPaused = true;
    this.setState({
      totalFrames: this.bodymovin.animation.totalFrames,
      frameRate: this.bodymovin.animation.frameRate,
    });
  }

  // Анимируем currentFrame немного с костылями.
  shouldComponentUpdate(props) {
    let currentFrame = Math.round(this.state.totalFrames * props.progress * this.state.frameRate);
    this.bodymovin.animation.goToAndStop( currentFrame );
    return true;
  }

  // Анимация typewriter
  getProgress() {
    let progress = 0;
    if (this.props.progress < this.breakpointIn) {
      progress = this.props.progress / this.breakpointIn;
    } else if (this.props.progress <= this.breakpointIn && this.props.progress >= this.breakpointOut) {
      progress = 1;
    } else {
      progress = (1 - this.props.progress) / (1 - this.breakpointOut);
    }
    return progress;
  }

  // При переходе на кадр анимирует курсор
  getCursorProgressIn() {
    let progress = 0;
    if (this.props.progress < this.cursorBreakpointIn) {
      progress = this.props.progress / this.cursorBreakpointIn;
    } else if (this.props.progress <= this.cursorBreakpointIn && this.props.progress >= this.cursorBreakpointOut) {
      progress = 1;
    } else {
      progress = 1;
    }
    return progress;
  }

  // При уходе с кадра курсор растягивается по Y
  getScaleCursor() {
    if (this.props.progress > 0.6) {
      return {
        transform: `scaleY(${this.props.progress * 4})`
      }
    } else {
      return { transform: `scaleY(1)` }
    }
  }

  getOffsetProgress() {
    if (this.props.progress < 0.2) {
      return this.props.progress / 0.2;
    } else {
      return 1;
    }
  }

  render() {

    const bodymovinOptions = {
      loop: true,
      autoplay: false,
      prerender: true,
      animationData: animation
    }

    return (
      <div className="sticky-slide">

        <div className="bodymovin-wrapper">
          <ReactBodymovin ref={node => this.bodymovin = node} options={bodymovinOptions} />
        </div>

        <Tween
          totalProgress={this.getOffsetProgress()}
          from={{y: '200px'}}
          paused
        >

          <div className="sticky-slide-content">

            <div className="sticky-slide-text-content">

              <Tween
                paused
                totalProgress={this.getProgress()}
                staggerFrom={{ opacity: '0' }}
                stagger={2}
                ease="Power1.easeInOut">

                <SplitLetters>
                  <div className="splitted-letter">
                    10+ &nbsp; years</div>
                </SplitLetters>

              </Tween>

              <Tween
                wrapper={<div/>}
                paused
                totalProgress={this.getProgress()}
                staggerFrom={{ opacity: '0' }}
                stagger={2}
                ease="Power1.easeInOut">

                <SplitLetters>
                  <div className="splitted-letter">
                    of &nbsp; experience
                  </div>
                </SplitLetters>

              </Tween>

              <Tween
                wrapper={<div/>}
                paused
                totalProgress={this.getProgress()}
                staggerFrom={{ opacity: '0' }}
                stagger={2}
                ease="Power1.easeInOut">

                <SplitLetters>
                  <div className="splitted-letter">
                    in &nbsp; fintech
                  </div>
                </SplitLetters>

              </Tween>

            </div>


            <Tween
              paused
              totalProgress={this.getCursorProgressIn()}
              to={{ x: '800' }}
              ease="Power0.easeNone"
            >
              <div className={`slide-cursor-wrapper ${this.props.progress > 0.6 ? 'out' : ''}`} >
                <div className="slide-cursor slide-01-cursor" style={this.getScaleCursor()} />
              </div>
            </Tween>

          </div>

        </Tween>

      </div>
    );
  }

}

export default Slide01;
