const { getSentryExpoConfig } = require("@sentry/react-native/metro")
const { withNativeWind } = require("nativewind/metro")

module.exports = (() => {
	let config = getSentryExpoConfig(__dirname)

	config = withNativeWind(config, { input: "./src/global.css", inlineRem: 16 })

	return config
})()
