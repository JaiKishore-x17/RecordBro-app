import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Clock, School } from 'lucide-react-native';

interface RequestCardProps {
  title: string;
  description: string;
  price: string;
  tag: string;
  time: string;
  subject: string;
  isFeatured?: boolean;
}

export function RequestCard({ 
  title, 
  description, 
  price, 
  tag, 
  time, 
  subject, 
  isFeatured 
}: RequestCardProps) {
  return (
    <View className={`bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-4 ${isFeatured ? 'border-primary-container/30' : ''}`}>
      <View className="flex-row justify-between items-start mb-3">
        <View className="bg-surface-container-high px-3 py-1 rounded-full">
          <Text className="text-label-sm text-on-surface-variant font-bold">{tag}</Text>
        </View>
        <Text className="text-h3 text-primary">{price}</Text>
      </View>
      
      <Text className={isFeatured ? "text-h2 mb-2" : "text-h3 mb-2"}>{title}</Text>
      <Text className="text-body-md text-on-secondary-container mb-4" numberOfLines={isFeatured ? 3 : 2}>
        {description}
      </Text>
      
      <View className="flex-row items-center justify-between mt-auto">
        <View className="flex-row items-center gap-4">
          <View className="flex-row items-center gap-1">
            <Clock size={16} color="#c9c4d4" />
            <Text className="text-label-sm text-on-surface-variant">{time}</Text>
          </View>
          <View className="flex-row items-center gap-1">
            <School size={16} color="#c9c4d4" />
            <Text className="text-label-sm text-on-surface-variant">{subject}</Text>
          </View>
        </View>
        
        <TouchableOpacity className="bg-primary-container px-4 py-2 rounded-lg active:opacity-80">
          <Text className="text-on-primary-container font-bold text-label-md">Accept</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
