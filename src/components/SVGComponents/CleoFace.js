import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CleoFace(props) {
  return (
    <Svg
      width={120}
      height={80}
      viewBox="0 0 120 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M0 40C0 17.909 17.909 0 40 0h40c22.091 0 40 17.909 40 40s-17.909 40-40 40H40C17.909 80 0 62.091 0 40z"
        fill="#47394D"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M80 4H40C20.118 4 4 20.118 4 40s16.118 36 36 36h40c19.882 0 36-16.118 36-36S99.882 4 80 4zM40 0C17.909 0 0 17.909 0 40s17.909 40 40 40h40c22.091 0 40-17.909 40-40S102.091 0 80 0H40z"
        fill="#201A23"
      />
      <Path
        d="M73.333 39.733a13.333 13.333 0 11-26.666 0h26.666zM20 39.733a13.334 13.334 0 0126.667 0H20zM73.333 39.733a13.333 13.333 0 0126.667 0H73.333z"
        fill="#fff"
      />
    </Svg>
  )
}

export default CleoFace
