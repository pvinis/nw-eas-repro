import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"
import { hairlineWidth } from "nativewind/theme"

const config: Config = {
	content: ["./src/**/*.{ts,tsx}"],
	presets: [require("nativewind/preset")],
	theme: {
		extend: {
			colors: {
				background: "var(--color-background)",
				surface: "var(--color-surface)",
				opening: "var(--color-opening)",
				primary: "var(--color-primary)",
				secondary: "var(--color-secondary)",
				ring: "var(--color-ring)",
				separator: "var(--color-separator)",
				"on-background": "var(--color-on-background)",
				"on-background-low": "var(--color-on-background-low)",
				"on-surface": "var(--color-on-surface)",
				"on-primary": "var(--color-on-primary)",
				"on-secondary": "var(--color-on-secondary)",
				"surface-not-started": "var(--color-surface-not-started)",
				"surface-in-progress": "var(--color-surface-in-progress)",
				"surface-done": "var(--color-surface-done)",
				accent: "var(--color-accent)",
				destructive: "var(--color-destructive)",
				"on-destructive": "var(--color-on-destructive)",
				"on-accent": "var(--color-on-accent)",
				t: "red",
			},
			fontFamily: {
				"mono-base": "Iosevka",
			},
			borderWidth: {
				hairline: hairlineWidth(),
			},
		},
	},
	plugins: [
		require("nativewind/dist/tailwind/safe-area").safeArea,
		plugin(({ addUtilities }) =>
			addUtilities({
				// usually paired with `absolute`
				".full": {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
				},
			}),
		),
	],
}
export default config
