import React from "react";
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
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { chapters, prologue } from "@/data/chapters";
import { COLORS, SHADOWS } from "@/constants/theme";
import { useTheme } from "../contexts/ThemeContext";

export default function Index() {
  const { isDarkMode, toggleTheme } = useTheme();
  const theme = isDarkMode ? COLORS.dark : COLORS.light;

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.backgroundLight }]}
    >
      <LinearGradient colors={theme.gradient.primary} style={styles.header}>
        <TouchableOpacity onPress={toggleTheme} style={styles.themeToggle}>
          <Ionicons
            name={isDarkMode ? "sunny" : "moon"}
            size={24}
            color={theme.text.white}
          />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: theme.text.white }]}>
          Confesión de Fe
        </Text>
        <Text style={[styles.headerSubtitle, { color: theme.text.light }]}>
          Bautista de Filadelfia 1742
        </Text>
      </LinearGradient>

      <View style={styles.chaptersContainer}>
        {/* Prólogo */}
        <TouchableOpacity
          style={styles.chapterCard}
          onPress={() => router.push("/prologue")}
        >
          <LinearGradient
              colors={theme.gradient.card}
              style={styles.cardGradient}
            >
              <View style={styles.chapterHeader}>
                <Text style={[styles.chapterNumber, { color: theme.primary }]}>
                  {prologue.title}
                </Text>
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={20}
                  color={theme.primary}
                />
              </View>
              <Text
                style={[styles.chapterTitle, { color: theme.text.primary }]}
              >
                {prologue.subTitle}
              </Text>
            </LinearGradient>
        </TouchableOpacity>

        {/* Capítulos */}
        {chapters.map((chapter) => (
          <TouchableOpacity
            key={chapter.id}
            style={styles.chapterCard}
            onPress={() =>
              router.push({
                pathname: "/chapter/[id]",
                params: { id: chapter.id },
              })
            }
          >
            <LinearGradient
              colors={theme.gradient.card}
              style={styles.cardGradient}
            >
              <View style={styles.chapterHeader}>
                <Text style={[styles.chapterNumber, { color: theme.primary }]}>
                  Capítulo {chapter.id}
                </Text>
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={20}
                  color={theme.primary}
                />
              </View>
              <Text
                style={[styles.chapterTitle, { color: theme.text.primary }]}
              >
                {chapter.title}
              </Text>
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
  },
  header: {
    padding: 20,
    paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight + 20 : 40,
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
    ...SHADOWS.light,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(99, 102, 241, 0.2)",
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
    backgroundColor: COLORS.backgroundLight,
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
    fontSize: 16,
    color: COLORS.text.white,
    opacity: 0.9,
  },
  detailTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.text.white,
    textAlign: "center",
    marginTop: 8,
    marginBottom: 16,
  },
  contentContainer: {
    padding: 20,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -20,
    minHeight: Dimensions.get("window").height - 200,
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
  themeToggle: {
    position: "absolute",
    right: 20,
    top: StatusBar.currentHeight ? StatusBar.currentHeight + 20 : 40,
    padding: 8,
    borderRadius: 20,
    zIndex: 1,
  },
});
