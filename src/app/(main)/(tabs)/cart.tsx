import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
    return (
        <SafeAreaView className="pt-5 px-3">
            <Text className="text-2xl font-bold">Cart</Text>
        </SafeAreaView>
    );
}
