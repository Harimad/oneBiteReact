import React, { useState, useRef, useEffect } from 'react';
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

  const onRemove = targetId => {
    console.log(`${targetId}가 삭제 되었습니다.`);
    const filteredData = data.filter(it => it.id !== targetId);
    setData(filteredData);
  };

  const onEdit = (targetId, newContent) => {
    setData(
      data.map(item =>
        item.id === targetId ? { ...item, content: newContent } : item
      )
    );
  };
  const getData = async () => {
    let res = await fetch('https://jsonplaceholder.typicode.com/comments').then(
      res => res.json()
    );

    const initData = res.slice(0, 20).map(item => {
      return {
        author: item.email,
        content: item.body,
        emotion: Math.floor(Math.random(0, 10) * 10),
        created_date: new Date().getTime(),
        id: dataId.current++,
      };
    });
    setData(initData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <DiaryEditor
        onCreate={onCreate}
        className="DiaryEditor_container"
      ></DiaryEditor>
      <DiaryList
        diaryList={data}
        onRemove={onRemove}
        onEdit={onEdit}
      ></DiaryList>
    </div>
  );
}

export default App;
