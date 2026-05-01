import React from 'react';
import { Tabs } from 'expo-router';
import { View, TouchableOpacity, Platform } from 'react-native';
import { Home, ClipboardList, Plus, Wallet, User } from 'lucide-react-native';
import { Colors } from '@/constants/Colors';

export default function TabLayout() {
  const colors = Colors.dark;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#121215',
          borderTopColor: '#2A2A30',
          height: Platform.OS === 'ios' ? 88 : 68,
          paddingBottom: Platform.OS === 'ios' ? 28 : 12,
          paddingTop: 12,
        },
        tabBarActiveTintColor: colors.primaryContainer,
        tabBarInactiveTintColor: colors.inactive,
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontFamily: 'Inter',
          fontSize: 11,
          fontWeight: '500',
          marginTop: 4,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <View className={focused ? "bg-[#1C1C21] p-2 rounded-lg" : ""}>
              <Home size={22} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="work"
        options={{
          title: 'Work',
          tabBarIcon: ({ color, focused }) => (
            <View className={focused ? "bg-[#1C1C21] p-2 rounded-lg" : ""}>
              <ClipboardList size={22} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <View 
              style={{
                top: -20,
                width: 56,
                height: 56,
                borderRadius: 28,
                backgroundColor: colors.primaryContainer,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 4,
                borderColor: '#121215',
                elevation: 5,
                shadowColor: colors.primaryContainer,
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.3,
                shadowRadius: 15,
              }}
            >
              <Plus size={32} color="#121215" strokeWidth={2.5} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          title: 'Wallet',
          tabBarIcon: ({ color, focused }) => (
            <View className={focused ? "bg-[#1C1C21] p-2 rounded-lg" : ""}>
              <Wallet size={22} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <View className={focused ? "bg-[#1C1C21] p-2 rounded-lg" : ""}>
              <User size={22} color={color} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
