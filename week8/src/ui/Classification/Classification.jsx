import { Button } from "./ButtonStyle";
import "./Classification.css";

export function Classification() {
  return (
    <div className="classification">
      <div className="classification-Buttons">
        <Button>전체</Button>
        <Button>⭐즐겨찾기</Button>
        <Button>코딩 팁</Button>
        <Button>채용 사이트</Button>
        <Button>유용한 글</Button>
        <Button>나만의 장소</Button>
      </div>
      <button className="add-folder-Button">폴더 추가 +</button>
    </div>
  );
}
