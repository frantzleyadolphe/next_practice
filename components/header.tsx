import React from "react";
import PageContainer from "./page-container";
import { HeaderNavigation } from "./header-navigation";
import ProfileButton from "./profile-button";

export default function Header() {
  return (
    <header className="p-4 border-b">
      <PageContainer>
        <div className="flex items-center justify-between w-full">
          <div>
            {/* responsive menu */}

            <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-blue-600">
              Next Blog Practice
            </h1>
          </div>
          {/* Navigation with shadcn */}
          <HeaderNavigation />
          {/* Buttons with shadcn */}
          <div className="flex items-center">
            {/* toogle*/}
            <ProfileButton />
          </div>
        </div>
      </PageContainer>
    </header>
  );
}
