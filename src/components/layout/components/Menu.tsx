import { makeStyles, Theme, useMediaQuery } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import LabelIcon from "@material-ui/icons/Label";
import DefaultIcon from "@material-ui/icons/ViewList";
import React, { FC } from "react";
import { getResources, MenuItemLink } from "react-admin";
import { useSelector } from "react-redux";
import { AppState } from "../../../consts/types";

const useSidebarMenuStyles = makeStyles({
  menuItem: {
    minHeight: 60,
  },
  badge: {
    fontWeight: "bold",
  },
  menuItemText: {
    fontWeight: "normal",
  },
});

interface Props {
  logout: () => void;
  onMenuClick: () => void;
}

const Menu: FC<Props> = ({ onMenuClick, logout }) => {
  const classes = useSidebarMenuStyles();

  const isXSmall = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("xs")
  );
  const open = useSelector((state: AppState) => state.admin.ui.sidebarOpen);
  const resources: any = useSelector(getResources);
  return (
    <div>
      {resources.map((resource: any) => (
        <MenuItemLink
          key={resource.name}
          className={classes.menuItem}
          to={`/${resource.name}`}
          primaryText={
            (resource.options && resource.options.label) || resource.name
          }
          leftIcon={resource.icon ? <resource.icon /> : <DefaultIcon />}
          onClick={onMenuClick}
          sidebarIsOpen={open}
        />
      ))}
      <MenuItemLink
        className={classes.menuItem}
        to="/miscellaneous"
        primaryText={
          <Badge badgeContent={4} color="secondary" className={classes.badge}>
            <span className={classes.menuItemText}>Miscellaneous</span>
          </Badge>
        }
        leftIcon={<LabelIcon />}
        onClick={onMenuClick}
        sidebarIsOpen={open}
      />
      {isXSmall && logout}
    </div>
  );
};

export default Menu;
