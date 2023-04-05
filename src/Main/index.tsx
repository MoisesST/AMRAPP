import { Header } from '../components/Header';
import { Lines } from '../components/Lines';
import { StoppingPoints } from '../components/StoppingPoints';
import {
  Container,
  LinesContainer,
  StoppingPointsContainer,
  Footer,
  FooterContainer
} from './styles';

export function Main() {
  return (
    <>
      <Container>
        <Header />

        <LinesContainer>
          <Lines />
        </LinesContainer>

        <StoppingPointsContainer>
          <StoppingPoints />
        </StoppingPointsContainer>

      </Container>
      <Footer>
        <FooterContainer></FooterContainer>
      </Footer>
    </>
  );
}