import Head from "next/head"
import { useSettings } from "@/context/settings"

const Meta = () => {
	const { settings } = useSettings()

	if (!settings) return null

	const title = settings.title ?? "Home"
	const description = `Start page of ${settings.username ?? "user"}`

	const blankIcon =
		"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="

	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href={blankIcon} />
			<meta name="robots" content="noindex, nofollow" />
		</Head>
	)
}

export default Meta
