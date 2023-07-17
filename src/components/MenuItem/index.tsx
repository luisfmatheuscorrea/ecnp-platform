import { useLocation } from 'react-router-dom';
import { Container } from './styles';
import { MenuItemCProps } from './types';
import { motion } from 'framer-motion';

export default function MenuItem({ item: { icon, label, onClick, active } }: MenuItemCProps) {
  const location = useLocation();

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      active={active}
      onClick={onClick}
    >
      {icon}
      {!location.pathname.includes('/courses') && (
        <motion.p
          transition={{
            opacity: { ease: 'linear' },
            layout: { duration: 0.3 },
            delay: 1,
          }}
        >
          {label}
        </motion.p>
      )}
    </Container>
  );
}
