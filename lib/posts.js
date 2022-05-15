import fetch from "node-fetch"; //ｻｰﾊﾞｰｻｲﾄﾞpre-fetchﾗｲﾌﾞﾗﾘ

const apiUrl = "https://jsonplaceholder.typicode.com/posts";

/**
 * getAllPostsData関数ｺﾝﾎﾟｰﾈﾝﾄ
 * @returns posts｜JSONﾃﾞｰﾀ
 * @description async/await非同期取得
 */
export async function getAllPostsData() {
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();
  return posts;
}

// export async function getAllPostIds() {
//   const res = await fetch(new URL(apiUrl));
//   const posts = await res.json();

//   return posts.map((post) => {
//     return {
//       params: {
//         id: String(post.id),
//       },
//     };
//   });
// }

// export async function getPostData(id) {
//   const res = await fetch(new URL(`${apiUrl}/${id}/`));
//   const post = await res.json();
//   // return {
//   //   post,
//   // };
//   return post;
// }