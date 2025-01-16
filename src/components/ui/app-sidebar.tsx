"use client";

import * as React from "react";

import { TabsDemo } from "./tabsDemo";
import { Tabs } from "./tabs";

export function AppSidebar() {
  return (
    <div className="flex bg-zinc-800 w-64 h-[100vh] p-6 z-10 sticky top-0">
      <Tabs>
        <TabsDemo />
        {/* <SidebarContent className="flex flex-col">
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent> */}
      </Tabs>
    </div>
  );
}
