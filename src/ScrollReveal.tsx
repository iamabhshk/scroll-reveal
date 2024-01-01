import React, { useEffect, useRef } from 'react';
import { Container, ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const theme = createTheme();

const useStyles = makeStyles(() => ({
  reveal: {
    opacity: 0,
    transition: 'opacity 0.5s ease-in',
  },
  active: {
    opacity: 1,
  },
  fadeReveal: {
    transform: 'translateY(20px)',
    animation: '$fadeRevealAnimation 0.7s ease-in',
  },
  '@keyframes fadeRevealAnimation': {
    '0%': {
      transform: 'translateY(0px)',
      opacity: 0,
    },
    '100%': {
      transform: 'translateY(0)',
      opacity: 1,
    },
  },
}));

function ScrollReveal({ children }) {
  const classes = useStyles();

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    const reveal = () => {
      if (!element) {
        return;
      }

      const windowHeight = window.innerHeight;
      const top = element.getBoundingClientRect().top;
      const activeClass = classes.active;

      if (top < windowHeight - 150) {
        element.classList.add(activeClass);
      } else {
        element.classList.remove(activeClass);
      }
    };

    window.addEventListener('scroll', reveal);

    reveal();

    return () => window.removeEventListener('scroll', reveal);
  }, [classes.active]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <div ref={ref} className={`${classes.reveal} `}>
          {children}
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default ScrollReveal;

