import { Stack } from 'expo-router';

export default function ExternalLayout() {

    return <Stack screenOptions={{
            headerTitleStyle: {
            fontFamily: "RobotoR",
        },
    }} >
        <Stack.Screen
            name="categorie"
            options={{
                title: "Categorie",
                headerTitleAlign: "center",
            }}
        />
        <Stack.Screen
            name="detailProduct"
            options={{
                title: "Detail Product",
                headerTitleAlign: "center",
            }}
        />

    </Stack>
}
