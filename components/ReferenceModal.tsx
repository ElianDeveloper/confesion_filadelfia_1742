import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { BiblicalReference } from '@/types';
import { COLORS } from '@/constants/theme';
import { useTheme } from '../contexts/ThemeContext';

interface ReferenceModalProps {
  isVisible: boolean;
  onClose: () => void;
  reference: BiblicalReference | null;
}

export default function ReferenceModal({ isVisible, onClose, reference }: ReferenceModalProps) {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? COLORS.dark : COLORS.light;

  if (!reference) return null;

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={[styles.modalOverlay, { backgroundColor: theme.overlay }]}>
        <View style={[styles.modalContent, { backgroundColor: theme.backgroundLight }]}>
          <ScrollView>
            {reference.citations.map((citation, index) => (
              <View key={index} style={styles.citationContainer}>
                <Text style={[styles.citationText, { color: theme.primary }]}>
                  {citation.citation}
                </Text>
                <Text style={[styles.biblicalText, { color: theme.text.primary }]}>
                  "{citation.text}"
                </Text>
              </View>
            ))}
          </ScrollView>
          <TouchableOpacity 
            style={[styles.closeButton, { backgroundColor: theme.primary }]} 
            onPress={onClose}
          >
            <Text style={[styles.closeButtonText, { color: theme.text.white }]}>
              Cerrar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    borderRadius: 12,
    padding: 20,
    width: '90%',
    maxHeight: '80%',
  },
  citationContainer: {
    marginBottom: 20,
  },
  citationText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  biblicalText: {
    fontSize: 16,
    fontStyle: 'italic',
    lineHeight: 24,
  },
  closeButton: {
    marginTop: 20,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: '600',
  },
}); 