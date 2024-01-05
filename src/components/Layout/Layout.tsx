import { HTMLMotionProps, motion } from 'framer-motion';

export const Layout = (props: HTMLMotionProps<'main'>) => (
  <motion.main
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.75, type: 'spring', stiffness: 80 }}
    {...props}
  />
);
