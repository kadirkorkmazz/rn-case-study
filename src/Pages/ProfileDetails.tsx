import {View, Text, Image, InteractionManager} from 'react-native';
import React from 'react';
import LeftArrow from '../assets/svg/LeftArrow';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Gender1 from '../assets/svg/Gender1';
import Gender2 from '../assets/svg/Gender2';
import MapComponent from '../components/MapComponent';
import Age from '../components/Age';

const ProfileDetails = ({route, navigation}: any) => {
  const {name, lastName, picture, age, gender, lat, long} = route.params;

  return (
    <View className="w-screen h-screen bg-white">
      <TouchableWithoutFeedback
        className="h-16 flex-row p-5 items-center "
        onPress={() => {
          navigation.goBack();
        }}
      >
        <LeftArrow />
        <Text className="text-[#B2B8C4] text-2xl ml-4 ">MY PROFILE</Text>
      </TouchableWithoutFeedback>
      <View className=" w-full h-full">
        <View className="h-[17%] items-center flex-row ">
          <Image
            source={{uri: picture}}
            className="h-24 w-24 rounded-full mx-6 "
          />
          <View>
            <Text className=" text-[#B2B8C4] font-bold ">Name</Text>
            <Text className=" text-[#6575EB] font-bold text-lg ">
              {name + ' ' + lastName}
            </Text>
          </View>
        </View>
        <View className="h-[45%] border-y border-[#B2B8C4] relative ">
          <View className="absolute left-5 top-5 z-10">
            <Text className="text-lg text-[#B2B8C4]">Location</Text>
          </View>
          <MapComponent lat={lat} long={long} />
        </View>
        <View className="flex-row h-[20%] w-full ">
          <View className="w-[35%] h-full border-r border-[#B2B8C4] ">
            <Text className="text-[#B2B8C4] text-lg ml-5 my-2">Gender</Text>
            <View className=" w-full h-[65%] items-center justify-center">
              {gender === 'male' ? <Gender1 /> : <Gender2 />}
            </View>
          </View>
          <Age age={age} />
        </View>
      </View>
    </View>
  );
};

export default ProfileDetails;
