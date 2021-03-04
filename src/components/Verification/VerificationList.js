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

const AccessKeyDeleteBtn = (props) => {
  const { tableMeta, onDelAccessKey } = props

  return (
    <Button color="secondary" variant="outlined" onClick={() => onDelAccessKey(tableMeta.rowData[0])}>
      刪除
    </Button>
  )
}

const VerificationList = (props) => {
  const classes = useStyles()
  const { tableData, onDelAccessKey } = props

  const columns = ["ID", "顧客統編", "發票號碼", "Hash", "上傳時間", {
      name: "是否重複",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <AccessKeyDeleteBtn onDelAccessKey={onDelAccessKey} tableMeta={tableMeta} />
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
    rowsPerPage: 10,
  }

  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={getMuiTheme}>
        <MUIDataTable
          title="Verification List"
          data={tableData}
          columns={columns}
          options={options}
        />
      </MuiThemeProvider>
    </div>
  )
}

VerificationList.propTypes = {
  tableData: PropTypes.array.isRequired,
  onDelAccessKey: PropTypes.func.isRequired,
}

export default VerificationList