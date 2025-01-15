"use client";

import * as React from "react";

import { TabsDemo } from "./tabsDemo";
import { Tabs } from "./tabs";

export function AppSidebar() {
  return (
    <div className="flex bg-black w-64 min-h-[calc(100vh-4rem)] p-6 z-10">
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
