import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableHighlightProps,
} from 'react-native';
import React from 'react';

type StyledButtonProps = {
    title: string;
} & TouchableHighlightProps;

export default function StyledButton({ title, ...props }: StyledButtonProps) {
  return (
    <TouchableHighlight {...props} style={[styles.button, props.style]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableHighlight>
  );
}

const theme = {
  primaryColor: 'darkblue',
  defaultRadius: 4,
};

const styles = StyleSheet.create({
  button: {
    height: 32,
    padding: 4,
    backgroundColor: 'darkblue',
    borderRadius: theme.defaultRadius,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

