import sanityClient from '@sanity/client'

export const client = sanityClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_API_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_STUDIO_API_DATASET || 'production',
	apiVersion: '2022-06-10',
	token: process.env.SANITY_API_TOKEN,
	useCdn: process.env.NODE_ENV !== 'production',
})
