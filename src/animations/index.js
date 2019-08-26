import { keyframes } from "styled-components";

export const showingTranslateTop = keyframes`
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
`;

export const scale = keyframes`
    0% {
      transform: scale(1);        }
    50% {
      transform: scale(1.2);        }
    100% {
      transform: scale(1);
    }
`;

export const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

export const showingTranslateRight = keyframes`
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
`;

export const gradientLoginTranslate = keyframes`
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
`;
