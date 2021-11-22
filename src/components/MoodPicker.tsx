import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { theme } from '../theme';
import { MoodOptionType } from '../types';

const moodOptions: MoodOptionType[] = [
  { emoji: '🧑‍💻', description: 'studious' },
  { emoji: '🤔', description: 'pensive' },
  { emoji: '😊', description: 'happy' },
  { emoji: '🥳', description: 'celebratory' },
  { emoji: '😤', description: 'frustrated' },
];

export const MoodPicker: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<MoodOptionType>();

  return (
    <View style={styles.moodOptionsWrapper}>
      <Text style={styles.moodOptionsTitle}>How are you right now?</Text>
      <View style={styles.moodOptions}>
        {moodOptions.map(option => (
          <View>
            <Pressable
              onPress={() => setSelectedMood(option)}
              style={[
                styles.moodItem,
                selectedMood?.emoji === option.emoji
                  ? styles.selectedMoodItem
                  : undefined,
              ]}>
              <Text
                key={option.emoji + option.description}
                style={styles.moodItemEmoji}>
                {option.emoji}
              </Text>
            </Pressable>
            {option.emoji === selectedMood?.emoji && (
              <Text style={styles.descriptionText}>{option.description}</Text>
            )}
          </View>
        ))}
      </View>

      <Pressable style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Choose</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  moodOptionsWrapper: {
    border: theme.colorPurple,
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
  },

  moodOptionsTitle: {
    color: theme.colorPurple,
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 15,
  },

  moodOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },

  moodItem: {
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },

  selectedMoodItem: {
    borderColor: '#fff',
    backgroundColor: '#454C73',
  },

  moodItemEmoji: {
    fontSize: 20,
  },

  descriptionText: {
    color: '#454C73',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 10,
  },

  submitButton: {
    paddingVertical: 10,
    paddingHorizontal: 50,
    backgroundColor: theme.colorPurple,
    borderRadius: 50,
    marginVertical: 15,
  },

  submitButtonText: {
    color: theme.colorWhite,
  },
});
