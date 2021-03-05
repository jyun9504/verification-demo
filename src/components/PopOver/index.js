import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  paper: {
    boxShadow: '-2px 4px 5px rgba(0, 0, 0, .2)',
    marginTop: 10,
  },
}));

function PopOver(props) {
  const { children, btnText, anchorEl, setAnchorEl } = props;
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopOverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} size="small" variant="outlined" color="secondary" onClick={handleClick}>
        {btnText}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopOverClose}
        PaperProps={{elevation: 0, className: classes.paper}}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {children}
      </Popover>
    </div>
  );
}

export default PopOver