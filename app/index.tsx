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
import { Chapter } from "@/types";

// Datos de ejemplo
const chapters: Chapter[] = [
  {
    id: 1,
    title: "De las Sagradas Escrituras",
    content: "Las Sagradas Escrituras son la única, suficiente, cierta y infalible regla de todo conocimiento, fe y obediencia salvadores. La luz de la naturaleza y las obras de creación y providencia manifiestan la bondad, sabiduría y poder de Dios de tal manera que dejan a los hombres sin excusa; sin embargo, no son suficientes para dar aquel conocimiento de Dios y de su voluntad que es necesario para la salvación...",
    verses: [
      "2 Timoteo 3:15-17",
      "Isaías 8:20",
      "Lucas 16:29,31",
      "Efesios 2:20"
    ]
  },
  {
    id: 2,
    title: "De Dios y de la Santa Trinidad",
    content: "El Señor nuestro Dios es un único Dios, vivo y verdadero, cuya subsistencia está en Él mismo y procede de Él mismo, infinito en su ser y perfección, cuya esencia no puede ser comprendida por nadie sino por Él mismo; es espíritu purísimo, invisible, sin cuerpo, partes o pasiones, el único que tiene inmortalidad...",
    verses: [
      "1 Corintios 8:4,6",
      "Deuteronomio 6:4",
      "Jeremías 10:10",
      "Isaías 48:12"
    ]
  },
  {
    id: 3,
    title: "Del Decreto de Dios",
    content: "Dios, desde toda la eternidad, por el sapientísimo y santo consejo de su propia voluntad, ordenó libre e inalterablemente todas las cosas que suceden; sin embargo, lo hizo de tal manera que Dios ni es autor del pecado ni tiene comunión con nadie en el mismo...",
    verses: [
      "Isaías 46:10",
      "Efesios 1:11",
      "Hebreos 6:17",
      "Romanos 9:15,18"
    ]
  },
  {
    id: 4,
    title: "De la Creación",
    content: "En el principio le plació a Dios Padre, Hijo y Espíritu Santo, para la manifestación de la gloria de su poder, sabiduría y bondad eternas, crear o hacer de la nada, en el principio, el mundo y todas las cosas que en él hay, ya sean visibles o invisibles, en el lapso de seis días, y todas muy buenas...",
    verses: [
      "Juan 1:2,3",
      "Hebreos 1:2",
      "Job 26:13",
      "Romanos 1:20"
    ]
  },
];

function ChapterDetailScreen({ route, navigation }: { route: any, navigation: any }) {
  const { chapter } = route.params;

  return (
    <SafeAreaView style={styles.detailContainer}>
      <ScrollView>
        <LinearGradient
          colors={['#1a237e', '#283593']}
          style={styles.detailHeader}
        >
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <View style={styles.detailHeaderContent}>
            <Text style={styles.detailChapterNumber}>Capítulo {chapter.id}</Text>
            <Text style={styles.detailTitle}>{chapter.title}</Text>
          </View>
        </LinearGradient>

        <View style={styles.contentContainer}>
          <Text style={styles.contentText}>{chapter.content}</Text>
          
          <View style={styles.versesContainer}>
            <Text style={styles.versesTitle}>Referencias Bíblicas:</Text>
            {chapter.verses.map((verse: string, index: number) => (
              <Text key={index} style={styles.verseText}>• {verse}</Text>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

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
            onPress={() => router.push(`/chapter/${chapter.id}` as any)}
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