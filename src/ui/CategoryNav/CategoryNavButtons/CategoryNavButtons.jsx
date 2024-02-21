import { DELETE_ICON, RENAME_ICON, SHARED_ICON } from "./constans";

export function CategoryNavButtons() {
  return (
    <>
      <button className="category-nav-button">
        <img src={SHARED_ICON} alt="공유하기를 나타내는 아이콘" />
        <p>공유</p>
      </button>
      <button className="category-nav-button">
        <img src={RENAME_ICON} alt="이름 변경하기를 나타내는 아이콘" />
        <p>이름 변경</p>
      </button>
      <button className="category-nav-button">
        <img src={DELETE_ICON} alt="삭제하기를 나타내는 아이콘" />
        <p>삭제</p>
      </button>
    </>
  );
}
