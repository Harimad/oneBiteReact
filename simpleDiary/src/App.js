import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

function App() {
  const dummyDiaryList = [
    {
      id: 1,
      author: 'Harimad',
      content: '리액트 너무 재밌다.',
      created_date: new Date().getTime(),
      emotion: 5,
    },
    {
      id: 2,
      author: 'SeSAC',
      content: '힘내자 아자',
      created_date: new Date().getTime(),
      emotion: 4,
    },
    {
      id: 3,
      author: '누구누구',
      content: '어떤 내용 내용',
      created_date: new Date().getTime(),
      emotion: 3,
    },
  ];
  return (
    <div className="App">
      <DiaryEditor className="DiaryEditor_container"></DiaryEditor>
      <DiaryList diaryList={dummyDiaryList}></DiaryList>
    </div>
  );
}

export default App;
