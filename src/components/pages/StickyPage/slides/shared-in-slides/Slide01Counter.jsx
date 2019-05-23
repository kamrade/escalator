import React, { Component } from 'react';
import { Tween, SplitLetters } from 'react-gsap';

import './Slide01Counter.scss';

class Slide01Counter extends Component {

  getProgress() {
    if (this.props.progress < 0.2) {
      return this.props.progress / 0.2;
    } else {
      return 1;
    }
  }

  render() {
    return (
      <div className="slide-01-counter">

        { this.props.progress < 0.2 &&
          <Tween
            staggerFrom={{ y: '-100px'}}
            stagger={0.1}
            duration={0.3}
            ease="Back.easeIn"
            progress={this.getProgress()}
            paused
          >

            <SplitLetters>
              <div className="counter-element">
                123456789
              </div>
            </SplitLetters>

          </Tween>
        }

        { this.props.progress >= 0.2 &&
          <div className="counter-element static">
            10+
          </div>
        }

      </div>
    );
  }

}

export default Slide01Counter;
