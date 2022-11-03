import React, { memo, useState, useRef, useEffect } from 'react';

const DiaryItem = ({
  onEdit,
  onRemove,
  id,
  author,
  content,
  emotion,
  created_date,
}) => {
  useEffect(() => {
    console.log(`${id}번 일기 아이템 Render`);
  });

  const [isEditNow, setIsEditNow] = useState(false);
  const toggleIsEditNow = () => setIsEditNow(!isEditNow);

  const [localContent, setLocalContent] = useState(content);
  const localContentRef = useRef(null);

  const handleClickDelete = () => {
    if (window.confirm(`${id}번 째 일기를 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  };
  const handleClickEdit = () => {
    if (localContent.length < 1) {
      localContentRef.current.focus();
      return;
    }
    if (window.confirm(`${id}번 째 일기를 수정하시겠습니까?`)) {
      onEdit(id, localContent);
      toggleIsEditNow();
    }
  };

  const handleQuitEdit = () => {
    setLocalContent(content);
    toggleIsEditNow();
  };
  return (
    <div className="DiaryItem_container">
      <div className="info">
        <span className="author_info">
          | 작성자 : {author} | 감정점수 : {emotion} |
        </span>
        <br></br>
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">
        {isEditNow ? (
          <textarea
            ref={localContentRef}
            value={localContent}
            onChange={e => setLocalContent(e.target.value)}
          ></textarea>
        ) : (
          content
        )}
      </div>
      {isEditNow ? (
        <div>
          <button onClick={handleQuitEdit}>수정 취소</button>
          <button onClick={handleClickEdit}>저장 하기</button>
        </div>
      ) : (
        <div>
          <button onClick={handleClickDelete}>삭제 하기</button>
          <button onClick={toggleIsEditNow}>수정 하기</button>
        </div>
      )}
    </div>
  );
};

export default memo(DiaryItem); // memo로 감싸기
