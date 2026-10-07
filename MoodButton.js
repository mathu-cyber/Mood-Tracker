import {Pressable, Text} from 'react-native';
export default function MoodButton({emoji, label, onMoodPress, color }) {
    return (
     <Pressable onPress={onMoodPress} style={{backgroundColor: color, padding: 20, margin: 8, borderRadius: 15,}}>
  <Text>{emoji} {label}</Text>
</Pressable>
    );
}