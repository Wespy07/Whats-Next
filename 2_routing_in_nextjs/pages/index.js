import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a id='main' href="#">Next.js!</a>
        </h1>
        <br/>
        <br/>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h2 className='main'>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="# //nextjs.org/learn" className={styles.card}>
            <h2 className='text-red-500'>Learn &rarr;</h2>
            <p className='bg-pink-800'>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="#"
            className={`bg-green-800 ${styles.card}`}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="#"
            className={`bg-blue-800 ${styles.card}`}
          >
            <h2>Deploy &rarr;</h2>
            <p className='bg-amber-700'>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

    </div>
  )
}
