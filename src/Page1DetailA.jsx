import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  /** useLocation()
   * ルーティングの際に設定したstateの情報を受け取る
   */
  const { state } = useLocation();
  console.log(state);

  // Linkを使わず、js側でページ遷移させる（goBack()）
  const history = useHistory();
  const onClickBack = () => history.goBack();

  return (
    <div>
      <h1>Page1DetailAページです</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
