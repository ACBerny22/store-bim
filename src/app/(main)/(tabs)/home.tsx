import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native";
import { Link } from "expo-router";

export default function App() {
    return (
        <SafeAreaView className="flex-1 px-5 py-20">
            <View className="flex flex-row items-center justify-between">
                <Text className="text-2xl font-bold">Welcome Back!!</Text>
                <Link href={"/products"}>Settle</Link>
            </View>
            <View
                className="flex bg-sky-300 p-8 rounded mt-10"
                style={{ gap: 18 }}
            >
                <Text className="text-2xl font-bold text-white">
                    Title Product
                </Text>
                <Text className="text-4xl text-white">$24.99</Text>
                <Text className=" text-white">
                    Description of the amazing product
                </Text>
            </View>
        </SafeAreaView>
    );
}
