import React from 'react';

const DiaryItem = ({ id, author, content, emotion, created_date }) => {
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
    </div>
  );
};

export default DiaryItem;
