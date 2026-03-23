import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Login() {

  const [user, setUser] = useState<any>(null);

  const getUserData = async () => {
    try {
      const response = await axios.get("https://api.github.com/users/1");
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.title}>User Data</Text>

      {user ? (
        <View style={styles.card}>

          <Image
            source={{ uri: user.avatar_url }}
            style={styles.image}
          />

          <Text>Name: {user.name}</Text>
          <Text>Login: {user.login}</Text>
          <Text>ID: {user.id}</Text>

          <Text>Company: {user.company || "Not available"}</Text>
          <Text>Location: {user.location || "Not available"}</Text>
          <Text>Email: {user.email || "Not available"}</Text>
          <Text>Bio: {user.bio || "Not available"}</Text>

          <Text>Followers: {user.followers}</Text>
          <Text>Following: {user.following}</Text>
          <Text>Public Repos: {user.public_repos}</Text>

          <Text>Created At: {user.created_at}</Text>
          <Text>Updated At: {user.updated_at}</Text>

        </View>
      ) : (
        <Text>Loading...</Text>
      )}

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },

  title: {
    fontSize: 24,
    marginBottom: 20
  },

  card: {
    alignItems: "center"
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15
  }

});