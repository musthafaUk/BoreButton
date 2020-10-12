import colors from "../config/colors";

import * as React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";

import Carousel, { Pagination } from "react-native-snap-carousel";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
const SCREEN_WIDTH = Dimensions.get("window").width;
import { withNavigation } from "react-navigation";
import * as RootNavigation from "../navigation/NavigationService";
import data from "../mock/tasks";
class TaskScreen extends React.Component {
  static navigationOptions = {
    title: "Task",
  };

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: data,
    };
  }

  _renderItem({ item }) {
    return (
      <TouchableWithoutFeedback
        style={styles.container}
        onPress={() => RootNavigation.navigate("Content", { items: item })}
      >
        <View style={styles.img}>
          <Image
            source={{
              uri: item.taskUrl,
            }}
            style={styles.logo}
          />
        </View>
        <View style={styles.text}>
          <Text style={styles.heading}>{item.taskName}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.bg}>
        <View style={styles.headRow}>
          <Text style={styles.bore}>BoreBUtton</Text>
          <View style={{paddingLeft:50}}>
              <View style={styles.imgRound}>
                <Image
                style={styles.imgProfile}
                source={require('../assets/5.jpg')}
                />
              </View>
          </View>
        </View>
        <View style={styles.carouselStyle}>
          <Carousel
            layout={"default"}
            ref={(ref) => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={SCREEN_WIDTH}
            itemWidth={SCREEN_WIDTH}
            renderItem={this._renderItem}
            onSnapToItem={(index) => this.setState({ activeIndex: index })}
          />
        </View>
        <View style={styles.tabBar}>
          <Pagination
            containerStyle={{ backgroundColor: colors.primary }}
            dotStyle={styles.ww}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            dotsLength={5}
            activeDotIndex={this.state.activeIndex}
          />
        </View>
        <TouchableWithoutFeedback></TouchableWithoutFeedback>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: colors.primary,
    paddingTop: 45,
    flex: 1,
  },
  bore:{
    color:colors.white,
    fontSize:40,
    fontWeight:"bold",
    shadowColor:colors.light,
  },
  container: {
    backgroundColor: colors.primary,
    height: 550,
    alignItems: "center",
    paddingBottom: 50,
    // overflow: "hidden",
    // elevation: 10,
    margin: 30,
    marginTop: 0,
    borderRadius: 30,
  },
  carouselStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  heading: {
    fontSize: 18,
    padding: 10,
    color: colors.white,
    fontWeight: "bold",
  },
  headRow:{
    flexDirection:"row",
    margin:10
  },
  img: {
    height: "100%",
    width: "100%",
    borderRadius: 30,
    overflow: "hidden",
    backgroundColor: colors.white,
    elevation: 10,
    margin: 10,
  },
  imgProfile:{
    width:70,
    height:70
  },
  imgRound:{
    backgroundColor:"white",
    width:70,
    height:50,
    borderRadius:30,
    overflow:"hidden",
    elevation:10
  },
  logo: {
    width: "100%",
    height: "100%",
  },

  tabBar: {
    position: "relative",
    backgroundColor: colors.primary,
  },
  text: {
    flexDirection: "row",
  },
  ww: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: colors.white,
  },
});

export default withNavigation(TaskScreen);
