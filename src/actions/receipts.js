import { 
  SET_RECEIPTS,
} from '../constants/actionTypes'


export const getReceipts = (payload) => (dispatch) => {
  return new Promise((resolve, reject) => {
    let res = []
    if (payload === 1) {
      res =  [
        {id: 1, tax_id_num: '77815838', receipt_num: '12345678', hash: '0x77815838', updated_time: '2021-03-01 12:00:00', uploaded_by: 'a20210304', bank: 'AA銀行'},
        {id: 2, tax_id_num: '77815838', receipt_num: '12345678', hash: '0x77815838', updated_time: '2021-03-02 12:00:00', uploaded_by: 'a20210304', bank: 'AA銀行'},
        {id: 3, tax_id_num: '77815838', receipt_num: '12345678', hash: '0x77815838', updated_time: '2021-03-03 12:00:00', uploaded_by: 'a20210304', bank: 'AA銀行'},
        {id: 4, tax_id_num: '77815838', receipt_num: '12345678', hash: '0x77815838', updated_time: '2021-03-04 12:00:00', uploaded_by: 'a20210304', bank: 'AA銀行'},
        {id: 5, tax_id_num: '77815839', receipt_num: '12345679', hash: '0x08716236', updated_time: '2021-03-05 14:00:00', uploaded_by: 'a20210304', bank: 'AA銀行'},
      ]
    }
    dispatch({ type: SET_RECEIPTS, payload: res.sort((a, b) => a > b ? 1 : -1)})
  })
}
