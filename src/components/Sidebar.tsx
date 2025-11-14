import { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import {
  type LucideIcon,
  HomeIcon,
  MoreHorizontal,
  FishSymbol,
  InfoIcon,
  PiggyBank,
  PlaneIcon,
  MailIcon,
  LinkIcon,
  GithubIcon,
} from "lucide-react"

import {
  Sidebar as SidebarComp,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenuAction,
  useSidebar,
} from "./ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

const MENU_ITEMS: {
  [key: string]: {
    name: string
    icon: LucideIcon
    url: string
    game?: string
    github?: string
  }[]
} = {
  section1: [
    {
      name: "Home",
      icon: HomeIcon,
      url: "/",
    },
    {
      name: "About",
      icon: InfoIcon,
      url: "/about",
    },
    {
      name: "Contact",
      icon: MailIcon,
      url: "/contact",
    },
  ],
  section2: [
    {
      name: "Vault.io",
      icon: PiggyBank,
      url: "/vault",
      game: "https://vault.jamesonb.com",
      github: "https://github.com/Jameson13B/vault.io",
    },
    {
      name: "Penguin Paradise",
      icon: FishSymbol,
      url: "/penguin-paradise",
    },
    {
      name: "Neon Airways",
      icon: PlaneIcon,
      url: "/neon-airways",
    },
  ],
}

export const Sidebar = () => {
  const { isMobile, toggleSidebar } = useSidebar()
  const { pathname } = useLocation()

  useEffect(() => {
    if (isMobile) toggleSidebar()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <SidebarComp collapsible="icon">
      <SidebarHeader className="bg-[var(--main)]">
        <SidebarMenu>
          <SidebarGroupLabel className="text-xl font-bold">
            Neon Fiction: Games
          </SidebarGroupLabel>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <SidebarMenu>
            {MENU_ITEMS.section1.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton asChild>
                  <Link to={item.url}>
                    <item.icon />
                    <span>{item.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <SidebarGroupLabel>Games</SidebarGroupLabel>
          <SidebarMenu>
            {MENU_ITEMS.section2.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton asChild>
                  <Link to={item.url}>
                    <item.icon />
                    <span>{item.name}</span>
                  </Link>
                </SidebarMenuButton>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuAction>
                      <MoreHorizontal className="group-hover/menu-item:text-main-foreground" />
                      <span className="sr-only">More</span>
                    </SidebarMenuAction>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="w-48"
                    side={isMobile ? "bottom" : "right"}
                    align={isMobile ? "end" : "start"}
                  >
                    <Link to={item.url}>
                      <DropdownMenuItem>
                        <InfoIcon />
                        <span>View Details</span>
                      </DropdownMenuItem>
                    </Link>
                    <DropdownMenuSeparator />
                    {item.game ? (
                      <Link
                        to={item.game ?? ""}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <DropdownMenuItem disabled={!item.game}>
                          <LinkIcon />
                          <span>Play Game</span>
                        </DropdownMenuItem>
                      </Link>
                    ) : (
                      <DropdownMenuItem disabled={!item.game}>
                        <LinkIcon />
                        <span>Play Game</span>
                      </DropdownMenuItem>
                    )}
                    {item.github ? (
                      <Link
                        to={item.github ?? ""}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <DropdownMenuItem disabled={!item.github}>
                          <GithubIcon />
                          <span>View Github</span>
                        </DropdownMenuItem>
                      </Link>
                    ) : (
                      <DropdownMenuItem disabled={!item.github}>
                        <GithubIcon />
                        <span>View Github</span>
                      </DropdownMenuItem>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </SidebarComp>
  )
}
