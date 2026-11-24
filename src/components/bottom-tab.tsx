"use client";

import { useState } from "react";

const tabs = [
  {
    label: "홈",
    icon: "/bottom-tab/home.svg",
    activeIcon: "/bottom-tab/home-active.svg",
  },
  {
    label: "프로젝트",
    icon: "/bottom-tab/folder.svg",
    activeIcon: "/bottom-tab/folder-active.svg",
  },
  {
    label: "알림",
    icon: "/bottom-tab/bell.svg",
    activeIcon: "/bottom-tab/bell-active.svg",
  },
  {
    label: "내 프로필",
    icon: "/bottom-tab/person.svg",
    activeIcon: "/bottom-tab/person-active.svg",
  },
] as const;

type TabLabel = (typeof tabs)[number]["label"];

const labelStyle = {
  fontFamily: '"Pretendard JP", sans-serif',
  fontFeatureSettings: '"ss10" 1',
} as const;

export function BottomTab() {
  const [selected, setSelected] = useState<TabLabel | null>(null);

  return (
    <nav
      aria-label="하단 메뉴"
      className="sticky bottom-0 z-20 mt-auto flex w-full items-start border-t border-solid border-[rgba(112,115,124,0.08)] bg-white py-2 min-[992px]:hidden"
    >
      {tabs.map((tab) => {
        const isSelected = selected === tab.label;

        return (
          <button
            key={tab.label}
            type="button"
            aria-current={isSelected ? "page" : undefined}
            className="flex min-w-0 flex-1 cursor-pointer flex-col items-center gap-1 bg-transparent"
            onClick={() => setSelected(tab.label)}
          >
            <img
              src={isSelected ? tab.activeIcon : tab.icon}
              alt=""
              width={24}
              height={24}
              className="block h-6 w-6 max-w-none"
            />
            <span
              className={`text-[12px] leading-[1.334] font-medium tracking-[0.3024px] whitespace-nowrap ${
                isSelected
                  ? "text-[#0066ff]"
                  : "text-[rgba(55,56,60,0.61)]"
              }`}
              style={labelStyle}
            >
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
