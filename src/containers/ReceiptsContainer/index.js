import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getReceipts } from '../../actions/receipts'
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
import { RiEyeCloseLine } from "react-icons/ri"
import ReceiptsList from '../../components/Receipts/ReceiptsList'

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js"

const useStyles = makeStyles(styles)

const mapStateToProps = state => {
  return {
    banks: state.receipts.banks,
    receipts: state.receipts.receipts,
    targetBank: state.receipts.targetBank,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getReceipts: (payload) => dispatch(getReceipts(payload)),
  }
}

function ReceiptsContainer (props) {
  const classes = useStyles()
  const history = useHistory()
  const { banks, receipts, getReceipts, targetBank } = props
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

  const handleGetReceipts = (id) => {
    getReceipts(id)
  }

  const [bankTableData, setBankTableData] = useState([])
  useEffect(() => {
    if (banks[0]) {
      setBankTableData(
        banks.map((el) => {
          return [
            el.name,
            el.num_of_receipts, 
            el.id,
          ]
        })
      )
    }
  }, [banks])

  const handleBankTableData = () => {
    return bankTableData.map((el) => {
      return [
        el[0],
        el[1],
        <IconButton size="small" aria-label="delete" onClick={() => handleGetReceipts(el[2])}>
          {targetBank === el[2] ? <FaRegEye /> : <RiEyeCloseLine />}
        </IconButton>
      ]
    })
  }

  const viewReceiptConflict = (hash) => {
    history.push(`/conflict/${hash}`)
  }

  const [receiptsTableData, setReceiptsTableData] = useState([])
  useEffect(() => {
    if (receipts[0]) {
      setReceiptsTableData(
        receipts.map((el) => {
          return [
            el.id,
            el.tax_id_num,
            el.receipt_num,
            el.hash,
            el.updated_time,
            receipts.filter((item) => {
              return item.id !== el.id && item.hash === el.hash
            }),
          ]
        })
      )
    } else {
      setReceiptsTableData([])
    }
  }, [receipts])

	return (
		<React.Fragment>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} lg={4}>
					<Card>
            <CardHeader color="warning">
              <h2 className={classes.cardTitleWhite}>Bank List</h2>
            </CardHeader>
            <CardBody>
              <ReceiptsDatePicker
                handleSelectedDays={handleSelectedDays}
                selectedDays={selectedDays}
                filterDate={filterDate}
                anchorEl={anchorEl}
                setAnchorEl={setAnchorEl}
                isFilter={isFilter}
              />
              <SelectedDaysText
                selectedDays={selectedDays}
                isFilter={isFilter}
              />
              <Table
                tableHeaderColor="warning"
                tableHead={["Bank", "Number of receipts", "View"]}
                tableData={handleBankTableData()}
              />
            </CardBody>
          </Card>
				</GridItem>
        <GridItem xs={12} sm={12} md={12} lg={8}>
        {
          receiptsTableData[0] &&
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
        }   
        </GridItem>
			</GridContainer>
		</React.Fragment>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(ReceiptsContainer)
