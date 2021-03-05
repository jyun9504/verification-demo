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

const  BlockchainList = (props) => {
  const classes = useStyles()
  const { tableData } = props

  const columns = ["block#", "Time", "HASH"]

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
          data={tableData}
          columns={columns}
          options={options}
        />
      </MuiThemeProvider>
    </div>
  )
}

BlockchainList.propTypes = {
  tableData: PropTypes.array.isRequired,
}

export default BlockchainList