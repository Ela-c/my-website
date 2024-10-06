import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import CounterComponent from "../components/counter-component";

export default function Home() {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to <a href="https://nextjs.org">Dev@Deakin</a>
				</h1>

				<p className={styles.description}>
					A forum to ask and answer{" "}
					<code className={styles.code}>
						`software engineering questions`
					</code>
				</p>

				<div className={styles.grid}>
					<Link href="/about" className={styles.card}>
						<h2>About Page &rarr;</h2>
						<p>Cypress will test if this link is working.</p>
					</Link>

					<div className={styles.card}>
						<h2>Counter</h2>
						<p>
							<CounterComponent />
						</p>
					</div>
				</div>
			</main>
		</div>
	);
}
