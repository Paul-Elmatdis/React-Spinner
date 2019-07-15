/** @jsx jsx */
import React from "react";
import { keyframes, css, jsx } from "@emotion/core";
import onlyUpdateForKeys from "recompose/onlyUpdateForKeys";
import { sizeProps, sizeDefaults, sizeKeys } from "./helpers";

const skew = keyframes`
  25% {transform: perspective(100px) rotateX(180deg) rotateY(0)}
  50% {transform: perspective(100px) rotateX(180deg) rotateY(180deg)}
  75% {transform: perspective(100px) rotateX(0) rotateY(180deg)}
  100% {transform: perspective(100px) rotateX(0) rotateY(0)}
`;

class Loader extends React.Component {
  style = () => {
    const { size, sizeUnit, color } = this.props;

    return css`
      width: 0;
      height: 0;
      border-left: ${`${size}${sizeUnit}`} solid transparent;
      border-right: ${`${size}${sizeUnit}`} solid transparent;
      border-bottom: ${`${size}${sizeUnit}`} solid ${color};
      display: inline-block;
      animation: ${skew} 3s 0s infinite cubic-bezier(0.09, 0.57, 0.49, 0.9);
      animation-fill-mode: both;
    `;
  };

  render() {
    const { loading, css } = this.props;

    return loading ? <div css={[this.style(), css]} /> : null;
  }
}

Loader.propTypes = sizeProps;

Loader.defaultProps = sizeDefaults(20);

const Component = onlyUpdateForKeys(sizeKeys)(Loader);
Component.defaultProps = Loader.defaultProps;
export default Component;
