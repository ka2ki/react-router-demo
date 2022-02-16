import { Link } from "react-router-dom";

export const Page1 = () => {
  // ex)ルーティング時にstateの情報を渡す
  const arr = [...Array(100).keys()];

  return (
    <div>
      <h1>Page1ページです</h1>
      {/* ルーティングのときに state 情報も渡すと
       * 情報を持ったままルーティングさせることができる
       */}
      <Link to={{ pathname: "/page1/detailA", state: arr }}>DetailA</Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
    </div>
  );
};
