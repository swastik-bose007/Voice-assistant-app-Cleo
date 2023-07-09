import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SplashLogoSVG(props) {
  return (
    <Svg
      width={85}
      height={85}
      viewBox="0 0 85 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M0 34C0 17.972 0 9.958 4.98 4.98 9.957 0 17.971 0 34 0h17c16.028 0 24.042 0 29.02 4.98C85 9.957 85 17.971 85 34v17c0 16.028 0 24.042-4.98 29.02C75.043 85 67.029 85 51 85H34c-16.028 0-24.042 0-29.02-4.98C0 75.043 0 67.029 0 51V34z"
        fill="#FBFBFB"
      />
      <Path
        d="M51 42.5a8.501 8.501 0 01-14.51 6.01A8.5 8.5 0 0134 42.5h17zM17 42.5a8.5 8.5 0 1117 0H17zM51 42.5a8.501 8.501 0 0114.51-6.01A8.5 8.5 0 0168 42.5H51z"
        fill="#2E2532"
      />
    </Svg>
  )
}

export default SplashLogoSVG
