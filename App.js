import { StatusBar } from 'expo-status-bar';
import MoodButton from './MoodButton';
import {useState} from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {
  const [moods, setMoods] = useState({
    happy: 0,
    sad: 0,
    tired: 0,
    excited: 0,
  });
  const handleMoodPress = (mood) => {
  setMoods({
    ...moods,
    [mood]: moods[mood] + 1,
  });
};
const resetMoods = () => {
  setMoods({
    happy: 0,
    sad: 0,
    tired: 0,
    excited: 0,
  });
};
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to your Mood Tracker!</Text>
      <View style={styles.moodContainer}>
      <MoodButton emoji="😊" label="Happy"color="#DDEBF7" onMoodPress={() => handleMoodPress('happy')} />
        <MoodButton emoji="🥲" label="Sad" color="#FFE0B2" onMoodPress={() => handleMoodPress('sad')} />
          <MoodButton emoji="🫩" label="Tired" color="#E8DFF5" onMoodPress={() => handleMoodPress('tired')} />
            <MoodButton emoji="😃" label="Excited"   color="#FFF1B8" onMoodPress={() => handleMoodPress('excited')} />
      </View>
      <Text>Happy: {moods.happy}</Text>
      <Text>Sad: {moods.sad}</Text>
      <Text>Tired: {moods.tired}</Text>
      <Text>Excited: {moods.excited}</Text>
      <Pressable onPress={resetMoods} style={styles.resetButton}>
  <Text style={styles.resetText}>Reset Mood</Text>
</Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCE4EC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
  fontWeight: 'bold',
  marginBottom: 20,
  },
  moodContainer: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  width: '90%',
},
resetButton: {
  backgroundColor: '#D8A7B1',
  paddingVertical: 12,
  paddingHorizontal: 30,
  borderRadius: 20,
  marginTop: 20,
},

resetText: {
  fontSize: 16,
  fontWeight: 'bold',
},
});
