import React, { Component } from 'react';
import SlideAnimationPortal from './SlideAnimationPortal';

import ReactBodymovin from 'react-bodymovin';
import animation from 'data/animations/graph_960x960.json';

import './SlideAnimation.scss';

class SlideAnimation extends Component {

  bodymovin;

  constructor(props) {
    super(props);
    this.state = {
      totalFrames: 0,
      frameRate: 0
    };
  }

  componentDidMount() {
    this.bodymovin.animation.isPaused = true;
    // console.log(this.bodymovin.animation);
    let totalFrames = this.bodymovin.animation.totalFrames;
    let frameRate = this.bodymovin.animation.frameRate;

    this.setState({
      totalFrames: totalFrames,
      frameRate: frameRate,
    });
  }

  // Анимируем currentFrame немного с костылями.
  shouldComponentUpdate(props) {

    // TODO: Вот это очень сомнительная формула. Нужно будет внимательно почитать доки
    let currentFrame = Math.round(this.state.totalFrames * props.progress * Math.round(1/this.state.frameRate*1000));

    // console.log('::: progress:', props.progress);
    // console.log('::: current frame:', currentFrame);

    this.bodymovin.animation.goToAndStop( currentFrame );
    return true;
  }


  render() {

    const bodymovinOptions = {
      loop: true,
      autoplay: false,
      prerender: true,
      animationData: animation
    }

    return (
      <SlideAnimationPortal>
          <div className={`slide-animation ${(this.props.progress > 0 && this.props.progress < 1) ? 'active' : ''}`}>
            <div className="bodymovin-wrapper">

              <ReactBodymovin ref={node => this.bodymovin = node} options={bodymovinOptions} />

            </div>
          </div>

      </SlideAnimationPortal>
    );
  }

}

export default SlideAnimation;
