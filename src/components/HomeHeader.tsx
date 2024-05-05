import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native";

export default function HomeHeader() {
    return (
        <SafeAreaView className="pt-16 pb-6 px-5  flex justify-center items-start bg-violet-400">
            <Text className="text-white text-2xl font-bold">Welcome Back</Text>
        </SafeAreaView>
    );
}
