import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import '../style/ConfirmModal.scss'

function ConfirmModal(props) {
  const { show, setShow, modalContent } = props
  const handleClose = () => setShow(false)

  // 確認移除函式
  const handleRemove = () => {
    const currentListItem = JSON.parse(localStorage.getItem('todo'))
    const newListItem = [...currentListItem].filter((item, i) => {
      return item.item !== modalContent.content
    })
    // console.log('newListItem', newListItem)
    // 將新待辦事項存入 localstorage 中
    localStorage.setItem('todo', JSON.stringify(newListItem))
    setShow(false)
  }

  // 確認完成函式
  const handleFinish = () => {
    // 取得目前 localstorage 中的 finished list
    let finishedListItem = JSON.parse(localStorage.getItem('finished')) || []
    const finishedTime = new Date().getTime()
    finishedListItem.push({
      item: modalContent.content,
      time: finishedTime,
    })
    // 將完成事項存入 localstorage 中
    localStorage.setItem('finished', JSON.stringify(finishedListItem))
    handleRemove()
  }
  return (
    <>
      <Modal
        show={props.show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>提示</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          是否{modalContent.type === 'remove' ? '移除' : '完成'}'
          {modalContent.content}'?
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn submit-btn"
            onClick={handleClose}
          >
            取消
          </button>
          <button
            type="button"
            className="btn submit-btn"
            onClick={
              modalContent.type === 'remove' ? handleRemove : handleFinish
            }
          >
            確認
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ConfirmModal
