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

interface ReferenceModalProps {
  isVisible: boolean;
  onClose: () => void;
  reference: BiblicalReference | null;
}

export default function ReferenceModal({ isVisible, onClose, reference }: ReferenceModalProps) {
  if (!reference) return null;

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <ScrollView>
            {reference.citations.map((citation, index) => (
              <View key={index} style={styles.citationContainer}>
                <Text style={styles.citationText}>{citation.citation}</Text>
                <Text style={styles.biblicalText}>"{citation.text}"</Text>
              </View>
            ))}
          </ScrollView>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: COLORS.overlay,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: COLORS.backgroundLight,
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
    color: COLORS.primary,
    marginBottom: 10,
  },
  biblicalText: {
    fontSize: 16,
    color: COLORS.text.primary,
    fontStyle: 'italic',
    lineHeight: 24,
  },
  closeButton: {
    marginTop: 20,
    padding: 12,
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    alignItems: 'center',
  },
  closeButtonText: {
    color: COLORS.text.white,
    fontSize: 18,
    fontWeight: '600',
  },
}); 