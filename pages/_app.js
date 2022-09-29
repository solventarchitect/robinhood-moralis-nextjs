import '../styles/globals.css'
import {MoralisProvider} from 'react-moralis'
import {RobinhoodProvider} from '../context/RobinhoodContext'

function MyApp({Component, pageProps}) {
	const url = process.env.NEXT_PUBLIC_REACT_APP_MORALIS_URL
	const appId = process.env.NEXT_PUBLIC_REACT_APP_ID
	return (
		<MoralisProvider serverUrl={url} appId={appId}>
			<RobinhoodProvider>
				<Component {...pageProps} />
			</RobinhoodProvider>
		</MoralisProvider>
	)
}

export default MyApp
