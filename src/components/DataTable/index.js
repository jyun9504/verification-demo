import React from 'react'
import PropTypes from 'prop-types'
import MUIDataTable from 'mui-datatables'
import { MuiThemeProvider } from '@material-ui/core/styles'
import getMuiTheme from '../../utils/MUIDataTableTheme'

const DataTable = (props) => {
  const {
    title,
    tableData,
    columns,
  } = props

  const options = {
    elevation: 0,
    filterType: 'checkbox',
    selectableRows: 'none',
    filter: false,
    print: false,
    download: false,
    rowsPerPage: 5,
  }

  return (
    <React.Fragment>
      <MuiThemeProvider theme={getMuiTheme()}>
        <MUIDataTable
          title={title}
          data={tableData}
          columns={columns}
          options={options}
        />
      </MuiThemeProvider>
    </React.Fragment>
  )
}

DataTable.propTypes = {
  title: PropTypes.string,
  tableData: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
}

export default DataTable
