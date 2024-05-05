import { Image, View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
interface PopProdCardProps {
    product: {
        id: number;
        title: string;
        image: string;
        price: number;
        rating: {
            rate: number;
            count: number;
        };
    };
}

export default function ProdCard({ product }: PopProdCardProps) {
    return (
        <Link
            href={`/products/${product.id}`}
            className="flex flex-row  p-5 rounded-xl bg-white mb-5"
            style={{ gap: 25 }}
            key={product.id}
        >
            <View className="" style={{ gap: 15, marginRight:20, }}>
                <Image
                    source={{
                        uri: product.image,
                    }}
                    style={{ width: 120, height: 120 }}
                    resizeMode="contain"
                ></Image>
            </View>
            <View className="flex flex-col" style={{ gap: 25 }}>
                <View className="">
                    <Text className="text-lg font-semibold ">
                        {product.title.slice(0, 20)}
                    </Text>
                    <Text className="text-2xl text-start">
                        ${product.price}
                    </Text>
                    <Text
                        className="text-zinc-500 flex items-center justify-center"
                        style={{ gap: 5 }}
                    >
                        <AntDesign name="star" size={12} />
                        {product.rating.rate}
                    </Text>
                </View>
                <View className="flex justify-center items-end">
                    <View className="flex justify-center items-center">
                        <TouchableOpacity>
                            <Text className="text-blue-500">Add to Cart</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Link>
    );
}
