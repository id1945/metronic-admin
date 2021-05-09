/* eslint-disable no-restricted-imports */
import React from "react";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import {
  Menu,
  Button,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  Paper,
  MenuList,
  Popper,
  Grow,
  ClickAwayListener,
  ListItemIcon,
  IconButton,
  Typography,
  Fade
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";
import {Notice, KTCodeExample} from "../../../../_metronic/_partials/controls";

// Example 2
const useStyles2 = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

const options = [
  "Show some love to Material-UI",
  "Show all notification content",
  "Hide sensitive notification content",
  "Hide all notification content"
];

// Example 3
const useStyles3 = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  paper: {
    marginRight: theme.spacing(2)
  }
}));

// Example 4
const StyledMenu4 = withStyles({
  paper: {
    border: "1px solid #d3d4d5"
  }
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

const StyledMenuItem4 = withStyles(theme => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);

// Example 5
const options5 = [
  "None",
  "Atria",
  "Callisto",
  "Dione",
  "Ganymede",
  "Hangouts Call",
  "Luna",
  "Oberon",
  "Phobos",
  "Pyxis",
  "Sedna",
  "Titania",
  "Triton",
  "Umbriel"
];

const ITEM_HEIGHT = 48;

// Example 6
const useStyles6 = makeStyles({
  root: {
    width: 230
  }
});

export default function MenusExamplesPage() {
  // Example 1
  const [anchorEl1, setAnchorEl1] = React.useState(null);

  function handleClick1(event) {
    setAnchorEl1(event.currentTarget);
  }

  function handleClose1() {
    setAnchorEl1(null);
  }

  // Example 2
  const classes2 = useStyles2();
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [selectedIndex2, setSelectedIndex2] = React.useState(1);

  function handleClickListItem2(event) {
    setAnchorEl2(event.currentTarget);
  }

  function handleMenuItemClick2(event, index) {
    setSelectedIndex2(index);
    setAnchorEl2(null);
  }

  function handleClose2() {
    setAnchorEl2(null);
  }

  // Example 3
  const classes3 = useStyles3();
  const [open3, setOpen3] = React.useState(false);
  const anchorRef3 = React.useRef(null);

  function handleToggle3() {
    setOpen3(prevOpen3 => !prevOpen3);
  }

  function handleClose(event) {
    if (anchorRef3.current && anchorRef3.current.contains(event.target)) {
      return;
    }

    setOpen3(false);
  }

  // Example 4
  const [anchorEl4, setAnchorEl4] = React.useState(null);

  function handleClick4(event) {
    setAnchorEl4(event.currentTarget);
  }

  function handleClose4() {
    setAnchorEl4(null);
  }

  // Example 5
  const [anchorEl5, setAnchorEl5] = React.useState(null);
  const open5 = Boolean(anchorEl5);

  function handleClick5(event) {
    setAnchorEl5(event.currentTarget);
  }

  function handleClose5() {
    setAnchorEl5(null);
  }

  // Example 6
  const classes6 = useStyles6();

  // Example 7
  const [anchorEl7, setAnchorEl7] = React.useState(null);
  const open7 = Boolean(anchorEl7);

  function handleClick7(event) {
    setAnchorEl7(event.currentTarget);
  }

  function handleClose7() {
    setAnchorEl7(null);
  }

  return (
    <>
      <Notice icon="flaticon-warning font-primary">
        <span>Menus display a list of choices on temporary surfaces.</span>{" "}
        <span>
          For more info please check the components's official{" "}
          <a
            target="_blank"
            className="font-weight-bold"
            rel="noopener noreferrer"
            href="https://material-ui.com/components/menus/"
          >
            demos & documentation
          </a>
        </span>
      </Notice>

      <div className="row">
        <div className="col-md-6">
          <KTCodeExample
            jsCode={jsCode1}
            beforeCodeTitle="Simple Menu"
            codeBlockHeight="400px"
          >
            <span>
              Simple menus open over the anchor element by default (this option
              can be changed via props). When close to a screen edge, simple
              menus vertically realign to make sure that all menu items are
              completely visible.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <div>
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick1}
              >
                Open Menu
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl1}
                keepMounted
                open={Boolean(anchorEl1)}
                onClose={handleClose1}
              >
                <MenuItem onClick={handleClose1}>Profile</MenuItem>
                <MenuItem onClick={handleClose1}>My account</MenuItem>
                <MenuItem onClick={handleClose1}>Logout</MenuItem>
              </Menu>
            </div>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode3}
            beforeCodeTitle="MenuList composition"
            codeBlockHeight="400px"
          >
            <span>
              The <code>Menu</code> component uses the <code>Popover</code>{" "}
              component internally. However, you might want to use a different
              positioning strategy, or not blocking the scroll. For answering
              those needs, we expose a <code>MenuList</code> component that you
              can compose, with <code>Popper</code> in this example.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <div className={classes3.root}>
              <Paper className={classes3.paper}>
                <MenuList>
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>My account</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Paper>
              <div>
                <Button
                  ref={anchorRef3}
                  aria-controls="menu-list-grow"
                  aria-haspopup="true"
                  onClick={handleToggle3}
                >
                  Toggle Menu Grow
                </Button>
                <Popper
                  open={open3}
                  anchorEl={anchorRef3.current}
                  keepMounted
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === "bottom"
                            ? "center top"
                            : "center bottom"
                      }}
                    >
                      <Paper id="menu-list-grow">
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList>
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>
                              My account
                            </MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </div>
            </div>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode5}
            beforeCodeTitle="Max height menus"
            codeBlockHeight="400px"
          >
            <span>
              If the height of a menu prevents all menu items from being
              displayed, the menu can scroll internally.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <div>
              <IconButton
                aria-label="More"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick5}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="long-menu"
                anchorEl={anchorEl5}
                keepMounted
                open={open5}
                onClose={handleClose5}
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: 200
                  }
                }}
              >
                {options5.map(option => (
                  <MenuItem
                    key={option}
                    selected={option === "Pyxis"}
                    onClick={handleClose5}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </div>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode7}
            beforeCodeTitle="Change transition"
            codeBlockHeight="400px"
          >
            <span>Use a different transition.</span>
            <div className="separator separator-dashed my-7"></div>
            <div>
              <Button
                aria-controls="fade-menu"
                aria-haspopup="true"
                onClick={handleClick7}
              >
                Open with fade transition
              </Button>
              <Menu
                id="fade-menu"
                anchorEl={anchorEl7}
                keepMounted
                open={open7}
                onClose={handleClose7}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={handleClose7}>Profile</MenuItem>
                <MenuItem onClick={handleClose7}>My account</MenuItem>
                <MenuItem onClick={handleClose7}>Logout</MenuItem>
              </Menu>
            </div>
          </KTCodeExample>
        </div>
        <div className="col-md-6">
          <KTCodeExample
            jsCode={jsCode2}
            beforeCodeTitle="Selected menus"
            codeBlockHeight="400px"
          >
            <span>
              If used for item selection, when opened, simple menus attempt to
              vertically align the currently selected menu item with the anchor
              element, and the initial focus will be placed on the selected menu
              item. The currently selected menu item is set using the{" "}
              <code>selected</code> property (from ListItem). To use a selected
              menu item without impacting the initial focus or the vertical
              positioning of the menu, set the <code>variant</code> property to{" "}
              <code>menu</code>.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <div className={classes2.root}>
              <List component="nav" aria-label="Device settings">
                <ListItem
                  button
                  aria-haspopup="true"
                  aria-controls="lock-menu"
                  aria-label="When device is locked"
                  onClick={handleClickListItem2}
                >
                  <ListItemText
                    primary="When device is locked"
                    secondary={options[selectedIndex2]}
                  />
                </ListItem>
              </List>
              <Menu
                id="lock-menu"
                anchorEl={anchorEl2}
                keepMounted
                open={Boolean(anchorEl2)}
                onClose={handleClose2}
              >
                {options.map((option, index) => (
                  <MenuItem
                    key={option}
                    disabled={index === 0}
                    selected={index === selectedIndex2}
                    onClick={event => handleMenuItemClick2(event, index)}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </div>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode4}
            beforeCodeTitle="Customized menus"
            codeBlockHeight="400px"
          >
            <span>Here is an example of customizing the component.</span>
            <div className="separator separator-dashed my-7"></div>
            <div>
              <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                onClick={handleClick4}
              >
                Open Menu
              </Button>
              <StyledMenu4
                id="customized-menu"
                anchorEl={anchorEl4}
                keepMounted
                open={Boolean(anchorEl4)}
                onClose={handleClose4}
              >
                <StyledMenuItem4>
                  <ListItemIcon>
                    <SendIcon />
                  </ListItemIcon>
                  <ListItemText primary="Sent mail" />
                </StyledMenuItem4>
                <StyledMenuItem4>
                  <ListItemIcon>
                    <DraftsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Drafts" />
                </StyledMenuItem4>
                <StyledMenuItem4>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Inbox" />
                </StyledMenuItem4>
              </StyledMenu4>
            </div>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode6}
            beforeCodeTitle="Limitations"
            codeBlockHeight="400px"
          >
            <span>
              There is a flexbox bug that prevents{" "}
              <code>text-overflow: ellipsis</code> from working in a flexbox
              layout. You can use the <code>Typography</code> component with{" "}
              <code>noWrap</code> to workaround this issue:
            </span>
            <div className="separator separator-dashed my-7"></div>
            <Paper className={classes6.root}>
              <MenuList>
                <MenuItem>
                  <ListItemIcon>
                    <SendIcon />
                  </ListItemIcon>
                  <Typography variant="inherit">A short message</Typography>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <PriorityHighIcon />
                  </ListItemIcon>
                  <Typography variant="inherit">
                    A very long text that overflows
                  </Typography>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <DraftsIcon />
                  </ListItemIcon>
                  <Typography variant="inherit" noWrap>
                    A very long text that overflows
                  </Typography>
                </MenuItem>
              </MenuList>
            </Paper>
          </KTCodeExample>
        </div>
      </div>
    </>
  );
}

const jsCode1 = `
import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
`;
const jsCode2 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const options = [
  'Show some love to Material-UI',
  'Show all notification content',
  'Hide sensitive notification content',
  'Hide all notification content',
];

export default function SimpleListMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  function handleClickListItem(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMenuItemClick(event, index) {
    setSelectedIndex(index);
    setAnchorEl(null);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="Device settings">
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="lock-menu"
          aria-label="When device is locked"
          onClick={handleClickListItem}
        >
          <ListItemText primary="When device is locked" secondary={options[selectedIndex]} />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            disabled={index === 0}
            selected={index === selectedIndex}
            onClick={event => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
`;
const jsCode3 = `
import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

export default function MenuListComposition() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  function handleToggle() {
    setOpen(prevOpen => !prevOpen);
  }

  function handleClose(event) {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <MenuList>
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Paper>
      <div>
        <Button
          ref={anchorRef}
          aria-controls="menu-list-grow"
          aria-haspopup="true"
          onClick={handleToggle}
        >
          Toggle Menu Grow
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} keepMounted transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper id="menu-list-grow">
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList>
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
`;
const jsCode4 = `
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Open Menu
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Sent mail" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
`;
const jsCode5 = `
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel',
];

const ITEM_HEIGHT = 48;

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <IconButton
        aria-label="More"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: 200,
          },
        }}
      >
        {options.map(option => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
`;
const jsCode6 = `
import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';

const useStyles = makeStyles({
  root: {
    width: 230,
  },
});

export default function TypographyMenu() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <Typography variant="inherit">A short message</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PriorityHighIcon />
          </ListItemIcon>
          <Typography variant="inherit">A very long text that overflows</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            A very long text that overflows
          </Typography>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
`;
const jsCode7 = `
import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
        Open with fade transition
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
`;
