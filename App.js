import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require("./assets/profile.jpg")} style={styles.image} />
      <Image source={require("./assets/camerabg.png")} style={styles.cameraImage} />
      <View style={styles.inputDiv}>
        <View style={styles.input}>
          <Text style={styles.label}>School</Text>
          <Text style={styles.answer}>Codetrain</Text>
        </View>

        <View style={styles.input}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.answer}>winifredasante15@gmail.com</Text>
        </View>
      </View>

      <View style={styles.inputDiv}>
        <View style={styles.secondInput}>
          <Text style={styles.secondLabel}>Name</Text>
          <Text style={[styles.secondAnswer,styles.borderColor]}>Winifred Asante</Text>
        </View>
        <View style={styles.secondInput}>
          <Text style={styles.secondLabel}>Nick Name</Text>
          <Text style={[styles.secondAnswer,styles.borderColor]}>Adwoa_Asantewaa</Text>
        </View>
        <View style={styles.secondInput}>
          <Text style={styles.secondLabel}>Emergency Contact</Text>
          <Text style={[styles.secondAnswer,styles.borderColor]}>+233 5477 3578</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>UPDATE PROFILE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 30,
  },
  image: {
    marginTop: 70,
    marginBottom: 20,
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: "center",
  },

  cameraImage: {
    position:'absolute',
    top: 190,
    left: 200,
    width: 30
  },

  inputDiv: {
    marginBottom: 30,
  },

  input: {
    flex: 0,
    flexDirection: "column",
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: "grey",
  },
  answer: {
    fontSize: 16,
  },

  secondInput: {
    marginVertical: 12,
  },
  secondLabel: {
    fontSize: 12,
    color: "#29AAE6",
  },

  borderColor: {
    borderBottomColor: "#dbe1dd",
    borderBottomWidth: 0.4,
  },

  secondAnswer: {
    fontSize: 16,
    paddingBottom: 3,
  },
  button: {
    backgroundColor: '#29AAE6',
    borderRadius: 10,
    alignSelf: 'center',
    paddingVertical: 17,
    paddingHorizontal: 120,
    borderRadius: 80
  },
  btnText: {
    color: '#fff',
  },
});