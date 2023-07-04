import { useState } from 'react';
import { FlatList } from 'react-native';
import { Text } from '../../global/Text';
import { LineStyled } from './styles';
import useCollection from '../../hooks/useCollection';
import Line from '../../types/Line';
import { useRouter } from 'expo-router';

interface LinesProps {
  onLineSelect: (lineId: string) => void;
  line?: Line;
  onDelete?: any;
}

function Lines({onLineSelect, line, onDelete} : LinesProps) {
  const router = useRouter();
  const { data, create, remove, refreshData  } = useCollection<Line>('lines');

  const [selectedLine, setSelectedLine] = useState('');

  const handleSelectLine = (lineId: string) => {
    const line = selectedLine === lineId ? '' : lineId;
    setSelectedLine(line);
    onLineSelect(lineId);
  };

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      contentContainerStyle={{ paddingRight: 24}}
      keyExtractor={line => line.id!}
      renderItem={({ item: line }) => {
        const isSelected = selectedLine === line.id!;

        return (
          <LineStyled onPress={() => handleSelectLine(line.id!)}>
            <Text
              color='orange'
              size={14}
              weight='600'
              opacity={isSelected ? 1 : 0.5}
            >
              {line.lineNumber}  -  {line.name}
            </Text>
          </LineStyled>
        );
      }}
    />
  );
}
export { Lines };