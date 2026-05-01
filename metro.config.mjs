import { getDefaultConfig } from "expo/metro-config";
import { withNativeWind } from "nativewind/metro-config";

const config = getDefaultConfig(import.meta.dirname || process.cwd());

export default withNativeWind(config, { input: "./global.css" });
