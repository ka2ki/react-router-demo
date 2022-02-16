import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  // ex)ルーティング時にstateの情報を渡す
  const arr = [...Array(100).keys()];

  // Linkを使わず、js側でページ遷移させる（push）
  const history = useHistory();
  const onClickDetailA = () => history.push("/page1/detailA");

  return (
    <div>
      <h1>Page1ページです</h1>
      {/* ルーティングのときに state 情報も渡すと
       * 情報を持ったままルーティングさせることができる
       */}
      <Link to={{ pathname: "/page1/detailA", state: arr }}>DetailA</Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailAにjsで遷移する</button>
    </div>
  );
};
