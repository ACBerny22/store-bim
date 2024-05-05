import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native";
import { Link } from "expo-router";

export default function Index() {
    return (
        <SafeAreaView className="p-5">
            <Text className="text-2xl font-bold">Products</Text>
            <Link href={"/products/1"} className="p-5">
                One
            </Link>
            <Link href={"/products/2"} className="p-5">
                Two
            </Link>
            <Link href={"/products/3"} className="p-5">
                Three
            </Link>
        </SafeAreaView>
    );
}
