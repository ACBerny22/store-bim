import { SafeAreaView, FlatList, Text } from "react-native";
import { useQuery } from "@tanstack/react-query";
import ProdCard from "../../../../../components/products/ProdCard";

async function fetchList() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;
}

export default function Index() {
    const { data, isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: fetchList,
    });

    if (isLoading) return <Text>Loading...</Text>;

    return (
        <SafeAreaView style={{ flex: 1 }} className="p-3">
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
