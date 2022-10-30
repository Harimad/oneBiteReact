import React from 'react';

const DiaryItem = ({
  onDelete,
  id,
  author,
  content,
  emotion,
  created_date,
}) => {
  const handleClickDelete = () => {
    if (window.confirm(`${id}번 째 일기를 삭제하시겠습니까?`)) {
      onDelete(id);
    }
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
      <div className="content">{content}</div>
      <button onClick={handleClickDelete}>삭제하기</button>
    </div>
  );
};

export default DiaryItem;
