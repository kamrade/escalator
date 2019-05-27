import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tween, SplitLetters } from 'react-gsap';

import SlideAnimation from './SlideAnimation';

import './Slide01.scss';

class Slide01 extends Component {

  breakpointIn = 0.3;
  breakpointOut = 0.7;

  cursorBreakpointIn = 0.1;
  cursorBreakpointOut = 0.9;

  // NODES
  stickySlideNode;

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
  getCursorStyle() {

    let containerWidth = this.stickySlideNode ? this.stickySlideNode.offsetWidth : 0;

    if (this.props.progress > 0.6) {

      let scaling = this.props.progress * (1 + this.props.progress) * (1 + this.props.progress) * 2;

      return {
        transform: `translateX(${containerWidth - 20}px) scaleY(${scaling})`,
      }

    } else {

      let translateX = Math.round(containerWidth * this.props.progress + 1200 * this.props.progress) + 20;

      if (translateX < (containerWidth - 20)) {
        return {
          transform: `translateX(${translateX}px) scaleY(1)`,
        }
      } else {
        return {
          transform: `translateX(${containerWidth - 20}px) scaleY(1)`
        }
      }


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

    return (
      <div ref={node => this.stickySlideNode = node} className="sticky-slide">

        <SlideAnimation
          progress={this.props.progress} />

        <Tween
          totalProgress={this.props.progress}
          from={{y: '200px'}}
          to={{y: '-200px'}}
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

              <Tween
                wrapper={<div/>}
                paused
                totalProgress={this.getProgress()}
                from={{ width: '0'}}
                ease="Power1.easeInOut">
                <div className="description-text">
                  <div style={{ width: '300px'}}>
                    I analyze thousands of trading transactions and reveal patterns using my machine learning algorithms. Then I predict changes in certain points and signal to sell or buy currency.
                  </div>
                </div>
              </Tween>


            </div>

            <div className={`slide-cursor-wrapper ${this.props.progress > 0.6 ? 'out' : ''}`} >
              <div className="slide-cursor slide-01-cursor" style={this.getCursorStyle()} />
            </div>

          </div>

        </Tween>


      </div>
    );
  }

}

Slide01.propTypes = {
  progress: PropTypes.number,
  windowWidth: PropTypes.number,
  windowHeight: PropTypes.number,
}

export default Slide01;
