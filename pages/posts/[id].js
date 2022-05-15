import Link from "next/link";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

/**
 * Blog詳細ｺﾝﾎﾟｰﾈﾝﾄ
 * @param posts ﾌﾞﾛｸﾞAPI結果ｾｯﾄ（JSON）
 * @description ﾌﾞﾛｸﾞ詳細を取得して詳細情報表示
 */
export default function Post({ post }) {
  // Pre-fetch中はﾛｰﾃﾞｨﾝｸﾞ表示
  if (!post) {
    return <div>Loading...</div>;
  }
  // Pre-fetch後に詳細情報表示
  return (
    <Layout title={post.title}>
      <p className="m-4">
        {"ID : "}
        {post.id}
      </p>
      <p className="mb-8 text-xl font-bold">{post.title}</p>
      <p className="px-10">{post.body}</p>
      <Link href="/blog-page">
        <div className="flex cursor-pointer mt-12">
          <svg
            className="w-6 h-6 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span>Back to blog-page</span>
        </div>
      </Link>
    </Layout>
  );
}

/**
 * Pathsｻｰﾊﾞｰｻｲﾄﾞ関数
 * @returns paths｜ID一覧
 * @returns fallback｜false:Paths以外遷移不可, true:Paths超過遷移許可
 * @description ﾋﾞﾙﾄﾞ時ｻｰﾊﾞｰｻｲﾄﾞ実行
 */
export async function getStaticPaths() {
  // ID一覧を取得
  const paths = await getAllPostIds();
  // ID一覧をpathsで返却
  return {
    paths,
    fallback: false,
  };
}

/**
 * Propsｻｰﾊﾞｰｻｲﾄﾞ関数
 * @returns props｜posts｜JSONﾃﾞｰﾀ
 * @description ﾋﾞﾙﾄﾞ時ｻｰﾊﾞｰｻｲﾄﾞ実行
 */
export async function getStaticProps({ params }) {
  //const { post: post } = await getPostData(params.id);
  const post = await getPostData(params.id);
  return {
    props: {
      post,
    },
  };
}