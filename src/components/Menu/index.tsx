import { useLocation, useNavigate } from 'react-router-dom';
import Logo from '../Logo';
import MenuItem from '../MenuItem';
import { Container, MenuItemsContainer } from './styles';
import { FiHome, FiPlayCircle, FiLogOut, FiMessageSquare, FiSettings } from 'react-icons/fi';

export default function Menu() {
  const navigate = useNavigate();
  const location = useLocation();
  const itemsMenu = [
    {
      icon: <FiHome className="icon" />,
      label: 'Início',
      onClick: () => {
        navigate('/');
      },
      active: location.pathname === '/',
    },
    {
      icon: <FiPlayCircle className="icon" />,
      label: 'Cursos',
      onClick: () => {
        navigate('/courses');
      },
      active: location.pathname === '/courses',
    },
    {
      icon: <FiMessageSquare className="icon" />,
      label: 'Mensagens',
      onClick: () => {
        navigate('/');
      },
      active: location.pathname === '/mensagens',
    },
    {
      icon: <FiSettings className="icon" />,
      label: 'Configurações',
      onClick: () => {
        navigate('/');
      },
      active: location.pathname === '/configuracoes',
    },
  ];

  return (
    <Container animate={{ width: location.pathname.includes('/courses') ? '10.5vw' : '25vw' }}>
      <Logo margin="0 0 0 -0.5rem" short noLabel={location.pathname.includes('/courses')} />
      <MenuItemsContainer>
        {itemsMenu.map((item, i) => (
          <MenuItem key={i} item={item} />
        ))}
      </MenuItemsContainer>
      <MenuItem
        item={{
          icon: <FiLogOut className="icon" />,
          label: 'Deslogar',
          onClick: () => {
            navigate('/login');
          },
          active: false,
        }}
      />
    </Container>
  );
}
