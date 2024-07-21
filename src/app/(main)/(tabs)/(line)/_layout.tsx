import { Text, View } from "react-native";
import { Stack } from "expo-router";
import HomeHeader from "../../../../components/headers/HomeHeader";

export default function login({}) {
    
    return (
        <Stack>
            <Stack.Screen
                name="home"
                options={{
                    headerShown: true,
                    header: () => <HomeHeader />,
                }}
            ></Stack.Screen>
            <Stack.Screen
                name="products/index"
                options={{
                    headerShown: true,
                    title: "Products",
                }}
            ></Stack.Screen>
            <Stack.Screen
                name="products/[id]"
                options={{
                    headerShown: true,
                    title: "Product Details",
                }}
            ></Stack.Screen>
        </Stack>
    );
}
