import PropTypes from 'prop-types'
import MUIDataTable from "mui-datatables"
import { MuiThemeProvider, makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import getMuiTheme from '../../utils/MUIDataTableTheme'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    minHeight: 300,
  },
}))

const ReceiptConflictBtn = (props) => {
  const { tableMeta, viewReceiptConflict } = props

  return (
    <Button size="small" color="secondary" variant="outlined" onClick={() => viewReceiptConflict(tableMeta.rowData[3])}>
      查看衝突
    </Button>
  )
}

const ReceiptsList = (props) => {
  const classes = useStyles()
  const { tableData, viewReceiptConflict } = props

  const columns = ["ID", "顧客統編", "發票號碼", "Hash", "上傳時間", {
      name: "是否重複",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            tableMeta.rowData[5].length !== 0 ?
            <ReceiptConflictBtn viewReceiptConflict={viewReceiptConflict} tableMeta={tableMeta} />
            :
            '無重複'
          )
        }
      }
    },
  ]

  const options = {
    elevation: 0,
    filterType: 'checkbox',
    selectableRows: 'none',
    filter: false,
    print: false,
    download: false,
    rowsPerPageOptions: [5, 10, 100],
    rowsPerPage: 5,
  }

  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={getMuiTheme}>
        <MUIDataTable
          data={tableData}
          columns={columns}
          options={options}
        />
      </MuiThemeProvider>
    </div>
  )
}

ReceiptsList.propTypes = {
  tableData: PropTypes.array.isRequired,
}

export default ReceiptsList