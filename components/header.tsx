import React from "react";
import PageContainer from "./page-container";
import { HeaderNavigation } from "./header-navigation";
import ProfileButton from "./profile-button";
import ResponsiveMenu from "./responsive-menu";
import ToggleTheme from "./toggle-theme";

export default function Header() {
  return (
    <header className="p-4 border-b">
      <PageContainer>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <ResponsiveMenu />
            {/* responsive menu */}

            <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-blue-600">
              Next Blog Practice
            </h1>
          </div>
          {/* Navigation with shadcn */}
          <HeaderNavigation />
          {/* Buttons with shadcn */}
          <div className="flex items-center gap-2">
            {/* toogle*/}
            <ToggleTheme />
            <ProfileButton />
          </div>
        </div>
      </PageContainer>
    </header>
  );
}
