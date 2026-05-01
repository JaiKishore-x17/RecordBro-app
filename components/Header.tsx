import React from 'react';
import { View, Text, TouchableOpacity, Platform, StatusBar } from 'react-native';
import { LayoutDashboard, User } from 'lucide-react-native';
import { theme } from '@/constants/Styles';

export function Header() {
  return (
    <View style={{ 
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      paddingHorizontal: 20, 
      paddingTop: Platform.OS === 'android' ? 5 : 12,
      paddingBottom: 16,
      backgroundColor: theme.colors.background 
    }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
        <View style={{ backgroundColor: '#1A1A1A', padding: 6, borderRadius: 8 }}>
          <LayoutDashboard size={20} color="#8B5CF6" />
        </View>
        <Text style={{ 
          fontSize: 20, 
          fontWeight: '900', 
          color: '#8B5CF6', 
          letterSpacing: 2,
          textTransform: 'uppercase'
        }}>
          RecordBro
        </Text>
      </View>
      
      <TouchableOpacity activeOpacity={0.8}>
        <View style={{ 
          width: 40, 
          height: 40, 
          borderRadius: 20, 
          borderWidth: 1, 
          borderColor: '#8B5CF6',
          backgroundColor: '#1A1A1A',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden'
        }}>
          <User size={24} color="#8B5CF6" />
        </View>
      </TouchableOpacity>
    </View>
  );
}
