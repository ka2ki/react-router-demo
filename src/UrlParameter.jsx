import { useParams } from "react-router-dom";

export const UrlParameter = () => {
  /** パラメーター値の扱い（useParams()）
   * page2Routes.jsxでパラメーター値を
   * path: "/:id" と設定しているので
   * id としてを受け取ることができる
   */
  const { id } = useParams();
  return (
    <div>
      <h1>UrlParameterページです</h1>
      <p>パラメーターは {id} です</p>
    </div>
  );
};
