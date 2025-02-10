import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  FlatList,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Todo from "./Todo";

const TodoList = () => {
  const [title, setTitle] = useState("TodoList");
  const [text, setText] = useState<any>();
  const [secondText, setSecondText] = useState<any>();
  const [list, setList] = useState(["Hello World"]);
  const [listDate, setDateList] = useState(["10 may"]);
  const [theArray, setTheArray] = useState<any>([]);
  const counter = 0;

  // ADD ITEM METHOD
  const addItem = () => {
    const theOnlyArray = theArray;
    theOnlyArray.push(text);
    theOnlyArray.push(secondText);
    setTheArray(theOnlyArray);
    setSecondText("");
    setText("");
  };

  const deleteItem = (index: any) => {
    const theOnlyArray = theArray.filter(
      (todo: any) => todo !== index && todo !== index + 1
    );
    setTheArray(theOnlyArray);
  };
  console.log(theArray);

  return (
    <View style={{ marginTop: 170, minWidth: 300 }}>
      <Text
        style={{
          textAlign: "center",
          fontWeight: "bold",
          color: "#523544",
          fontSize: 30,
        }}
      >
        {title}
      </Text>
      <View style={{ marginVertical: 10 }}>
        <Text style={{ textAlign: "center" }}>Add a to do</Text>
        <TextInput
          style={{ borderWidth: 2, marginVertical: 5 }}
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <Text style={{ textAlign: "center" }}>Add a date</Text>
        <TextInput
          style={{ borderWidth: 2, marginVertical: 5 }}
          value={secondText}
          onChangeText={(secondText) => setSecondText(secondText)}
        />
        <Button title="Add item" onPress={addItem} />
      </View>
      <View>
        <SafeAreaProvider>
          <SafeAreaView>
            <FlatList
              data={theArray}
              columnWrapperStyle={{ justifyContent: "space-between" }}
              scrollEnabled={false}
              numColumns={2}
              key={"_"}
              ListHeaderComponent={() => {
                return (
                  <View
                    style={{
                      flexDirection: "row",
                      alignSelf: "center",
                      gap: 90,
                    }}
                  >
                    <Text>Thing to do</Text>
                    <Text>Date to be done</Text>
                  </View>
                );
              }}
              keyExtractor={(item) => "_" + item}
              renderItem={({ item, index }: any) => (
                <View key={item}>
                  <Todo
                    key={index}
                    item={item}
                    index={index}
                    delete={deleteItem}
                  />
                </View>
              )}
            />
          </SafeAreaView>
        </SafeAreaProvider>
      </View>
    </View>
  );
};
/* 
const styles = StyleSheet.create({
  contaninerOne: { marginLeft: 309 },
  align: {
    alignSelf: "center",
  },
  inARow: {
    textAlign: "center",
  },
  font: {
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
  },
  firstContainer: {
    marginHorizontal: 20,
    textAlign: "center",
  },
}); */

export default TodoList;
