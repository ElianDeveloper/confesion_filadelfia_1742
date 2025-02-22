import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { prologue } from "@/data/chapters";
import { COLORS } from "@/constants/theme";
import { useTheme } from "../contexts/ThemeContext";

export default function PrologueDetail() {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? COLORS.dark : COLORS.light;

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.backgroundLight }]}
    >
      <ScrollView>
        <LinearGradient colors={theme.gradient.primary} style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={24} color={theme.text.white} />
          </TouchableOpacity>
          <View style={styles.headerContent}>
            <Text style={[styles.title, { color: theme.text.white }]}>
              {prologue.title}
            </Text>
            <Text style={[styles.subTitle, { color: theme.text.white }]}>
              {prologue.subTitle}
            </Text>
          </View>
        </LinearGradient>

        <View
          style={[
            styles.contentContainer,
            { backgroundColor: theme.backgroundLight },
          ]}
        >
          {prologue.paragraphs.map((paragraph, index) => (
            <Text
              key={index}
              style={[styles.contentText, { color: theme.text.primary }]}
            >
              {paragraph.text}
            </Text>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
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
  headerContent: {
    alignItems: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    color: COLORS.text.white,
    opacity: 0.9,
  },
  subTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: COLORS.text.white,
    textAlign: "center",
    marginTop: 8,
    marginBottom: 16,
  },
  contentContainer: {
    padding: 20,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -20,
  },
  contentText: {
    fontSize: 18,
    lineHeight: 26,
    marginBottom: 20,
  },
});
