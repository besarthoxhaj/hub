import React from 'react';
import config from '../../config';

export default class SnapShot extends React.Component {

  static defaultProps = {
    numId: '01.01.01',
  };

  constructor(props) {
    super(props);
    this.getImg = this.getImg.bind(this);
    this.getUrl = this.getUrl.bind(this);
  };

  render() {
    return (
      <div className="[ c-snap-shot ]">
        <a className="[ c-snap-shot__link ]" href={this.getUrl()}>
          <div className="[ c-snap-shot__inner ]">
            {this.getImg()}
            <div className="[ c-snap-shot__desc ]">
              <div className="[ c-snap-shot__desc-elm ]">
                <strong>NumId: </strong>
                {this.props.numId}
              </div>
              {this.props.mess && (
                <div className="[ c-snap-shot__desc-elm ]">
                  <strong>Mess: </strong>
                  {this.props.mess}
                </div>
              )}
              {this.props.href && (
                <div className="[ c-snap-shot__desc-elm ]">
                  <strong>Url: </strong>
                  {this.props.href}
                </div>
              )}
            </div>
          </div>
        </a>
      </div>
    );
  };

  getImg() {
    return (
      <img
        className="[ c-snap-shot__img ]"
        width={300}
        height={210}
        src={`${config('api')}/snap/${this.props.numId}`}
      />
    );
  };

  getUrl() {
    return [
      `http://localhost:`,
      `9000`,
      `/test/html`,
      `/${this.props.numId}.html`
    ].join('');
  };
}
