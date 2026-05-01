import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Clock } from 'lucide-react-native';
import { styles, theme } from '@/constants/Styles';

interface RequestCardProps {
  title: string;
  description: string;
  reward: string;
  tag: string;
  time: string;
}

export function RequestCard({ 
  title, 
  description, 
  reward, 
  tag, 
  time
}: RequestCardProps) {
  return (
    <View style={styles.card}>
      {/* Top row: Tag and Time */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <View style={[styles.pill, { borderColor: '#8B5CF6' }]}>
          <Text style={[styles.labelSm, { color: '#8B5CF6' }]}>{tag.toUpperCase()}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
          <Clock size={12} color="#A1A1AA" />
          <Text style={styles.labelXs}>{time.toUpperCase()}</Text>
        </View>
      </View>
      
      {/* Content */}
      <Text style={[styles.h3, { marginBottom: 6 }]}>{title}</Text>
      <Text style={[styles.body, { marginBottom: 16 }]} numberOfLines={2}>
        {description}
      </Text>
      
      {/* Divider */}
      <View style={{ height: 1, backgroundColor: '#262626', marginBottom: 16 }} />
      
      {/* Reward Section */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View>
          <Text style={[styles.labelXs, { marginBottom: 4 }]}>REWARD</Text>
          <Text style={styles.rewardText}>{reward}</Text>
        </View>
        
        <TouchableOpacity style={{ 
          backgroundColor: '#00E676',
          paddingHorizontal: 24,
          paddingVertical: 10,
          borderRadius: 8,
          elevation: 4,
          shadowColor: '#00E676',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 4,
        }}>
          <Text style={{ color: '#000000', fontWeight: '900', fontSize: 13 }}>ACCEPT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
