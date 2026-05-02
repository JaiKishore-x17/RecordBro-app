import React, { useState } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  SafeAreaView, 
  TextInput, 
  Platform, 
  StatusBar, 
  KeyboardAvoidingView,
  Modal,
  Alert
} from 'react-native';
import { useRouter } from 'expo-router';
import { 
  ArrowLeft, 
  ClipboardList, 
  Paperclip, 
  Clock, 
  Wallet, 
  Upload, 
  ChevronDown, 
  Zap,
  CheckCircle2,
  FileText
} from 'lucide-react-native';
import { styles, theme } from '@/constants/Styles';
import * as DocumentPicker from 'expo-document-picker';
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

const DOMAINS = ['Maths', 'Chemistry', 'Physics', 'Computer Science', 'Literature'];

export default function CreateRequestScreen() {
  const router = useRouter();
  
  // Form State
  const [title, setTitle] = useState('');
  const [domain, setDomain] = useState('');
  const [instructions, setInstructions] = useState('');
  const [referenceLinks, setReferenceLinks] = useState('');
  const [reward, setReward] = useState('');
  const [otherRewards, setOtherRewards] = useState('');
  const [urgent, setUrgent] = useState(false);
  
  // UI State
  const [showDomainModal, setShowDomainModal] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileUpload = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "*/*",
        copyToCacheDirectory: true,
      });

      if (!result.canceled) {
        setFileName(result.assets[0].name);
      }
    } catch (error) {
      Alert.alert("Error", "Could not pick document");
    }
  };

  const onDateChange = (event: any, selectedDate?: Date) => {
    if (Platform.OS === 'android') {
      setShowDatePicker(false);
    }
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const showPicker = () => {
    if (Platform.OS === 'android') {
      // First show date picker
      DateTimePickerAndroid.open({
        value: date,
        onChange: (event, selectedDate) => {
          if (event.type === 'set' && selectedDate) {
            // Then show time picker
            DateTimePickerAndroid.open({
              value: selectedDate,
              onChange: (tEvent, selectedTime) => {
                if (tEvent.type === 'set' && selectedTime) {
                  setDate(selectedTime);
                }
              },
              mode: 'time',
              is24Hour: false,
            });
          }
        },
        mode: 'date',
        is24Hour: false,
      });
    } else {
      setShowDatePicker(true);
    }
  };

  const handlePublish = () => {
    if (!title.trim()) {
      Alert.alert("Required", "Please enter a title for your assignment.");
      return;
    }
    if (!domain) {
      Alert.alert("Required", "Please select a category domain.");
      return;
    }
    if (!instructions.trim()) {
      Alert.alert("Required", "Please provide instructions for the worker.");
      return;
    }
    
    // Check if the deadline is in the future
    if (date <= new Date()) {
      Alert.alert("Invalid Timeline", "Submission deadline must be in the future.");
      return;
    }

    if (!reward.trim() || isNaN(Number(reward)) || Number(reward) <= 0) {
      Alert.alert("Required", "Please enter a valid reward amount.");
      return;
    }

    Alert.alert(
      "Request Succesful !",
      "Your request has been published to the platform. You will be notified when a peer accepts it.",
      [{ text: "Great", onPress: () => router.replace('/') }]
    );
  };

  return (
    <SafeAreaView style={[styles.container, { paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }]}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        {/* Header */}
        <View style={{ 
          flexDirection: 'row', 
          alignItems: 'center', 
          paddingHorizontal: 20, 
          paddingVertical: 16,
          justifyContent: 'space-between'
        }}>
          <TouchableOpacity onPress={() => router.back()}>
            <ArrowLeft size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ 
              fontSize: 24, 
              fontWeight: '900', 
              color: '#FFFFFF', 
              letterSpacing: 2,
              textAlign: 'center',
              textShadowColor: 'rgba(139, 92, 246, 0.4)',
              textShadowOffset: { width: 0, height: 0 },
              textShadowRadius: 10,
            }}>
              CREATE REQUEST <Text style={{ color: '#8B5CF6' }}>!</Text>
            </Text>
            <Text style={{ fontSize: 10, color: '#A1A1AA', letterSpacing: 1.5, marginTop: 4 }}>
              Get help finishing your work from your peers!
            </Text>
          </View>
          <View style={{ width: 24 }} />
        </View>

        <ScrollView 
          style={{ flex: 1 }}
          contentContainerStyle={{ padding: 20, paddingBottom: 40 }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Section 1: Assignment Details */}
          <View style={styles.card}>
            <View style={styles.sectionHeader}>
              <ClipboardList size={20} color="#8B5CF6" />
              <Text style={styles.h2}>ASSIGNMENT DETAILS</Text>
            </View>
            <View style={styles.divider} />
            
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>TITLE</Text>
              <TextInput 
                style={styles.input}
                placeholder="e.g., Quantum Mechanics Lab Report"
                placeholderTextColor="#525252"
                value={title}
                onChangeText={setTitle}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>CATEGORY</Text>
              <TouchableOpacity 
                onPress={() => setShowDomainModal(true)}
                style={[styles.input, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}
              >
                <Text style={{ color: domain ? '#FFFFFF' : '#525252' }}>
                  {domain || 'Select Domain'}
                </Text>
                <ChevronDown size={18} color="#A1A1AA" />
              </TouchableOpacity>
            </View>

            <View style={[styles.inputGroup, { marginBottom: 0 }]}>
              <Text style={styles.inputLabel}>INSTRUCTIONS</Text>
              <TextInput 
                style={[styles.input, styles.textArea]}
                placeholder="Detailed breakdown of requirements, formatting rules, and key references..."
                placeholderTextColor="#525252"
                multiline
                numberOfLines={4}
                value={instructions}
                onChangeText={setInstructions}
              />
            </View>
          </View>

          {/* Section 2: Reference Materials */}
          <View style={styles.card}>
            <View style={styles.sectionHeader}>
              <Paperclip size={20} color="#8B5CF6" />
              <Text style={styles.h2}>REFERENCE MATERIALS</Text>
            </View>
            <View style={styles.divider} />
            
            <TouchableOpacity 
              onPress={handleFileUpload}
              style={{ 
                borderWidth: 1.5, 
                borderColor: fileName ? '#8B5CF6' : '#262626', 
                borderStyle: 'dashed', 
                borderRadius: 16, 
                padding: fileName ? 24 : 32,
                alignItems: 'center',
                backgroundColor: '#141414',
                marginBottom: 20
              }}
            >
              {fileName ? (
                <View style={{ alignItems: 'center' }}>
                  <View style={{ backgroundColor: 'rgba(139, 92, 246, 0.2)', padding: 12, borderRadius: 10, marginBottom: 12 }}>
                    <FileText size={24} color="#8B5CF6" />
                  </View>
                  <Text style={[styles.h3, { fontSize: 14, color: '#FFFFFF' }]}>{fileName}</Text>
                  <Text style={{ fontSize: 11, color: '#8B5CF6', marginTop: 4 }}>File selected successfully</Text>
                </View>
              ) : (
                <>
                  <View style={{ backgroundColor: '#262626', padding: 12, borderRadius: 10, marginBottom: 12 }}>
                    <Upload size={24} color="#A1A1AA" />
                  </View>
                  <Text style={[styles.h3, { fontSize: 13, color: '#A1A1AA' }]}>UPLOAD SUPPORT FILES</Text>
                  <Text style={{ fontSize: 9, color: '#525252', marginTop: 4 }}>PDF, DOCX, JPG (MAX 25MB)</Text>
                </>
              )}
            </TouchableOpacity>

            <View style={[styles.inputGroup, { marginBottom: 0 }]}>
              <Text style={styles.inputLabel}>REFERENCE LINKS</Text>
              <TextInput 
                style={styles.input}
                placeholder="Paste resource URLs here..."
                placeholderTextColor="#525252"
                value={referenceLinks}
                onChangeText={setReferenceLinks}
              />
            </View>
          </View>

          {/* Section 3: Timeline */}
          <View style={styles.card}>
            <View style={styles.sectionHeader}>
              <Clock size={20} color="#8B5CF6" />
              <Text style={styles.h2}>TIMELINE</Text>
            </View>
            <View style={styles.divider} />
            
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>SUBMISSION DEADLINE</Text>
              <TouchableOpacity 
                onPress={showPicker}
                style={[styles.input, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}
              >
                <Text style={{ color: '#FFFFFF' }}>
                  {date.toLocaleString([], { dateStyle: 'short', timeStyle: 'short' })}
                </Text>
                <Clock size={18} color="#A1A1AA" />
              </TouchableOpacity>
              {showDatePicker && Platform.OS !== 'android' && (
                <DateTimePicker
                  value={date}
                  mode="datetime"
                  display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                  onChange={onDateChange}
                  themeVariant="dark"
                />
              )}
            </View>

            <TouchableOpacity 
              onPress={() => setUrgent(!urgent)}
              style={{ 
                flexDirection: 'row', 
                alignItems: 'center', 
                backgroundColor: urgent ? 'rgba(216, 180, 254, 0.1)' : '#141414',
                paddingHorizontal: 16,
                paddingVertical: 10,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: urgent ? '#8B5CF6' : '#262626',
                alignSelf: 'flex-start'
              }}
            >
              <Zap size={14} color={urgent ? '#8B5CF6' : '#A1A1AA'} fill={urgent ? '#8B5CF6' : 'transparent'} />
              <Text style={{ 
                fontSize: 11, 
                fontWeight: '800', 
                color: urgent ? '#8B5CF6' : '#A1A1AA', 
                marginLeft: 6,
                letterSpacing: 0.5
              }}>URGENT</Text>
            </TouchableOpacity>
          </View>

          {/* Section 4: Payment */}
          <View style={styles.card}>
            <View style={styles.sectionHeader}>
              <Wallet size={20} color="#8B5CF6" />
              <Text style={styles.h2}>PAYMENT</Text>
            </View>
            <View style={styles.divider} />
            
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>REWARD AMOUNT</Text>
              <View style={{ 
                flexDirection: 'row', 
                alignItems: 'center', 
                backgroundColor: '#141414', 
                borderRadius: 14, 
                borderWidth: 1.5, 
                borderColor: '#262626', 
                paddingHorizontal: 20,
                paddingVertical: 6
              }}>
                <Text style={{ color: '#00E676', fontSize: 24, fontWeight: '800', marginRight: 10 }}>₹</Text>
                <TextInput 
                  style={{ flex: 1, color: '#FFFFFF', fontSize: 24, fontWeight: '800', paddingVertical: 16 }}
                  placeholder="0.00"
                  placeholderTextColor="#262626"
                  keyboardType="numeric"
                  value={reward}
                  onChangeText={setReward}
                />
              </View>
            </View>

            <View style={[styles.inputGroup, { marginBottom: 0 }]}>
              <Text style={styles.inputLabel}>OTHER MATERIALISTIC REWARDS</Text>
              <TextInput 
                style={[styles.input, styles.textArea]}
                placeholder="E.g., Gift cards, hardware, books, or other incentives..."
                placeholderTextColor="#525252"
                multiline
                numberOfLines={3}
                value={otherRewards}
                onChangeText={setOtherRewards}
              />
            </View>
          </View>

          {/* Publish Button */}
          <TouchableOpacity 
            onPress={handlePublish}
            style={{ 
              backgroundColor: '#8B5CF6',
              borderRadius: 16,
              paddingVertical: 18,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              gap: 12,
              marginTop: 8,
              shadowColor: '#8B5CF6',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 10,
              elevation: 6
            }}
          >
            <CheckCircle2 size={20} color="#FFFFFF" />
            <Text style={{ color: '#FFFFFF', fontWeight: '900', fontSize: 16, letterSpacing: 0.5 }}>
              MAKE PAYMENT & PUBLISH REQUEST
            </Text>
          </TouchableOpacity>

          <Text style={{ 
            color: '#525252', 
            fontSize: 9, 
            textAlign: 'center', 
            marginTop: 16, 
            fontWeight: '600',
            letterSpacing: 0.5
          }}>
            BY PUBLISHING, YOU AGREE TO THE RECORDBRO OPERATIVE PROTOCOL.
          </Text>
        </ScrollView>

        {/* Domain Selection Modal */}
        <Modal
          visible={showDomainModal}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setShowDomainModal(false)}
        >
          <TouchableOpacity 
            style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.8)', justifyContent: 'flex-end' }}
            activeOpacity={1}
            onPress={() => setShowDomainModal(false)}
          >
            <View style={{ backgroundColor: '#1A1A1A', borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: 24 }}>
              <Text style={[styles.h2, { marginBottom: 20, textAlign: 'center' }]}>Select Domain</Text>
              {DOMAINS.map((d) => (
                <TouchableOpacity 
                  key={d} 
                  onPress={() => {
                    setDomain(d);
                    setShowDomainModal(false);
                  }}
                  style={{ 
                    paddingVertical: 16, 
                    borderBottomWidth: 1, 
                    borderBottomColor: '#262626',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <Text style={{ color: domain === d ? '#8B5CF6' : '#FFFFFF', fontSize: 16, fontWeight: domain === d ? '700' : '500' }}>{d}</Text>
                  {domain === d && <CheckCircle2 size={18} color="#8B5CF6" />}
                </TouchableOpacity>
              ))}
              <TouchableOpacity 
                onPress={() => setShowDomainModal(false)}
                style={{ marginTop: 20, paddingVertical: 16, backgroundColor: '#262626', borderRadius: 12, alignItems: 'center' }}
              >
                <Text style={{ color: '#FFFFFF', fontWeight: '700' }}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
