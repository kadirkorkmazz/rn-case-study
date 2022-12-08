import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinesSvg from '../assets/svg/LinesSvg';

interface AgeProps {
  age: number;
}

const Age = (props: AgeProps) => {
  const [agePercent, setAgePercent] = useState(10);

  useEffect(() => {
    if (props.age > 80) {
      setAgePercent(80);
      return;
    } else if (props.age < 10) {
      setAgePercent(10);
      return;
    } else {
      setAgePercent(props.age);
    }
  }, [props.age]);

  console.log(agePercent);

  return (
    <View className="w-[65%] h-full justify-end relative">
      <Text className="text-[#B2B8C4] text-lg z-10 absolute top-2 left-5">
        Age
      </Text>
      <View className=" w-full flex-row justify-end relative">
        <Text className="text-[#B2B8C4] text-lg z-10 absolute"></Text>
        <View className="w-[40%] h-full justify-end border-b-[3px] border-[#6575EB]">
          <Text className="text-[#B2B8C4] font-bold text-[15px] mb-1.5">
            {props.age} yo
          </Text>
        </View>
      </View>

      <View
        style={{height: `${agePercent}%`}}
        className={`bg-[#B2BAF4] flex-row justify-end overflow-hidden`}
      >
        <View className="mr-[-20] overflow-hidden">
          <LinesSvg />
          <View className="mt-[-10]">
            <LinesSvg />
          </View>
          <View className="mt-[-10]">
            <LinesSvg />
          </View>
          <View className="mt-[-10]">
            <LinesSvg />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Age;
