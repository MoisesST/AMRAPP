import { View, Alert, StyleSheet } from "react-native";
import { Text } from '../global/Text';
import StyledButton from "./StyledButton";
import useCollection from "../hooks/useCollection";
import Point from "../types/Point";
import { useRouter } from "expo-router";
import styled from 'styled-components/native';
import { Platform } from 'react-native';

interface ViewPointAdminProps {
  point: Point;
  onDelete: Function;
}

function ViewPointAdmin({ point, onDelete }: ViewPointAdminProps) {
  const router = useRouter();

  return (
    <View style={styles.points}>
      <LineStyled >
        <Text
          color='orange'
          size={14}
          weight='600'
        //opacity={isSelected ? 1 : 0.5}
        >
         {point.name}
        </Text>
      </LineStyled>

      <View style={{ flexDirection: "row" }}>
        <StyledButton
          title="Detalhes"
          onPress={() => {
            if (point.id) {
              console.log(">>>>>>>>>", point)
              router.push("/points/" + point.id);
            } else {
              Alert.alert(
                "View error",
                "cannot access Point details because it does not have an id!"
              );
            }
          }}
          style={{ width: "50%" }}
        />

        <StyledButton
          title="Deletar"
          onPress={() => {
            if (point.id) {
              Alert.alert("Deletar parada", "tem certeza?", [
                {
                  text: "Sim",
                  onPress: async () => {
                    onDelete();
                  },
                },
                {
                  text: "No",
                  style: "cancel",
                },
              ]);
            } else {
              Alert.alert(
                "delete error",
                "cannot delete stop because it does not have an id!"
              );
            }
          }}
          style={{ width: "50%", backgroundColor: "darkred" }}
        />
      </View>
    </View>




  );
}

const isAndroid = Platform.OS === 'android';

const LineStyled = styled.TouchableOpacity`
  width: 350px;
  margin-left: 24px;
  padding: 5px;
  background: #000;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, ${isAndroid ? 1 : 0.1});
`;

const styles = StyleSheet.create({
  points: {
    paddingBottom: 10,
    margin: 5,
    alignItems: 'center',
  },
});

export { ViewPointAdmin };