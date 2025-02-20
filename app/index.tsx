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


export default function Index() {
  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={['#1a237e', '#283593']}
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
              colors={['#ffffff', '#f5f5f5']}
              style={styles.cardGradient}
            >
              <View style={styles.chapterHeader}>
                <Text style={styles.chapterNumber}>Capítulo {chapter.id}</Text>
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={20}
                  color="#1a237e"
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
    backgroundColor: '#f0f0f0',
  },
  header: {
    padding: 20,
    paddingTop: 40,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#e0e0e0',
    marginTop: 5,
  },
  chaptersContainer: {
    padding: 16,
  },
  chapterCard: {
    marginBottom: 16,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
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
    color: '#1a237e',
    fontWeight: '600',
  },
  chapterTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 8,
  },
  // Estilos para la pantalla de detalle
  detailContainer: {
    flex: 1,
    backgroundColor: '#f9f9f9',
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
    color: '#ffffff',
    opacity: 0.9,
  },
  detailTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 16,
  },
  contentContainer: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -20,
    minHeight: Dimensions.get('window').height - 200,
  },
  contentText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    marginBottom: 24,
  },
  versesContainer: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 12,
    marginTop: 16,
  },
  versesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a237e',
    marginBottom: 12,
  },
  verseText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
    lineHeight: 20,
  },
});