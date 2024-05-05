import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";

export default function App() {
    const { id } = useLocalSearchParams();
    return (
        <SafeAreaView className="p-5">
            <Text className="text-2xl font-bold">Welcome Back!!</Text>
            <Text className="text-xl ">{id}</Text>
        </SafeAreaView>
    );
}
