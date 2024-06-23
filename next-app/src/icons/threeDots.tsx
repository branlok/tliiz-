import * as React from "react"
const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="none"
        viewBox="0 0 24 24"
        {...props}
    >
        <path
            fill="#fff"
            d="M5 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM21 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"
        />
    </svg>
)
export default SvgComponent
