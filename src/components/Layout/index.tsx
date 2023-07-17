import { useLocation } from 'react-router-dom';
import Menu from '../../components/Menu';
import Header from '../Header';
import { Container, Content } from './styles';
import { LayoutProps } from './types';
import { AnimatePresence } from 'framer-motion';

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Container>
        <Menu />
        <Content animate={{ width: location.pathname.includes('/courses') ? '94.5vw' : '80vw' }}>
          <Header />
          {children}
        </Content>
      </Container>
    </AnimatePresence>
  );
}
