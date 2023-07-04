import { Alert } from 'react-native';
import Line from '../../types/Line';
import { useRouter } from 'expo-router';
import { useThemeContext } from '../../contexts/ThemeContext';
import { ButtonsContainer, Container } from './styles';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Text } from '../../global/Text';
import { StyledButtonT } from '../StyledButtonT';

interface LineEditProps {
  line: Line;
  link?: string;
  onDelete: () => void;
}

function LineEdit({ line, link, onDelete }: LineEditProps) {
  const router = useRouter();

  const {theme} = useThemeContext();

  return (
    <Container>
      <Text
        color={theme.color}
        size={14}
        weight='400'
      >
        {line.lineNumber} {line.name}
      </Text>

      <ButtonsContainer>
        <StyledButtonT
          onPress={() => {
            if (line.id) {
              console.log('>>>>>>>>>', line);
              router.push(link ? `/${link}/`  + line.id : '/admin/' + line.id);
            } else {
              Alert.alert(
                'View error',
                'cannot access Lines details because it does not have an id!'
              );
            }
          } }>
          <Feather name="edit" size={18} color={theme.color} />
        </StyledButtonT>

        <StyledButtonT
          onPress={() => {
            if (line.id) {
              Alert.alert('Deletar linha', 'tem certeza?', [
                {
                  text: 'Sim',
                  onPress: async () => {
                    onDelete();
                  },
                },
                {
                  text: 'No',
                  style: 'cancel',
                },
              ]);
            } else {
              Alert.alert(
                'delete error',
                'cannot delete book because it does not have an id!'
              );
            }
          } }>
          <MaterialIcons name="delete-outline" size={18} color={theme.color} />
        </StyledButtonT>
      </ButtonsContainer>
    </Container>
  );
}
export { LineEdit };
