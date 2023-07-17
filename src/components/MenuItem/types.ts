export interface MenuItemProps {
  label: string;
  icon: JSX.Element;
  onClick: () => void;
  active: boolean;
}

export interface MenuItemCProps {
  item: MenuItemProps;
}

export interface MenuItemContainerProps {
  active: boolean;
}
