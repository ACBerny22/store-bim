import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { NativeWindStyleSheet } from "nativewind";

export default function App() {
    return (
        <View>
            <Text>Open up App.tsx to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
    );
}

NativeWindStyleSheet.setOutput({
    default: "native",
});
