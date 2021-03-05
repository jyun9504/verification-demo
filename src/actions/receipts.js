import { 
  SET_RECEIPTS,
  SET_CONFLICTS,
  SET_TARGETBANK,
} from '../constants/actionTypes'


export const getReceipts = (payload) => (dispatch) => {
  return new Promise((resolve, reject) => {
    let res = [
      {id: 1, tax_id_num: '77815838', receipt_num: '12345678', hash: '0x77815838', updated_time: '2021-03-01 12:00:00', uploaded_by: 'a20210304', bank: 'AA銀行'},
      {id: 3, tax_id_num: '77815838', receipt_num: '12345678', hash: '0x77815838', updated_time: '2021-03-02 12:00:00', uploaded_by: 'a20210304', bank: 'AA銀行'},
      {id: 4, tax_id_num: '77815838', receipt_num: '12345678', hash: '0x77815838', updated_time: '2021-03-03 12:00:00', uploaded_by: 'a20210304', bank: 'AA銀行'},
      {id: 5, tax_id_num: '77815838', receipt_num: '12345678', hash: '0x77815838', updated_time: '2021-03-04 12:00:00', uploaded_by: 'a20210304', bank: 'AA銀行'},
      {id: 6, tax_id_num: '63413125', receipt_num: '63413125', hash: '0x70918635', updated_time: '2021-03-05 14:00:00', uploaded_by: 'a20210304', bank: 'AA銀行'},
      {id: 2, tax_id_num: '52153255', receipt_num: '87651234', hash: '0x51235126', updated_time: '2021-03-01 13:00:00', uploaded_by: 'b20210304', bank: 'BB銀行'},  
    ]
    dispatch({ type: SET_TARGETBANK, payload: 0 })
    if (payload === 1) {
      res =  [
        {id: 1, tax_id_num: '77815838', receipt_num: '12345678', hash: '0x77815838', updated_time: '2021-03-01 12:00:00', uploaded_by: 'a20210304', bank: 'AA銀行'},
        {id: 3, tax_id_num: '77815838', receipt_num: '12345678', hash: '0x77815838', updated_time: '2021-03-02 12:00:00', uploaded_by: 'a20210304', bank: 'AA銀行'},
        {id: 4, tax_id_num: '77815838', receipt_num: '12345678', hash: '0x77815838', updated_time: '2021-03-03 12:00:00', uploaded_by: 'a20210304', bank: 'AA銀行'},
        {id: 5, tax_id_num: '77815838', receipt_num: '12345678', hash: '0x77815838', updated_time: '2021-03-04 12:00:00', uploaded_by: 'a20210304', bank: 'AA銀行'},
        {id: 6, tax_id_num: '63413125', receipt_num: '63413125', hash: '0x70918635', updated_time: '2021-03-05 14:00:00', uploaded_by: 'a20210304', bank: 'AA銀行'},
      ]
      dispatch({ type: SET_TARGETBANK, payload: 1 })
    } else if (payload === 2) {
      res =  [
        {id: 6, tax_id_num: '63413125', receipt_num: '63413125', hash: '0x70918635', updated_time: '2021-03-01 13:00:00', uploaded_by: 'b20210304', bank: 'BB銀行'},
      ]
      dispatch({ type: SET_TARGETBANK, payload: 2 })
    }
    dispatch({ type: SET_RECEIPTS, payload: res.sort((a, b) => a.id > b.id ? -1 : 1)})
  })
}

export const verifiReceipt = (payload) => (dispatch) => {
  return new Promise((resolve, reject) => {
    let res = []
    if (payload.taxIDNum === '77815838' && payload.receiptNum === '12345678') {
      res = [
        {id: 1, tax_id_num: '77815838', receipt_num: '12345678', hash: '0x77815838', updated_time: '2021-03-01 12:00:00', uploaded_by: 'a20210304', bank: 'AA銀行'},
        {id: 2, tax_id_num: '77815838', receipt_num: '12345678', hash: '0x77815838', updated_time: '2021-03-02 12:00:00', uploaded_by: 'a20210304', bank: 'AA銀行'},
        {id: 3, tax_id_num: '77815838', receipt_num: '12345678', hash: '0x77815838', updated_time: '2021-03-03 12:00:00', uploaded_by: 'a20210304', bank: 'AA銀行'},
        {id: 4, tax_id_num: '77815838', receipt_num: '12345678', hash: '0x77815838', updated_time: '2021-03-04 12:00:00', uploaded_by: 'a20210304', bank: 'AA銀行'},
      ]
      resolve()
    } else {
      reject()
    }
    dispatch({ type: SET_CONFLICTS, payload: res.sort((a, b) => a > b ? 1 : -1)})
  })
}

