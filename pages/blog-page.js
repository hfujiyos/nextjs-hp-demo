import Layout from "../components/Layout";      //Lv4-Layoutｺﾝﾎﾟｰﾈﾝﾄ
import Post from "../components/Post";          //ﾌﾞﾛｸﾞ行ｺﾝﾎﾟｰﾈﾝﾄ
import { getAllPostsData } from "../lib/posts"; //ﾌﾞﾛｸﾞAPI取得ﾗｲﾌﾞﾗﾘ

/**
 * Blog一覧ｺﾝﾎﾟｰﾈﾝﾄ
 * @param posts ﾌﾞﾛｸﾞAPI結果ｾｯﾄ（JSON）
 * @description ﾌﾞﾛｸﾞ情報を取得してPostｺﾝﾎﾟｰﾈﾝﾄで全件表示
 */
export default function Blog({ posts }) {
  return (
    <Layout title="Blog">
      <ul className="m-10">
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </ul>
    </Layout>
  );
}

/**
 * Propsｻｰﾊﾞｰｻｲﾄﾞ関数
 * @returns props｜posts｜JSONﾃﾞｰﾀ
 * @description ﾋﾞﾙﾄﾞ時ｻｰﾊﾞｰｻｲﾄﾞでgetAllPostsDataを実行してSSG
 */
export async function getStaticProps() {
  const posts = await getAllPostsData();
  return {
    props: { posts },
  };
}