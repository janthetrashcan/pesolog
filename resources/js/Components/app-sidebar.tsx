import { Home, List, ChartBarStacked, FileChartPie, Settings, User2, ChevronUp } from "lucide-react";
import { Link } from '@inertiajs/react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/Components/ui/sidebar"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/Components/ui/dropdown-menu";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Records",
    url: "/records",
    icon: List,
  },
  {
    title: "Budget",
    url: "#",
    icon: ChartBarStacked,
  },
  {
    title: "Statistics",
    url: "#",
    icon: FileChartPie,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]


export function AppSidebar() {
  return (
    <Sidebar>
        <SidebarHeader className='px-4 pt-4'>
            <h1>Pesolog</h1>
        </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Pesolog</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={location.pathname === item.url}>
                    <Link href={item.url} key={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

        <SidebarFooter>
            <SidebarMenu>
                <SidebarMenuItem>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                        <SidebarMenuButton>
                            <User2 /> Username
                            <ChevronUp className="ml-auto" />
                        </SidebarMenuButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                        side="top"
                        className="w-[--radix-popper-anchor-width]"
                        >
                            <DropdownMenuItem>
                                <Link href={'profile'} className='w-full'>
                                    Account
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <span>Sign out</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarFooter>
    </Sidebar>
  )
}
