// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components';
import colors from '../../assets/styles/colors';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;

  padding: 0.8rem 0 0.8rem 0.8rem;
`;

export const LogoGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  font-weight: 700;
  font-size: 1rem;
`;

export const LogoImg = styled.img`
  width: 1.5rem;
  object-fit: contain;
`;

export const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 40%;

  padding: 0 4rem;

  h1.title {
    font-weight: 700;
    font-size: 2rem;

    margin-bottom: 0.5rem;
  }

  h2.subtitle {
    font-weight: 600;
    font-size: 1rem;
    color: ${colors.greyBlack};

    margin-bottom: 2rem;
  }

  p.footer-text {
    width: 100%;
    text-align: center;

    font-weight: 600;
    font-size: 1rem;
    color: ${colors.greyBlack};

    margin-top: 2.5rem;

    strong {
      color: ${colors.black + '99'};
      cursor: pointer;
    }
  }
`;

export const Image = styled.img`
  width: 60%;
  height: 100%;

  object-fit: cover;

  border-radius: 2rem;
`;
