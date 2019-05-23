import React, { Component } from 'react';
import { Tween, SplitLetters } from 'react-gsap';

class Slide02 extends Component {

  calculateTotalProgress() {

    let processedProgress = 0;

    if (this.props.progress <= 0.2) {
      processedProgress = this.props.progress / 0.2;
    } else if (this.props.progress > 0.2 && this.props.progress < 0.8) {
      processedProgress = 1;
    } else {
      processedProgress = (1 - this.props.progress) / 0.2;
    }

    return processedProgress;
  }

  calculateOffsetProgress() {
    let processedProgress = 0;
    if (this.props.progress <= 0.2) {
      processedProgress = 0;
    } else {
      processedProgress = this.props.progress - 0.2;
    }

    return processedProgress;
  }

  render() {
    return (
      <div className="slide">

        <Tween
          paused
          to={{ y: this.props.slideHeight/2 }}
          ease="Strong.easeOut"
          totalProgress={this.calculateOffsetProgress()}
        >
          <div className="slide-content">

            <div className="slide-text-support">
              <Tween
                paused
                totalProgress={this.calculateTotalProgress()}
                staggerFrom={{ opacity: '0' }}
                stagger={0.05}
                duration={0.2}
                ease="Power1.easeInOut"
              >
                <SplitLetters>
                  <div className="splitted-letter">
                    Fast &nbsp; onboarding
                  </div>
                </SplitLetters>
              </Tween>
            </div>

            <div className="slide-text-title">
              <Tween
                paused
                totalProgress={this.calculateTotalProgress()}
                staggerFrom={{ opacity: '0' }}
                stagger={0.05}
                duration={0.2}
                ease="Power1.easeInOut"
              >
                <SplitLetters>
                  <div className="splitted-letter">
                    in &nbsp; 1 &nbsp; day
                  </div>
                </SplitLetters>
              </Tween>
            </div>

          </div>
        </Tween>
      </div>
    );
  }

}

export default Slide02;
