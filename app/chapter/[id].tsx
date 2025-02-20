import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";
import { chapters } from "../../data/chapters";
import { Chapter, BiblicalReference } from "@/types";
import ReferenceModal from "../../components/ReferenceModal";
import { COLORS, SHADOWS } from "@/constants/theme";

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
          colors={COLORS.gradient.primary}
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
              <Text style={styles.contentText}>
                <Text style={styles.paragraphNumber}>{paragraph.number}. </Text>
                {paragraph.segments.map((segment, index) => (
                  <React.Fragment key={index}>
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
                    {' '}
                  </React.Fragment>
                ))}
              </Text>
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
    backgroundColor: COLORS.background,
  },
  header: {
    padding: 20,
    paddingTop: 40,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: COLORS.text.white,
    textAlign: "center",
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
    color: COLORS.primary,
    fontWeight: "600",
  },
  chapterTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.text.primary,
    marginTop: 8,
  },
  detailContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  detailHeader: {
    padding: 20,
    paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight + 20 : 40,
  },
  backButton: {
    position: "absolute",
    top: StatusBar.currentHeight ? StatusBar.currentHeight + 20 : 40,
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
    color: COLORS.text.white,
    opacity: 0.9,
  },
  detailTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.text.white,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 16,
  },
  contentContainer: {
    padding: 20,
    backgroundColor: COLORS.backgroundLight,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -20,
    minHeight: Dimensions.get('window').height - 200,
  },
  paragraphContainer: {
    marginBottom: 24,
  },
  paragraphNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  contentText: {
    fontSize: 18,
    lineHeight: 26,
    color: COLORS.text.primary,
  },
  referenceText: {
    fontSize: 16,
    color: COLORS.primary,
    textAlignVertical: 'top',
    marginLeft: 2,
    fontWeight: 'bold',
    paddingHorizontal: 2,
  },
  versesContainer: {
    backgroundColor: COLORS.gradient.card[1],
    padding: 16,
    borderRadius: 12,
    marginTop: 16,
  },
  versesTitle: {
    fontSize: 18,
    fontWeight: "bold",
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
