import { ConfigContext, ExpoConfig } from "expo/config"
import extraJson from "./extraConfig.json"



export default ({ config }: ConfigContext): ExpoConfig => ({
	...config,

	name: "test-repo",
	slug: "test-repo",
	scheme: "test-repo",
	version: "1.0.0",
	icon: "./assets/app-icon.png",
	ios: {
		bundleIdentifier: "com.pvinis.test-repo",
		config: { usesNonExemptEncryption: false },
	},
	android: {
		package: "com.pvinis.test-repo",
	},
	userInterfaceStyle: "automatic",
	plugins: [
		"expo-router",
	],

	extra: {
		eas: { projectId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" },
	},
})
