import { FiFilter } from 'react-icons/fi';
import Button from '../Button';
import SearchInput from '../SearchInput';
import { Avatar, Container } from './styles';

export default function Header() {
  return (
    <Container className="header">
      <SearchInput />
      <Button
        width="fit-content"
        margin="0 3rem 0 0.5rem"
        label="Filtrar"
        icon={<FiFilter className="icon" />}
        model="contained"
      />
      <Avatar variant="rounded">LF</Avatar>
    </Container>
  );
}
