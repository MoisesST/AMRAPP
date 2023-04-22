import { useState } from 'react';

import { Ionicons } from '@expo/vector-icons';

import { TransparentModal } from '../TransparentModal';
import { Input } from '../Input';
import { SearchButton } from './styles';

interface SearchModalProps {
  visible: boolean;
  onClose: () => void;
}

function SearchModal({ visible, onClose }: SearchModalProps) {
  const [text, setText] = useState('');

  return (
    <TransparentModal
      visible={visible}
      onClose={onClose}
      title='Pesquisar'
    >
      <Input
        placeholder='Informe a linha desejada'
        onChangeText={setText}
      />

      <SearchButton
        disabled={text.length === 0}
        style={{
          marginLeft: 24,
          backgroundColor:
            `${text.length === 0 ? '#ffb6b6' : '#a2ffa2'}`
        }}
      >
        <Ionicons name="md-search" size={30} color="#666" />
      </SearchButton>
    </TransparentModal>
  );
}
export  { SearchModal };