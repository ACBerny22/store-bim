import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function HomeHeader() {
    return (
        <SafeAreaView className="">
            <View className="flex bg-slate-100 flex-row items-center px-3 pt-5 justify-between">
                <Text className="text-semibold text-zinc-600">Mauricio Fortuna</Text>
            </View>
            <View className="flex bg-slate-100 flex-row items-center px-3 pt-2 justify-between">
                <Text className="text-3xl font-bold">Welcome Back!!</Text>
                <Ionicons name="notifications" size={28} color="black" />
            </View>
        </SafeAreaView>
    );
}
