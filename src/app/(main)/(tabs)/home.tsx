import { StatusBar } from "expo-status-bar";
import { Image, Text, View } from "react-native";
import { SafeAreaView, ScrollView } from "react-native";
import { Link, useFocusEffect } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";

async function fetchList() {
    const res = await fetch("https://fakestoreapi.com/products?limit=5");
    const data = await res.json();
    return data;
}

export default function App() {
    const { data, isLoading, refetch } = useQuery({
        queryKey: ["products"],
        queryFn: fetchList,
    });

    useFocusEffect(
        useCallback(() => {
            refetch();
        }, [])
    );

    if (isLoading) {
        return <Text>Loading...</Text>;
    }

    return (
        <SafeAreaView className="flex-1 px-5 py-20">
            <View className="flex flex-row items-center justify-between">
                <Text className="text-2xl font-bold">Welcome Back!!</Text>
                <Link href={"/products"}>Settle</Link>
            </View>
            <View
                className="flex bg-violet-700 p-8 rounded mt-10"
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
            <View className="flex flex-row justify-between items-center my-10">
                <Text className="text-xl font-bold ">Popular Products</Text>
                <Link href={"/products"} className="text-zinc-500">
                    See All
                </Link>
            </View>
            <ScrollView>
                {data.map((product: any) => (
                    <View
                        className="flex justify-center items-center p-8 rounded bg-white"
                        style={{ gap: 18 }}
                    >
                        <Text className="text-2xl font-bold ">
                            {product.title}
                        </Text>
                        <Image
                            source={{
                                uri: product.image,
                            }}
                            style={{
                                width: 200,
                                height: 200,
                            }}
                        ></Image>
                        <Text className="text-4xl ">
                            ${product.price}
                        </Text>
                        <Text className=" ">
                            {product.description}
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}
