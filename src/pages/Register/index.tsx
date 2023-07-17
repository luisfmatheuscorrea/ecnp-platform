import Images from '../../assets/images';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import Input from '../../components/Input';
import Logo from '../../components/Logo';
import { Container, FormBox, Image } from './styles';

export default function Register() {
  return (
    <Container>
      <Image src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
      <FormBox>
        <Logo margin="0 0 2rem 0" />
        <h1 className="title">Criar sua conta</h1>
        <h2 className="subtitle">Preencha as informações para prosseguir.</h2>
        <Input label="Nome Completo" margin="0 0 1rem 0" />
        <Input label="Email" margin="0 0 1rem 0" />
        <Input label="Senha" />
        <Button label="Criar conta" margin="2.5rem 0 0.75rem 0" />
        <Button
          icon={<Icon icon={Images.GoogleIcon} margin="0 0.5rem 0 0" />}
          label="Entrar com Google"
          model="outlined"
        />
        <p className="footer-text">
          Já tem uma conta? <strong>Entrar</strong>
        </p>
      </FormBox>
    </Container>
  );
}
