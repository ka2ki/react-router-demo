import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  /** パラメーター値の扱い（useParams()）
   * page2Routes.jsxでパラメーター値を
   * path: "/:id" と設定しているので
   * id としてを受け取ることができる
   */
  const { id } = useParams();

  /** URLSearchParams()
   * QueryParameterを便利に扱えるためのメソッドを
   * 提供してくれてる
   */
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  return (
    <div>
      <h1>UrlParameterページです</h1>
      <p>パラメーターは {id} です</p>
      <p>クエリパラメーターは {query.get("name")} です</p>
    </div>
  );
};
