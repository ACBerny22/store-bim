import { StatusBar } from "expo-status-bar";
import { Image, Text, View } from "react-native";
import { SafeAreaView, ScrollView } from "react-native";
import { Link, useFocusEffect } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import PopProdCard from "../../../../components/products/PopProdCard";

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
        <SafeAreaView className="flex-1 bg-zinc-100 px-3">
            <ScrollView>
                <View
                    className="flex bg-zinc-900 p-8 rounded-xl mt-10"
                    style={{ gap: 18 }}
                >
                    <Text className="text-2xl font-bold text-white">
                        Total Currency
                    </Text>
                    <Text className="text-4xl text-white">$24.99</Text>
                    <Text className=" text-white">
                        You can earn points by bitching your wallet
                    </Text>
                </View>
                <View className="flex flex-row justify-between items-center my-10">
                    <Text className="text-xl font-bold ">Popular Products</Text>
                    <Link href={"/products"} className="text-zinc-500 p-3">
                        See All
                    </Link>
                </View>
                <ScrollView horizontal>
                    {data.map((product: any) => (
                        <PopProdCard
                            key={product.id}
                            product={product}
                        ></PopProdCard>
                    ))}
                </ScrollView>
            </ScrollView>
        </SafeAreaView>
    );
}
