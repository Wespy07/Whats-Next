import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <h1>Header</h1>
      <Component {...pageProps} />
      <h1>Footer</h1>
    </>
  )
}

export default MyApp
