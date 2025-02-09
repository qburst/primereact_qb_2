import { ComponentBase } from '../componentbase/ComponentBase';

const classes = {
    root: 'p-progress-spinner',
    spinner: 'p-progress-spinner-svg',
    circle: 'p-progress-spinner-circle'
};
const styles = `
.p-progress-spinner {
    position: relative;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    display: inline-block;
}

.p-progress-spinner::before {
     content: '';
     display: block;
     padding-top: 100%;
}

.p-progress-spinner-svg {
    animation: p-progress-spinner-rotate 2s linear infinite;
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}

.p-progress-spinner-circle {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: 0;
    stroke: #d62d20;
    animation: p-progress-spinner-dash 1.5s ease-in-out infinite, p-progress-spinner-color 6s ease-in-out infinite;
    stroke-linecap: round;
}

@keyframes p-progress-spinner-rotate {
    100% {
        transform: rotate(360deg);
    }
}

@keyframes p-progress-spinner-dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}

@keyframes p-progress-spinner-color {
    100%,
    0% {
        stroke: #d62d20;
    }
    40% {
        stroke: #0057e7;
    }
    66% {
        stroke: #008744;
    }
    80%,
    90% {
        stroke: #ffa700;
    }
}
`;

const inlineStyles = {
    spinner: ({ props }) => ({ animationDuration: props.animationDuration })
};

export const ProgressSpinnerBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'ProgressSpinner',
        id: null,
        style: null,
        className: null,
        strokeWidth: '2',
        fill: 'none',
        animationDuration: '2s',
        children: undefined
    },
    css: {
        classes,
        styles,
        inlineStyles
    }
});
