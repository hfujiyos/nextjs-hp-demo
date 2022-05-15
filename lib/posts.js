import fetch from "node-fetch"; //ｻｰﾊﾞｰｻｲﾄﾞpre-fetchﾗｲﾌﾞﾗﾘ

const apiUrl = "https://jsonplaceholder.typicode.com/posts";

/**
 * ﾌﾞﾛｸﾞ全件取得関数
 * @returns posts｜ﾌﾞﾛｸﾞ全件JSONﾃﾞｰﾀ
 * @description async/await非同期取得
 */
export async function getAllPostsData() {
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();
  return posts;
}

/**
 * ﾌﾞﾛｸﾞID一覧取得関数
 * @returns posts.map｜ID一覧JSONﾃﾞｰﾀ
 * @description async/await非同期取得
 */
 export async function getAllPostIds() {
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();

  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
}

/**
 * ﾌﾞﾛｸﾞ詳細取得関数
 * @param id ﾌﾞﾛｸﾞID
 * @returns posts｜ﾌﾞﾛｸﾞ詳細JSONﾃﾞｰﾀ
 * @description async/await非同期取得
 */
 export async function getPostData(id) {
  const res = await fetch(new URL(`${apiUrl}/${id}/`));
  const post = await res.json();
  return post;
}