import { Slot, Stack } from "expo-router";
import { NativeWindStyleSheet } from "nativewind";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Toast from "react-native-toast-message";

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
                options={{ title: "", presentation: "modal" }}
            ></Stack.Screen>
            <Stack.Screen
                name="(main)/products/[id]"
                options={{ title: "Product Details" }}
            ></Stack.Screen>
        </Stack>
    );
};

export default function RootLayout({}) {
    const queryClient = new QueryClient();
    /* Aqui van los providers. */

    return (
        <QueryClientProvider client={queryClient}>
            <InitialLayout />
            <Toast />
        </QueryClientProvider>
    );
}
