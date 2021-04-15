export const listVariants = {
  initial: {
    x: '100vw',
  },
  animate: {
    x: 0,
    transition: { duration: 0.5, type: 'spring' }
  },
  exit: {
    x: '100vw',
    transition: { duration: 0.5 }
  }
}

export const staggerVariants = {
  animate: {
    transition: { staggerChildren: 0.5 }
  }
}