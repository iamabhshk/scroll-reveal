# Scroll Reveal Animation Component Documentation

The Scroll Reveal Animation component is a React module that showcases the use of CSS animations to reveal content on scroll. This component utilizes the Material-UI library for styling and theming.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
  - [Scroll Animation](#scroll-animation)
  - [Scroll Reveal](#scroll-reveal)
- [Customization](#customization)
- [Conclusion](#conclusion)

## Prerequisites

To use the Scroll Reveal Animation component, ensure that you have the following dependencies installed:

- React
- Material-UI (`@mui/material`)
- Material-UI Styles (`@mui/styles`)

## Installation

**Install Dependencies:**

Make sure you have the necessary dependencies installed in your project.

```bash
npm install react @mui/material @mui/styles
```
  
## Usage

The Scroll Reveal Animation component provides a visually appealing way to reveal content as users scroll down the page. It applies CSS animations to create a smooth transition effect.

To use the component, simply integrate it within your application, as shown below:

```tsx
import React from 'react';
import ScrollReveal from './ScrollReveal';

function App() {
  return (
    <div>
      <ScrollReveal>
        <h1>My Content</h1>
      </ScrollReveal>
    </div>
  );
}
export default App;
```

This will animate the h1 with the reveal animation on scroll.

### **Notes**

- The component handles the scroll handler and animation trigger logic internally.

- For best results, wrap each element you want to animate separately.

- Customize the reveal thresholds by modifying the trigger logic.

## Features

### Reveal Animation

The Reveal Animation component employs a single animation class that handles various animations. This animation class is defined using the Material-UI makeStyles function:

```tsx
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
}));
```

#### Scroll Reveal

The core functionality of the component lies in its ability to detect when elements with the '.reveal' class enter the viewport.
The component applies the active class to these elements dynamically, revealing them smoothly as the user scrolls. This effect is achieved through a scroll event listener:

```tsx
useEffect(() => {
  const element = ref.current;

  const reveal = () => {
    if (!element) return;

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
```

## Customization

You can further customize the animation behavior by modifying the animation classes and keyframes defined within the useStyles function. Feel free to adjust the animation duration, timing functions, and other properties to match your design requirements.

## Conclusion

The Reveal Animation component provides an elegant way to enhance your website's user experience by gradually revealing content as users scroll through the page. By utilizing CSS animations and the Material-UI framework, the component adds a touch of professionalism to your web application.
