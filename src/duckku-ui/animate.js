export const animate = {
  initial: {
    opacity: 0,
    transition: `transform 10s linear 10s`,
    transform: `translateX(10%)`,
    transition: `5s`,
  },
  animate: {
    opacity: 1,
    transition: `transform 10s linear 10s`,
    transform: `translateX(0%)`,
    transition: `5s`,
  },
  exit: {
    opacity: 0,
    transition: `transform 10s linear 10s`,
    transition: `5s`,
    transform: `translateX(-10%)`,
  },
};
