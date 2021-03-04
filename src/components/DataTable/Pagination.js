import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import FormControl from '@material-ui/core/FormControl'
import NativeSelect from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    color: theme.palette.grey.dark,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 20,
  },
  divider: {
    borderColor: '#E0E0E0',
  },
  perPageSelect: {
    marginRight: 20,
    color: theme.palette.grey.dark,
  },
  iconBtn: {
    width: 40,
    height: 40,
    margin: '0 5px',
  }
}))

const Pagination = (props) => {
  const {
    totalCount,
    nowPage,
    setNowPage,
    perPage,
    setPerPage,
   } = props
  const classes = useStyles()

  const handlePerPage = (e) => {
    setPerPage(e.target.value)
    setNowPage(1)
  }

  const totalPage = () => {
    if (totalCount % perPage === 0) {
      return parseInt(totalCount / perPage)
    } else {
      return parseInt(totalCount / perPage) + 1
    }
  }

  const handlePerv = () => {
    if (nowPage !== 1) {
      setNowPage(nowPage - 1)
    }
  }

  const handleNext = () => {
    if (nowPage < totalPage()) {
      setNowPage(nowPage + 1)
    }
  }
  
  return (
    <div className={classes.root}>
      <Typography variant="body1">
        Rows per page:
      </Typography>
      <FormControl className={classes.formControl}>
        <NativeSelect
          value={perPage}
          onChange={handlePerPage}
          className={classes.perPageSelect}
          defaultValue={5}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
        </NativeSelect>
      </FormControl>
      <Typography variant="body1">
        {(nowPage * perPage) - (perPage - 1)}
        -
        {nowPage * perPage > totalCount ? totalCount : nowPage * perPage} 
        {' '}of{' '}
        {totalCount}
      </Typography>
      <IconButton
        className={classes.iconBtn}
        aria-label="perv"
        onClick={handlePerv}
        disabled={nowPage === 1}
      >
        <ArrowLeftIcon />
      </IconButton>
      <IconButton
        className={classes.iconBtn}
        aria-label="next"
        onClick={handleNext}
        disabled={nowPage * perPage >= totalCount}
      >
        <ArrowRightIcon />
      </IconButton>
    </div>
  )
}

export default Pagination
