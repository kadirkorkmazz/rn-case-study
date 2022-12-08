import {View, Text, Image} from 'react-native';
import React from 'react';
import RightArrow from '../assets/svg/RightArrow';

type ProfileCardProps = {
  imgSrc: string;
  firstName: string;
  age: number;
};

const ProfileCard = (props: ProfileCardProps) => {
  return (
    <View className="flex-row items-center justify-between pl-4 pr-6 py-3">
      <Image source={{uri: props.imgSrc}} className="h-14 w-14 rounded-full " />
      <View className=" items-start justify-start w-3/5">
        <Text className=" text-[#6575EB] font-bold ">
          {props.firstName}, {props.age}
        </Text>
      </View>
      <RightArrow />
    </View>
  );
};

export default ProfileCard;
