import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<meta name='theme-color' content='#324A5F' />
					<meta httpEquiv='Accept-CH' content='DPR, Viewport-Width, Width' />

					<link
						rel='shortcut icon'
						href='https://res.cloudinary.com/cdn-cmlp/image/upload/v1627063829/carlos-pimenta/profile/logo-small.png'
					/>

					<title>Carlos Pimenta</title>

					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link
						rel='preconnect'
						href='https://fonts.gstatic.com'
						crossOrigin='true'
					/>

					<link
						href='https://fonts.googleapis.com/css2?family=Lato:wght@100&display=swap'
						rel='stylesheet'
					/>
					<link
						href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap'
						rel='stylesheet'
					/>
					<link
						href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap'
						rel='stylesheet'
					/>

					<link
						href='https://kit.fontawesome.com/0f207d9f23.js'
						crossOrigin='anonymous'
					/>
				</Head>
				<body style={{ margin: 0 }}>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
