import Head from "next/head"
import React from "react"
import { useSettings } from "@/context/settings"

const Meta = () => {
	const { settings } = useSettings()
	const title = settings.title || "Home"
	
	// Moving the long string here prevents formatting errors
	const blankIcon =
		"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="

	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={`Start page of ${settings.username}`} />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href={blankIcon} />
			<meta name="robots" content="noindex, nofollow" />
		</Head>
	)
}

export default Meta
