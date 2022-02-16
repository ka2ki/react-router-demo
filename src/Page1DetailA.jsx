import { useLocation } from "react-router-dom";

export const Page1DetailA = () => {
  /** useLocation()
   * ルーティングの際に設定したstateの情報を受け取る
   */
  const { state } = useLocation();
  console.log(state);

  return (
    <div>
      <h1>Page1DetailAページです</h1>
    </div>
  );
};
