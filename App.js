import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ProjectScreen from './src/screens/ProjectScreen';
import MySkillScreen from './src/screens/MySkillScreen';
import ExperienceScreen from './src/screens/ExperienceScreen';
import EducationScreen from './src/screens/EducationScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Anasayfa" component={HomeScreen} />
        <Stack.Screen name="Projelerim" component={ProjectScreen} />
        <Stack.Screen name="Yeteneklerim" component={MySkillScreen} />
        <Stack.Screen name="Eğitimim" component={EducationScreen} />
        <Stack.Screen name="Deneyimlerim" component={ExperienceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
