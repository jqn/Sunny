import React from 'react';
import {Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  base: {
    color: '#FFF',
    fontFamily: 'Lato-Regular',
  },
  h1: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: '700',
    fontFamily: 'Audiowide-Regular',
  },
  h2: {
    fontSize: 20,
    fontFamily: 'Lato-Regular',
  },
  p: {
    fontSize: 16,
    fontFamily: 'Lato-Regular',
  },
});

export const H1 = ({children, style = {}}) => (
  <Text style={[styles.base, styles.h1, style]}>{children}</Text>
);

export const H2 = ({children, style = {}}) => (
  <Text style={[styles.base, styles.h2, style]}>{children}</Text>
);

export const P = ({children, style = {}}) => (
  <Text style={[styles.base, styles.p, style]}>{children}</Text>
);
