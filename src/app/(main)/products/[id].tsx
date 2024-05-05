import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaView, Image } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import { useQuery } from "@tanstack/react-query";

async function fetchProduct(id: string) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    return data;
}

export default function App() {
    const { id } = useLocalSearchParams();

    const { data, isLoading, refetch } = useQuery({
        queryKey: ["product", id],
        queryFn: () => fetchProduct(id as string),
    });

    if (isLoading) {
        return <Text>Loading...</Text>;
    }

    return (
        <SafeAreaView className="p-5 flex justify-center items-center bg-white">
            <Image
                source={{
                    uri: data.image,
                }}
                style={{ width: 350, height: 500 }}
                resizeMode="contain"
            ></Image>
            <View>
                <Text className="text-xl font-bold text-center">
                    {data.title}
                </Text>
                <Text className="text-xl text-center">${data.price}</Text>
            </View>
        </SafeAreaView>
    );
}
