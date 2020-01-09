import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { useHeaderHeight } from 'react-navigation-stack';

// import { Container } from './styles';

export default function Dashboard({ navigation }) {
  const headerHeight = useHeaderHeight();
  return (
    <SafeAreaView style={{ top: headerHeight }}>
      <Text>HOME</Text>
    </SafeAreaView>
  );
}
