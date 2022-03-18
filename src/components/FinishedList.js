import React, { useEffect, useState } from 'react'
import { formatTime } from '../filter/formatTime'
import '../style/FinishedList.scss'

function FinishedList(props) {
  const [finishedItem, setFinishedItem] = useState([])
  // 取得 localstorage 的內容
  useEffect(() => {
    const finishedList = JSON.parse(localStorage.getItem('finished')) || []
    // 處裡時間格式 --> 使用 formatTime 函式
    finishedList.map((item) => {
      const formtTime = formatTime(item.time)
      return (item.time = formtTime)
    })
    setFinishedItem(finishedList)
  }, [])

  return (
    <div className="finished-list">
      {finishedItem.map((item, i) => {
        return (
          <>
            <div className="d-flex todo-item">
              <div>{item.item}</div>
              <div>{item.time}</div>
            </div>
          </>
        )
      })}
    </div>
  )
}

export default FinishedList
