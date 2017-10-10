import React from 'react';

export default class Wrapper extends React.Component {
  render() {
    return (
      <div style={this.getStyle()}>
        {React.Children.toArray(this.props.children)}
      </div>
    );
  };

  getStyle() {
    return {
      ...(this.props.center && {
        display:'flex',
        justifyContent:'center',
      }),
      margin:'auto',
      maxWidth:this.props.wide ? '100%' : 550,
      padding:20,
      ...this.props.style,
    };
  };
};
