import { Header } from '../components/Header';
import { Lines } from '../components/Lines';
import { Points } from '../components/Points';
import {
  Container,
  LinesContainer,
  PointsContainer,
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

        <PointsContainer>
          <Points />
        </PointsContainer>

      </Container>
      <Footer>
        <FooterContainer></FooterContainer>
      </Footer>
    </>
  );
}