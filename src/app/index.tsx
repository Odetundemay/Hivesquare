import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Page() {
  return (
    <View>
      <Link href={"./authentication/sign-in"}>
        <Text className="text-3xl font-bold">Index</Text>
      </Link>
    </View>
  );
}
