import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

export default function Index() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignUp = () => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Enter valid email");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (password !== repeatPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    alert("Account created successfully");

  };

  return (

    <LinearGradient
      colors={["#2A9EDB", "#2FD3C7"]}
      style={styles.container}
    >

      <View style={styles.form}>

        <Text style={styles.title}>Sign Up</Text>

        <TextInput
          placeholder="e-mail"
          placeholderTextColor="#999"
          style={styles.input}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="password"
          placeholderTextColor="#999"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          placeholder="repeat password"
          placeholderTextColor="#999"
          style={styles.input}
          secureTextEntry
          value={repeatPassword}
          onChangeText={setRepeatPassword}
        />

        {error ? <Text style={styles.error}>{error}</Text> : null}
        <TouchableOpacity onPress={handleSignUp}>

  <LinearGradient
    colors={["#2A9EDB", "#2FD3C7"]}
    style={styles.button}
  >
    <Text style={styles.buttonText}>Sign Up</Text>
  </LinearGradient>

</TouchableOpacity>


<TouchableOpacity onPress={() => router.push("/login" as any)}>

  <LinearGradient
    colors={["#2A9EDB", "#2FD3C7"]}
    style={styles.button}
  >
    <Text style={styles.buttonText}>Go to Login</Text>
  </LinearGradient>

</TouchableOpacity>

        {/* <TouchableOpacity onPress={handleSignUp}>

          <LinearGradient
            colors={["#2A9EDB", "#2FD3C7"]}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </LinearGradient>

        </TouchableOpacity> */}

        <Text style={styles.link}>
          Read User License Agreement
        </Text>

      </View>

    </LinearGradient>

  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },

  form:{
    backgroundColor:"white",
    width:"85%",
    padding:25,
    borderRadius:25
  },

  title:{
    fontSize:30,
    textAlign:"center",
    marginBottom:25,
    color:"#2FD3C7",
    fontWeight:"bold"
  },

  input:{
    backgroundColor:"#f3f3f3",
    padding:14,
    borderRadius:15,
    marginBottom:15
  },

  button:{
    padding:15,
    borderRadius:25,
    alignItems:"center",
    marginTop:10
  },

  buttonText:{
    color:"white",
    fontSize:18,
    fontWeight:"bold"
  },

  error:{
    color:"red",
    marginBottom:10,
    textAlign:"center"
  },

  link:{
    textAlign:"center",
    marginTop:15,
    color:"#2FD3C7",
    fontSize:12
  }

});