import React, { useState, useRef } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onDelete = targetId => {
    console.log(`${targetId}가 삭제 되었습니다.`);
    const filteredData = data.filter(it => it.id !== targetId);
    setData(filteredData);
  };

  return (
    <div className="App">
      <DiaryEditor
        onCreate={onCreate}
        className="DiaryEditor_container"
      ></DiaryEditor>
      <DiaryList onDelete={onDelete} diaryList={data}></DiaryList>
    </div>
  );
}

export default App;
