import { Slot, Stack } from "expo-router";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
    default: "native",
});

const InitialLayout = () => {
    return (
        <Stack>
            <Stack.Screen
                name="(main)/(tabs)"
                options={{
                    headerShown: false,
                }}
            ></Stack.Screen>
            <Stack.Screen
                name="(main)/products/index"
                options={{ title: "" }}
            ></Stack.Screen>
            <Stack.Screen
                name="(main)/products/[id]"
                options={{ title: "Product Details" }}
            ></Stack.Screen>
        </Stack>
    );
};

export default function RootLayout({}) {
    /* Aqui van los providers. */
    return <InitialLayout />;
}
