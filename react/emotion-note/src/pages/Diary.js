import React from 'react'

const Diary = ({ location }) => {
  const query = location.search
  return (
    <div>
      <h1>Diary</h1>
      <h4>query: {query}</h4>
      <p>이곳은 일기 상세 페이지입니다.</p>
    </div>
  )
}

export default Diary

// import React from 'react'

// const Diary = ({ match }) => {
//   const { id } = match.params
//   return (
//     <div>
//       <h1>Diary</h1>
//       <h4>{id}번 일기</h4>
//       <p>이곳은 일기 상세 페이지입니다.</p>
//     </div>
//   )
// }

// export default Diary
