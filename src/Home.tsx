import React from 'react';
import { Appbar, Text } from 'react-native-paper';

export default function Home() {
    return (
        <>
            <Appbar.Header>
                <Appbar.Content title="Title" />
                <Appbar.Action icon="dots-vertical" onPress={() => { }} />
            </Appbar.Header>
            <Text>Home</Text>
        </>
    );
}
