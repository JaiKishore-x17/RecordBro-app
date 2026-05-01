import React from 'react';
import { View, Text, Image } from 'react-native';
import { BookOpen } from 'lucide-react-native';

export function Header() {
  return (
    <View className="flex-row justify-between items-center px-6 py-4 border-b border-outline-variant bg-surface">
      <View className="flex-row items-center gap-3">
        <BookOpen size={24} color="#9D8AF2" />
        <Text className="text-xl font-semibold text-primary-container tracking-wide">RecordBro</Text>
      </View>
      <View className="flex-row items-center gap-4">
        <View className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant">
          <Image 
            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnlow1GLaUeQP7Vtq-jxGMRm81NgYLNGeTr7jB2L5cVaaYrnHKGmWVhNtpPqiDf_MarFs3y87DZMsr6rLGpHIdewM22mPyaErAOt5TrlykR_0cE4Xcnv5sEJzjFwaPMWFOeIhhWk01Vhch20GPtrpa41qsQ7f2IcxBO0AfwHeSy--e3yhLdR3R88VmGkkqpT3DFEhCuz4JbvjM1mmC5tKOg2-4MUd35rb5V_jy0VzcZoGg2RSBHMfyo1nXgaWCRojQrbUBh2UkbNn1' }}
            className="w-full h-full"
          />
        </View>
      </View>
    </View>
  );
}
