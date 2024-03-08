import React from 'react'
import "./progress.scss"

const Circle = ({ color, percentage, size, strokeWidth }) => {
    const radius = (size / 2) - 10
    const circ = 2 * Math.PI * radius - 20
    const strokePct = ((100 - Math.round(percentage)) * circ) / 100

    return (
        <circle
            r={radius}
            cx="50%"
            cy="50%"
            fill="transparent"
            stroke={strokePct !== circ ? color : ""}
            strokeWidth={strokeWidth}
            strokeDasharray={circ}
            strokeDashoffset={percentage ? strokePct : 0}
            strokeLinecap="round"
        ></circle>
    )
}

const Progress = ({
    percentage,
    isPlaying,
    image,
    size,
    color }) => {
    return (
        <div className='progress flex'>
            <svg width={size} height={size}>
                <g>
                    <Circle
                        strokeWidth={"0.2rem"}
                        color="#49433D"
                        size={size} />
                    <Circle
                        strokeWidth={"0.4rem"}
                        color={color}
                        percentage={percentage}
                        size={size} />
                </g>
                <defs>
                    <clipPath id="myCircle">
                        <circle cx="50%" cy="50%" r={(size / 2) - 30} fill="#fff" />
                    </clipPath>
                </defs>
                <image
                    className={isPlaying ? "active" : ""}
                    x={0}
                    y={0}
                    width={2 * ((size / 2))}
                    height={2 * ((size / 2))}
                    href={image}
                    clipPath={"url(#myCircle)"} />
            </svg>
        </div>
    )
}

export default Progress