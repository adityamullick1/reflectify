import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Layout, {siteTitle} from "../components/layout";
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData} from "../lib/posts";

export async function getServerSideProps() {
    const allPostsData = getSortedPostsData()
    const hi = "penis"
    return {
        props : {
            allPostsData, hi
        }
    }
}

export default function Home({ allPostsData, hi }) {
  return (
      <Layout home>
          {/* Keep the existing code here */}
          {/* Add this <section> tag below the existing <section> tag */}
          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
              <h2 className={utilStyles.headingLg}>Blog</h2>
              <ul className={utilStyles.list}>
                  {allPostsData.map(({ id, date, title }) => (
                      <li className={utilStyles.listItem} key={id}>
                          {title}
                          <br />
                          {id}
                          <br />
                          {date}
                      </li>
                  ))}
              </ul>
              <p>{hi}</p>
          </section>
      </Layout>
  );

}
