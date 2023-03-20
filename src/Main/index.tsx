import { CustomMap } from '../components/CustomMap';
import {
  Container,
  Footer,
  FooterContainer,
} from './styles';

export function Main() {
  return (
    <>
      <Container>
        <CustomMap />
      </Container>
      <Footer>
        <FooterContainer>
        </FooterContainer>
      </Footer>
    </>
  );
}