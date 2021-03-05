import React, { useState } from 'react'
import GridItem from "../../components/Grid/GridItem"
import GridContainer from "../../components/Grid/GridContainer"
import InfoContentCard from '../../components/InfoContentCard'
import InfoCard from '../../components/InfoCard'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { AiOutlineNodeIndex } from "react-icons/ai"
import { BiCube, BiHash } from 'react-icons/bi'
import BlockchainList from '../../components/Blockchain/BlockchainList'

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
    float: 'right'
  },
  icon: {
    color: theme.palette.grey.dark,
    fontSize: 18,
    width: 40,
    height: 40,
  },
}))

export default function BlockchainContainer () {
  const classes = useStyles()
  const [node, setNode] = useState('')

  const handleChange = (event) => {
    setNode(event.target.value)
  }

  const tableData = [
    [5, '2021-03-05 14:00:00', '0x08716236'],
    [4, '2021-03-04 12:00:00', '0x77815838'],
    [3, '2021-03-03 12:00:00', '0x77815838'],
    [2, '2021-03-02 12:00:00', '0x77815838'],
    [1, '2021-03-01 12:00:00', '0x77815838'],
  ]

	return (
		<React.Fragment>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6} lg={4}>
          <InfoContentCard
            title="選擇節點"
            icon={<AiOutlineNodeIndex className={classes.icon} />}
          >
            <FormControl className={classes.formControl}>
              <InputLabel id="select-label">節點</InputLabel>
              <Select
                labelId="select-label"
                id="demo-customized-select"
                value={node}
                onChange={handleChange}
                input={<Select />}
              >
                <MenuItem value={1}>AA銀行</MenuItem>
                <MenuItem value={2}>BB銀行</MenuItem>
                <MenuItem value={3}>CC銀行</MenuItem>
                <MenuItem value={4}>DD銀行</MenuItem>
                <MenuItem value={5}>EE銀行</MenuItem>
                <MenuItem value={5}>節點1</MenuItem>
              </Select>
            </FormControl>
          </InfoContentCard>
          <InfoCard
            title="最新高度"
            icon={<BiCube className={classes.icon} />}
            content="5"
          />
          <InfoCard
            title="Hash 重複數量"
            icon={<BiHash className={classes.icon} />}
            content="4"
          />
				</GridItem>
        <GridItem xs={12} sm={12} md={6} lg={8}>
          <BlockchainList
            tableData={tableData}
          />
        </GridItem>
			</GridContainer>
		</React.Fragment>
	)
}
