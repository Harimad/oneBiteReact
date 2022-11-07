import React, {
  useRef,
  useEffect,
  useMemo,
  useCallback,
  useReducer,
} from 'react'
import './App.css'
import DiaryEditor from './DiaryEditor'
import DiaryList from './DiaryList'

const reducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    // 초기화
    case 'INIT': {
      return action.data
    }
    // 추가
    case 'CREATE': {
      const created_data = new Date().getTime()
      const newItem = {
        ...action.data,
        created_data,
      }
      return [newItem, ...state]
    }
    // 삭제
    case 'REMOVE': {
      return state.filter(it => it.id !== action.targetId)
    }
    // 수정
    case 'EDIT': {
      return state.map(it =>
        it.id === action.targetId
          ? {
              ...it,
              content: action.newContent,
            }
          : it
      )
    }
  }
}

function App() {
  const [data, dispatch] = useReducer(reducer, [])

  const dataId = useRef(0)

  const onCreate = useCallback((author, content, emotion) => {
    dispatch({
      type: 'CREATE',
      data: { author, content, emotion, id: dataId.current },
    })
    dataId.current += 1
  }, [])

  const onRemove = useCallback(targetId => {
    dispatch({ type: 'REMOVE', targetId })
  }, [])

  const onEdit = useCallback((targetId, newContent) => {
    dispatch({
      type: 'EDIT',
      targetId,
      newContent,
    })
  }, [])
  const getData = async () => {
    let res = await fetch('https://jsonplaceholder.typicode.com/comments').then(
      res => res.json()
    )

    const initData = res.slice(0, 20).map(item => {
      return {
        author: item.email,
        content: item.body,
        emotion: Math.floor(Math.random(0, 10) * 10),
        created_date: new Date().getTime(),
        id: dataId.current++,
      }
    })
    dispatch({ type: 'INIT', data: initData })
  }

  useEffect(() => {
    getData()
  }, [])

  const getDiaryAnalysis = () => {
    console.log('now diary analysis ...')

    const goodCount = data.filter(it => it.emotion >= 3).length
    const badCount = data.length - goodCount
    const goodRatio = (goodCount / data.length) * 100.0
    return { goodCount, badCount, goodRatio }
  }

  const memoizedDiaryAnalysis = useMemo(getDiaryAnalysis, [data.length])
  const { goodCount, badCount, goodRatio } = memoizedDiaryAnalysis

  return (
    <div className="App">
      <DiaryEditor
        onCreate={onCreate}
        className="DiaryEditor_container"
      ></DiaryEditor>

      <div>전체 일기 : {data.length}</div>
      <div>기분 좋은 일기 개수 : {goodCount}</div>
      <div>기분 나쁜 일기 개수 : {badCount}</div>
      <div>기분 좋은 일기 비율 : {goodRatio}%</div>

      <DiaryList
        diaryList={data}
        onRemove={onRemove}
        onEdit={onEdit}
      ></DiaryList>
    </div>
  )
}

export default App
