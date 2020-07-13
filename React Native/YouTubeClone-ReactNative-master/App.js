import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from "react-native";
import Header from "./components/header";
import BottomTabBar from "./components/bottom-tab";
import VideoItem from "./components/video-item";
import data from "./data.json";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <FlatList
          data={data.items}
          ItemSeparatorComponent={() => (
            <View style={{ height: 0.5, backgroundColor: "#cccccc" }} />
          )}
          renderItem={video => (
            <TouchableOpacity>
              <VideoItem video={video.item} />
            </TouchableOpacity>
          )}
        />
      </View>

      <BottomTabBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  body: {
    flex: 1
  }
});
