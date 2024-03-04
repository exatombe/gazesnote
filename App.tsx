import * as React from 'react';
import { PaperProvider } from 'react-native-paper';
import Router from './src/Router';

export default function App() {
  return (
    <PaperProvider>
      <Router />
    </PaperProvider>
  );
}
