import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles"
import GridItem from "../../components/Grid/GridItem"
import GridContainer from "../../components/Grid/GridContainer"
import Card from "../../components/Card/Card"
import CardHeader from "../../components/Card/CardHeader"
import CardBody from "../../components/Card/CardBody"
import Table from "../../components/Table/Table"
import ReceiptsDatePicker from '../../components/Receipts/ReceiptsDatePicker'
import SelectedDaysText from '../../components/Receipts/SelectedDaysText'
import IconButton from '@material-ui/core/IconButton'
import { FaRegEye } from "react-icons/fa"
import ReceiptsList from '../../components/Receipts/ReceiptsList'

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js"

const useStyles = makeStyles(styles)

export default function ReceiptsContainer () {
  const classes = useStyles()
  const history = useHistory()
  const [selectedDays, setSelectedDays] = useState([])
  const [isFilter, setIsFilter] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)

  const handleSelectedDays = (selectedDaysArr) => {
    setSelectedDays(selectedDaysArr)
    setIsFilter(false)
  }
  const filterDate = () => {
    setIsFilter(true)
    setAnchorEl(false)
  }
  const tableData = [
    ["AA銀行", "5"],
    ["BB銀行", "0"],
    ["CC銀行", "0"],
    ["DD銀行", "0"],
    ["EE銀行", "0"],
  ]
  const handleTableData = () => {
    return tableData.map((el) => {
      return [
        el[0],
        el[1], 
        <IconButton size="small" aria-label="delete">
          <FaRegEye />
        </IconButton>
      ]
    })
  }


  const receiptsTableData = [
    [5,'77815839','123456879', '0x08716236', '2021-03-05 14:00', false],
    [4,'77815838','123456878', '0x77815838', '2021-03-04 12:00', true],
    [3,'77815838','123456878', '0x77815838', '2021-03-03 12:00', true],
    [2,'77815838','123456878', '0x77815838', '2021-03-02 12:00', true],
    [1,'77815838','123456878', '0x77815838', '2021-03-01 12:00', true],
  ]

  const viewReceiptConflict = (hash) => {
    history.push(`/conflict/${hash}`)
  }

	return (
		<React.Fragment>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6} lg={4}>
					<Card>
            <CardHeader color="warning">
              <h2 className={classes.cardTitleWhite}>Bank List</h2>
              <ReceiptsDatePicker
                handleSelectedDays={handleSelectedDays}
                selectedDays={selectedDays}
                filterDate={filterDate}
                anchorEl={anchorEl}
                setAnchorEl={setAnchorEl}
                isFilter={isFilter}
              />
            </CardHeader>
            <CardBody>
              <SelectedDaysText
                selectedDays={selectedDays}
                isFilter={isFilter}
              />
              <Table
                tableHeaderColor="warning"
                tableHead={["Bank", "Number of receipts", "View"]}
                tableData={handleTableData()}
              />
            </CardBody>
          </Card>
				</GridItem>
        <GridItem xs={12} sm={12} md={6} lg={8}>
          <Card>
            <CardHeader color="warning">
              <h2 className={classes.cardTitleWhite}>Receipt List</h2>
            </CardHeader>
            <CardBody>
              <ReceiptsList
                tableData={receiptsTableData}
                viewReceiptConflict={viewReceiptConflict}
              />
            </CardBody>
          </Card>
        </GridItem>
			</GridContainer>
		</React.Fragment>
	)
}
