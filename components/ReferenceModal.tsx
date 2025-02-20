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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    width: '90%',
    maxHeight: '80%',
  },
  citationContainer: {
    marginBottom: 16,
  },
  citationText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a237e',
    marginBottom: 8,
  },
  biblicalText: {
    fontSize: 14,
    color: '#333',
    fontStyle: 'italic',
    lineHeight: 20,
  },
  closeButton: {
    marginTop: 16,
    padding: 12,
    backgroundColor: '#1a237e',
    borderRadius: 8,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
}); 