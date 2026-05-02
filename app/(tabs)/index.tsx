import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, StatusBar, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { Header } from '@/components/Header';
import { RequestCard } from '@/components/RequestCard';
import { styles, theme } from '@/constants/Styles';

const CATEGORIES = ['ALL', 'RECORDS', 'ASSIGNMENTS', 'QUIZZES'];

export default function HomeScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={[styles.container, { paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }]}>
      <StatusBar barStyle="light-content" />
      <Header />
      
      <ScrollView 
        style={{ flex: 1 }} 
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 10, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Section */}
        <View style={{ 
          backgroundColor: '#8B5CF6', 
          borderRadius: 24, 
          padding: 24, 
          marginBottom: 24,
          minHeight: 200,
          justifyContent: 'center'
        }}>
          <Text style={[styles.h1, { color: '#FFFFFF', marginBottom: 20 }]}>
            Hello, Jai!{'\n'}Ready to earn some cash or get your work done?
          </Text>
          
          <View style={{ flexDirection: 'row', gap: 12 }}>
            <TouchableOpacity style={{ 
              backgroundColor: '#000000', 
              paddingHorizontal: 16, 
              paddingVertical: 12, 
              borderRadius: 12,
              flex: 1,
              alignItems: 'center'
            }}
            onPress={() => router.push('/create')}
          >
              <Text style={{ color: '#FFFFFF', fontWeight: '800', fontSize: 13 }}>POST REQUEST</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={{ 
              backgroundColor: '#A78BFA', 
              paddingHorizontal: 16, 
              paddingVertical: 12, 
              borderRadius: 12,
              flex: 1,
              alignItems: 'center'
            }}>
              <Text style={{ color: '#FFFFFF', fontWeight: '800', fontSize: 13 }}>VIEW EARNINGS</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Category Filters */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          style={{ marginBottom: 32 }}
          contentContainerStyle={{ gap: 10 }}
        >
          {CATEGORIES.map((cat, i) => (
            <TouchableOpacity 
              key={cat} 
              style={[
                styles.pill, 
                i === 0 && styles.pillActive,
                { paddingHorizontal: 20, paddingVertical: 10 }
              ]}
            >
              <Text style={[
                styles.labelSm, 
                { color: i === 0 ? '#FFFFFF' : '#FFFFFF' }
              ]}>
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Section Header */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <Text style={styles.sectionTitle}>AVAILABLE REQUESTS</Text>
          <Text style={[styles.labelXs, { letterSpacing: 1 }]}>24 ONLINE</Text>
        </View>

        {/* Request Cards */}
        <View>
          <RequestCard 
            tag="Chemistry"
            time="8H REMAINING"
            title="Applied Chemistry For Engineers Lab-Record"
            description="Complete the laboratory observation table and provide theoretical yields for the provided data..."
            reward="₹1,200"
          />

          <RequestCard 
            tag="Math"
            time="2 DAYS LEFT"
            title="Linear Algebra and Transformation Problem DA 2"
            description="Solve questions 12 through 20 regarding Vector Spaces and Inner Product Systems."
            reward="₹850"
          />
          
          <RequestCard 
            tag="Physics"
            time="3H REMAINING"
            title="Engineering Physics LAB Assignment"
            description="Complete the laboratory observation table and provide theoretical yields for the provided data..."
            reward="₹800"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
