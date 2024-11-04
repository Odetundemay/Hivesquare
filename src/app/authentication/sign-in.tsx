import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

const SignIn = () => {
  return (
    <>
      <Stack.Screen options={{ title: "Welcome Back" }} />
      <View className="p-5 bg-white flex-1 gap-5">
        <Text className="text-lg text-[#868686] ">
          Welcome to Hivesquare, sign-in to access your account
        </Text>
        <View>
          <Text className="text-sm text-[#868686]">Email Address</Text>
          <View style={{ flexDirection: "row" }}>
            <TextInput
              className="border border-[#C2C2C2] p-4 flex-1 rounded-lg mt-2"
              placeholder="Email"
              secureTextEntry={false}
            />
          </View>
        </View>
        <Text className="text-base text-[#510424] text-center">
          Forget password?
        </Text>
        <TouchableOpacity className="bg-[#CE0941] p-4 rounded-[30]">
          <Text className="text-center text-white text-base font-semibold">
            Login
          </Text>
        </TouchableOpacity>
        <Text>Don't have an account?</Text>
        <Link href={"./test"}>
          <Text>Sign Up</Text>
        </Link>
      </View>
    </>
  );
};

export default SignIn;
