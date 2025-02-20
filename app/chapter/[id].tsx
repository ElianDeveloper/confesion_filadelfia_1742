import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";
import { chapters } from "../../data/chapters";
import { Chapter, BiblicalReference } from "@/types";
import ReferenceModal from "../../components/ReferenceModal";

export default function ChapterDetail() {
  const { id } = useLocalSearchParams();
  const chapter = chapters.find((c: Chapter) => c.id === Number(id));
  const [selectedReference, setSelectedReference] =
    useState<BiblicalReference | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  if (!chapter) return null;

  const handleReferencePress = (reference: BiblicalReference) => {
    setSelectedReference(reference);
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.detailContainer}>
      <ScrollView>
        <LinearGradient
          colors={["#1a237e", "#283593"]}
          style={styles.detailHeader}
        >
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <View style={styles.detailHeaderContent}>
            <Text style={styles.detailChapterNumber}>
              Capítulo {chapter.id}
            </Text>
            <Text style={styles.detailTitle}>{chapter.title}</Text>
          </View>
        </LinearGradient>

        <View style={styles.contentContainer}>
          {chapter.paragraphs.map((paragraph) => (
            <View key={paragraph.number} style={styles.paragraphContainer}>
              {paragraph.segments.map((segment, index) => (
                <View key={index} style={styles.segmentContainer}>
                  <Text style={styles.contentText}>
                    {segment.text}
                    <TouchableOpacity
                      onPress={() => {
                        const reference = paragraph.references.find(
                          (ref) => ref.id === segment.referenceId
                        );
                        if (reference) handleReferencePress(reference);
                      }}
                    >
                      <Text style={styles.referenceText}>
                        {segment.referenceId}
                      </Text>
                    </TouchableOpacity>
                  </Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>

      <ReferenceModal
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        reference={selectedReference}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  header: {
    padding: 20,
    paddingTop: 40,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#e0e0e0",
    marginTop: 5,
  },
  chaptersContainer: {
    padding: 16,
  },
  chapterCard: {
    marginBottom: 16,
    borderRadius: 12,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: "hidden",
  },
  cardGradient: {
    padding: 16,
  },
  chapterHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  chapterNumber: {
    fontSize: 14,
    color: "#1a237e",
    fontWeight: "600",
  },
  chapterTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginTop: 8,
  },
  // Estilos para la pantalla de detalle
  detailContainer: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  detailHeader: {
    padding: 20,
    paddingTop: 40,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 16,
    zIndex: 1,
    padding: 8,
  },
  detailHeaderContent: {
    alignItems: "center",
    marginTop: 20,
  },
  detailChapterNumber: {
    fontSize: 20,
    color: '#ffffff',
    opacity: 0.9,
  },
  detailTitle: {
    fontSize: 28,
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
  paragraphContainer: {
    marginBottom: 24,
  },
  segmentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  contentText: {
    fontSize: 18,
    lineHeight: 26,
    color: '#333',
  },
  referenceText: {
    fontSize: 14,
    color: '#1a237e',
    textAlignVertical: 'top',
    marginLeft: 2,
    fontWeight: 'bold',
    paddingHorizontal: 2,
  },
  versesContainer: {
    backgroundColor: "#f5f5f5",
    padding: 16,
    borderRadius: 12,
    marginTop: 16,
  },
  versesTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1a237e",
    marginBottom: 12,
  },
  verseText: {
    fontSize: 14,
    color: "#555",
    marginBottom: 8,
    lineHeight: 20,
  },
});
