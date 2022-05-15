import Link from "next/link";

/**
 * ﾌﾞﾛｸﾞ行ｺﾝﾎﾟｰﾈﾝﾄ
 * @description ﾌﾞﾛｸﾞ情報のJSONから行ﾃﾞｰﾀを1行表示
 */
export default function Post({ post }) {
  return (
    <div>
      <span>{post.id}</span>
      {" : "}
      <Link href={`/posts/${post.id}`}>
        <span className="cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200">
          {post.title}
        </span>
      </Link>
    </div>
  );
}