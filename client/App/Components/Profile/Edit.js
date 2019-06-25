import React from 'react'
import { ScrollView, Text, View, Image, TextInput, } from 'react-native'
import { useQuery } from 'react-apollo-hooks';
import styles from '../../Components/Styles/Profile/Edit'
import Icons from 'react-native-vector-icons/FontAwesome5'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Edit = () => {
 
 
  return (
    <ScrollView style={styles.MainContainer}>

<Text>Name</Text>
<TextInput style={{height: 40}}
          placeholder="Type here to translate!"/>
      {/* <View style={styles.Profile}>
        <Image style={styles.ProfileImage}
          style={{ width: 200, height: 200, borderRadius: 100, alignContent: 'center' }}
          source={{ uri: data.getCaregiverProfile.avatar }}
        />
        <Text style={styles.ProfileName}> {data.getCaregiverProfile.fullname} </Text>
      </View>
      <TouchableOpacity
        style={styles.ProfileButton}
        onPress={handleGoToJob}
      >
        <Text style={styles.ProfileButtonText}> Jobs</Text>
        <Icons name={`briefcase`} style={styles.ProfileButtonIcon} />
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.ProfileButton}
        onPress={() => handleGoToAccount(id)}
      >
        <Text style={styles.ProfileButtonText}> Account</Text>
        <Icons name={`cog`} style={styles.ProfileButtonIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.ProfileButton}>
        <Text style={styles.ProfileButtonText}> Help Center</Text>
        <Icons name={`question-circle`} style={styles.ProfileButtonIcon} />
      </TouchableOpacity> */}

    </ScrollView>
  )
}

export default Edit




