export interface SidebarMenuItem {
  label: string;
  path: string;
  icon: string;
  subMenu?: SidebarMenuItem[];
}

export const sidebarMenu: SidebarMenuItem[] = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: "/images/icon_home.svg",
  },
  {
    label: "Account",
    path: "/account",
    icon: "/images/icon_gnb_01.svg",
    subMenu: [
      {
        label: "사용자 관리",
        path: "/account/users",
        icon: "/images/icon_gnb_02.svg",
      },
      {
        label: "권한 설정",
        path: "/account/roles",
        icon: "/images/icon_gnb_03.svg",
      },
    ],
  },
  {
    label: "Community",
    path: "/community",
    icon: "/images/icon_gnb_04.svg",
  },
];
