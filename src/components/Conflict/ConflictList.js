import PropTypes from 'prop-types'
import MUIDataTable from "mui-datatables"
import { MuiThemeProvider, makeStyles } from '@material-ui/core/styles'
import getMuiTheme from '../../utils/MUIDataTableTheme'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    marginBottom: 20,
  },
}))

const ConflictList = (props) => {
  const classes = useStyles()
  const { tableData, title } = props

  const columns = ["ID", "銀行", "顧客統編", "發票號碼", "Hash", "上傳時間", "上傳者"]

  const options = {
    elevation: 0,
    filterType: 'checkbox',
    selectableRows: 'none',
    filter: false,
    print: false,
    download: false,
    rowsPerPageOptions: [5, 10, 100],
    rowsPerPage: 10,
    pagination: false,
  }

  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={getMuiTheme}>
        <MUIDataTable
          title={title}
          data={tableData}
          columns={columns}
          options={options}
        />
      </MuiThemeProvider>
    </div>
  )
}

ConflictList.propTypes = {
  tableData: PropTypes.array.isRequired,
}

export default ConflictList