import React from 'react';
import DiaryItem from './DiaryItem';

const DiaryList = ({ diaryList }) => {
  return (
    <div className="DiaryList_container">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map(it => (
          <DiaryItem key={`diaryitem_${it.id}`} id={it.id} {...it}></DiaryItem>
        ))}
      </div>
    </div>
  );
};
DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
