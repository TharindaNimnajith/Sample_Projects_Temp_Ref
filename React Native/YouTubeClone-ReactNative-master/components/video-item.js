import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { MaterialIcons } from "@expo/vector-icons";

const VideoItem = ({ video }) => {
  return (
    <View style={styles.containerVideo}>
      <Image
        source={{ uri: video.snippet.thumbnails.medium.url }}
        style={styles.videoImage}
      />
      <View style={styles.vidDescrContainer}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/10.jpg" }}
          style={{ width: 45, height: 45, borderRadius: 25 }}
        />
        <View style={styles.vidDetConatainer}>
          <Text style={styles.vidTitle}>{video.snippet.title}</Text>
          <Text style={styles.vidStats}>
            {video.snippet.channelTitle +
              " • " +
              formatNumberWithMetricPrefix(video.statistics.viewCount) +
              " • views" +
              " • 3 months ago"}
          </Text>
        </View>
        <TouchableOpacity>
          <View style={styles.itemIcon}>
            <MaterialIcons name="more-vert" size={20} color="#7c7d80" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const formatNumberWithMetricPrefix = (num, digits = 1) => {
  const si = [
    { value: 1e18, symbol: "E" },
    { value: 1e15, symbol: "P" },
    { value: 1e12, symbol: "T" },
    { value: 1e9, symbol: "G" },
    { value: 1e6, symbol: "M" },
    { value: 1e3, symbol: "k" },
    { value: 0, symbol: "" }
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  function divideNum(divider) {
    return (num / (divider || 1)).toFixed(digits);
  }

  let i = si.findIndex(({ value }) => num >= value);
  if (+divideNum(si[i].value) >= 1e3 && si[i - 1]) {
    i -= 1;
  }
  const { value, symbol } = si[i];
  return divideNum(value).replace(rx, "$1") + symbol;
};

const styles = StyleSheet.create({
  containerVideo: {
    padding: 15
  },
  videoImage: {
    height: hp("28%"),
    borderRadius: 3
  },
  vidDescrContainer: {
    flexDirection: "row",
    width: wp("90%"),
    paddingTop: 15,
    paddingLeft: 10
  },
  vidDetConatainer: {
    // backgroundColor: "red",
    paddingLeft: 15,
    flex: 1,
    paddingRight: 7
  },
  vidTitle: {
    fontSize: 13,
    color: "#3c3c3c"
  },
  vidStats: {
    color: "#7c7d80",
    fontSize: 12
  }
  //   itemIcon: {
  //     paddingTop: hp("2%")
  //   }
});

export default VideoItem;
