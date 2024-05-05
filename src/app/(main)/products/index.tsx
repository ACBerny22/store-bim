import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native";
import { Link } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { AntDesign } from "@expo/vector-icons";
import ProdCard from "../../../components/products/ProdCard";
import { FlatList } from "react-native";

async function fetchList() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;
}

export default function Index() {
    const { data, status, isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: fetchList,
    });

    if (isLoading) {
        return <Text>Loading...</Text>;
    }

    return (
        <SafeAreaView style={{ flex: 1 }} className="p-3">
            <Text className="text-2xl font-bold">All Products</Text>
            {data && (
                <FlatList
                    style={{ flex: 1, marginTop: 20 }}
                    data={data}
                    renderItem={({ item }) => <ProdCard product={item} />}
                    keyExtractor={(product) => product.id.toString()}
                ></FlatList>
            )}
        </SafeAreaView>
    );
}
