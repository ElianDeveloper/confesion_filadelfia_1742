import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { chapters } from "@/data/chapters";
import { COLORS, SHADOWS } from '@/constants/theme';

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={COLORS.gradient.primary}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>Confesión de Fe</Text>
        <Text style={styles.headerSubtitle}>Bautista de Filadelfia 1742</Text>
      </LinearGradient>

      <View style={styles.chaptersContainer}>
        {chapters.map((chapter) => (
          <TouchableOpacity
            key={chapter.id}
            style={styles.chapterCard}
            onPress={() => router.push({
              pathname: '/chapter/[id]',
              params: { id: chapter.id }
            })}
          >
            <LinearGradient
              colors={COLORS.gradient.card}
              style={styles.cardGradient}
            >
              <View style={styles.chapterHeader}>
                <Text style={styles.chapterNumber}>Capítulo {chapter.id}</Text>
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={20}
                  color={COLORS.primary}
                />
              </View>
              <Text style={styles.chapterTitle}>{chapter.title}</Text>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    padding: 20,
    paddingTop: 40,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.text.white,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    color: COLORS.text.light,
    marginTop: 5,
  },
  chaptersContainer: {
    padding: 16,
  },
  chapterCard: {
    marginBottom: 16,
    borderRadius: 12,
    backgroundColor: COLORS.white,
    ...SHADOWS.light,
    overflow: 'hidden',
  },
  cardGradient: {
    padding: 16,
  },
  chapterHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chapterNumber: {
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: '600',
  },
  chapterTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text.primary,
    marginTop: 8,
  },
  detailContainer: {
    flex: 1,
    backgroundColor: COLORS.backgroundLight,
  },
  detailHeader: {
    padding: 20,
    paddingTop: 40,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 16,
    zIndex: 1,
    padding: 8,
  },
  detailHeaderContent: {
    alignItems: 'center',
    marginTop: 20,
  },
  detailChapterNumber: {
    fontSize: 16,
    color: COLORS.text.white,
    opacity: 0.9,
  },
  detailTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text.white,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 16,
  },
  contentContainer: {
    padding: 20,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -20,
    minHeight: Dimensions.get('window').height - 200,
  },
  contentText: {
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.text.primary,
    marginBottom: 24,
  },
  versesContainer: {
    backgroundColor: COLORS.gradient.card[1],
    padding: 16,
    borderRadius: 12,
    marginTop: 16,
  },
  versesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 12,
  },
  verseText: {
    fontSize: 14,
    color: COLORS.text.secondary,
    marginBottom: 8,
    lineHeight: 20,
  },
});