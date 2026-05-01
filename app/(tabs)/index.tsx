import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Header } from '@/components/Header';
import { RequestCard } from '@/components/RequestCard';
import { ChevronDown } from 'lucide-react-native';

const CATEGORIES = ['All Subjects', 'Chemistry', 'Mathematics', 'Computer Science', 'Literature'];

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <Header />
      <ScrollView className="flex-1 px-6 pt-6">
        {/* Greeting Section */}
        <View className="mb-12">
          <Text className="text-h1 text-on-background">Hello, Julian</Text>
          <Text className="text-body-lg text-on-secondary-container mt-2">
            Ready for some focused work? There are 14 new requests in your field.
          </Text>
        </View>

        {/* Category Filters */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-8 flex-row">
          {CATEGORIES.map((cat, i) => (
            <TouchableOpacity 
              key={cat} 
              className={`${i === 0 ? 'bg-primary-container' : 'bg-surface-container-low border border-outline-variant'} px-4 py-2 rounded-lg mr-3`}
            >
              <Text className={`${i === 0 ? 'text-on-primary-container' : 'text-on-secondary-container'} text-label-sm`}>
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Available Requests */}
        <RequestCard 
          isFeatured
          tag="Priority"
          price="$45.00"
          title="Organic Chemistry: Synthesis of Esters"
          description="Complete a detailed lab report focusing on the mechanism of Fischer esterification including all balanced equations and safety protocols."
          time="2h remaining"
          subject="Chemistry"
        />

        <View className="flex-row flex-wrap justify-between">
          <View className="w-full">
            <RequestCard 
              tag="Standard"
              price="$22.50"
              title="Calculus II: Taylor Series"
              description="Verification of convergence for power series and error estimation."
              time="5h remaining"
              subject="Mathematics"
            />
          </View>
          <View className="w-full">
            <RequestCard 
              tag="Standard"
              price="$18.00"
              title="Intro to Python: Arrays"
              description="Implementation of basic sorting algorithms using NumPy."
              time="1d remaining"
              subject="CS"
            />
          </View>
        </View>

        {/* View More */}
        <TouchableOpacity className="flex-row items-center justify-center gap-2 mt-8 mb-20">
          <Text className="text-label-md text-on-secondary-container">View more requests</Text>
          <ChevronDown size={16} color="#bcbac4" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
