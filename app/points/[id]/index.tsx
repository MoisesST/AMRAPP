import { useEffect, useState } from 'react';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import useDocument from '../../../src/hooks/useDocument';
import Point from '../../../src/types/Point';
import { Alert, FlatList, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import {
  Container,
  FormContainer,
  Footer,
  FooterContainer,
  HomeButton,
  InLineContainer,
  EditContainer,
  RecordContainer,
  LinesContainer,
  LineStyled
} from './styles';
import { useRouter, useSearchParams } from 'expo-router';
import StyledButton from '../../../src/components/StyledButton';
import styled from 'styled-components/native';
import { useThemeContext } from '../../../src/contexts/ThemeContext';
import { Text } from '../../../src/global/Text';
import { Input } from '../../../src/components/Input';
import { Button } from '../../../src/components/Button';
import { Feather } from '@expo/vector-icons';

export default function PointsDetails() {
  const { id } = useSearchParams();
  const router = useRouter();

  const {
    data: point,
    loading,
    upsert,
  } = useDocument<Point>('points', id as string);

  const [pointName, setPointName] = useState('');
  const [pointSchedular, setPointSchedular] = useState<string[]>(point?.schedules || []);
  const [pointSchedularteste, setPointSchedularteste] = useState('');

  const removeSchedule = (itemIndex: number) => {
    const updatedSchedules = pointSchedular.filter((item, index) => index !== itemIndex);
    setPointSchedular(updatedSchedules);
  };

  useEffect(() => {
    if (point) {
      setPointName(point.name);
      setPointSchedular(point.schedules);
    }
  }, [point]);

  console.log('linha 51..point name...', pointName, ' poinschedular', pointSchedular);

  if (loading || !point) return <Text>Garregando...</Text>;

  const {theme} = useThemeContext();

  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={theme.statusbar} />
      <Container>
        <Text
          size={32}
          weight={'600'}
          color={theme.title}
          style={{ marginVertical: 24, textAlign: 'center'}}
        >
          Horários
        </Text>

        <FormContainer>
          <Text
            weight='600' color={theme.color} style={{ marginBottom: 10}}
          >
            Novo nome da parada
          </Text>

          <InLineContainer>
            <EditContainer>
              <Input
                // style={{ marginBottom: 24}}
                onChangeText={setPointName}
                value={pointName}
                placeholder='nome da parada'
              />
            </EditContainer>


            <RecordContainer>
              <Button
                onPress={async () => {
                  try {
                    await upsert({
                      ...point, // repeating the existing line object
                      name: pointName, // updating
                    });
                    Alert.alert('Editado com sucesso');
                    router.push('/points');
                  } catch (error: any) {
                    Alert.alert('Update Point error', error.toString());
                  }
                }}
              >
                <Feather name="edit" size={30} color={theme.icons} />
              </Button>
            </RecordContainer>
          </InLineContainer>

          <Text
            weight='600' color={theme.color} style={{ marginBottom: 10}}
          >
            Adicione um horário
          </Text>

          <Input
            style={{ marginBottom: 24}}
            onChangeText={setPointSchedularteste}
            value={pointSchedularteste}
            placeholder="ex:.. 18:15"
          />

          <Button
            title="Cadastrar horário"
            onPress={async () => {
              point.schedules.push(pointSchedularteste);
              setPointSchedular(point.schedules);
              try {
                await upsert({
                  ...point, // repeating the existing line object
                  //name: pointName, // updating
                  schedules: pointSchedular,
                });
                Alert.alert('Horário cadastrado com sucesso');
                router.push('/points');
              } catch (error: any) {
                Alert.alert('Update Point error', error.toString());
              }
            }}
          />



          <LinesContainer>
            <FlatList
              showsVerticalScrollIndicator
              data={pointSchedular}
              contentContainerStyle={{ paddingRight: 24 }}
              renderItem={({ item }) => (

                <View>
                  <>
                    <Text
                      color='orange'
                      size={14}
                      weight='600'
                    //opacity={isSelected ? 1 : 0.5}
                    >
                      {item}
                    </Text>
                  </>

                  <View style={{ flexDirection: 'row', height:64 }}>

                    <StyledButton
                      title="Deletar Hora"
                      onPress={async () => {
                        removeSchedule(pointSchedular.indexOf(item));
                        try {
                          await upsert({
                            ...point, // repeating the existing line object
                            //name: pointName, // updating
                            schedules: pointSchedular,
                          });
                          Alert.alert('Horário removido com sucesso');
                          router.push('/points');
                        } catch (error: any) {
                          Alert.alert('Update Point error', error.toString());
                        }
                      }}
                      style={{ width: '50%', backgroundColor: 'darkred' }}
                    />
                  </View>
                </View>
              )}
            />
          </LinesContainer>
        </FormContainer>
      </Container >

      <Footer>
        <FooterContainer>
          <HomeButton
            onPress={() => router.push('/')}>
            <FontAwesome5 name="home" size={40} color={theme.color} />
          </HomeButton>
          <HomeButton
            onPress={() => router.push('/admin')}>
            <FontAwesome5 name="route" size={24} color={theme.color} />
          </HomeButton>
          <HomeButton
            onPress={() => router.push('/points')}>
            <FontAwesome name="hand-stop-o" size={24} color={theme.color} />
          </HomeButton>
        </FooterContainer>
      </Footer>
    </>
  );
}