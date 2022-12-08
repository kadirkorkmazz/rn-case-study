import {View, Text, FlatList} from 'react-native';
import React, {useContext, useEffect} from 'react';
import MenuSvg from '../assets/svg/MenuSvg';
import ProfileCard from '../components/ProfileCard';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {DataContext} from '../providers/store/dataContext';

const Profiles = ({navigation}: any) => {
  const userData = useContext(DataContext);

  useEffect(() => {
    console.log(userData[userData.length - 1]);
  }, [userData]);

  return (
    <View className="w-screen h-screen bg-white">
      <View className="h-[75] justify-between flex-row p-5 items-center">
        <Text className="text-[#B2B8C4] text-2xl  ">PROFILES</Text>
        <MenuSvg />
      </View>

      <FlatList
        style={{height: '80%', flexGrow: 0, overflow: 'scroll'}}
        data={userData}
        extraData={userData}
        keyExtractor={(item) => item.login.uuid}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ProfileDetails', {
                name: item.name.first,
                lastName: item.name.last,
                picture: item.picture.large,
                age: item.dob.age,
                gender: item.gender,
                lat: item.location.coordinates.latitude,
                long: item.location.coordinates.longitude,
              });
            }}
          >
            <ProfileCard
              imgSrc={item.picture?.large}
              firstName={item.name?.first}
              age={item.dob?.age}
            />
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 1,
              width: '100%',
              backgroundColor: '#CED0CE',
            }}
          ></View>
        )}
      />
    </View>
  );
};

export default Profiles;
