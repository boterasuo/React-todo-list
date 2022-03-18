import moment from 'moment'

export const formatTime = (time) => {
  const formatTime = moment(time).format('YYYY-MM-DD')
  //   console.log('formatTime', formatTime)

  const now = new moment()
  const timeDiff = Math.floor(now.diff(moment(time)) / 1000)
  //   console.log('timeDiff', timeDiff)

  if (timeDiff < 60) {
    return Math.floor(now.diff(moment(time), 'seconds')) + '秒前'
  } else if (timeDiff < 60 * 60) {
    return Math.floor(now.diff(moment(time), 'minutes')) + '分鐘前'
  } else if (timeDiff < 60 * 60 * 24) {
    return Math.floor(now.diff(moment(time), 'hours')) + '小時前'
  } else {
    return formatTime
  }
}
