"use client";

import Link from "next/link";
import { useState } from "react";

const menuItems = ["홈", "프로젝트", "내 프로필"] as const;

type MenuItem = (typeof menuItems)[number];

const menuItemClassName =
  "flex h-full items-center whitespace-nowrap border-b-2 text-[16px] leading-[1.5] tracking-[0.0912px]";

const menuItemStyle = {
  fontFamily: '"Pretendard JP", sans-serif',
  fontFeatureSettings: '"ss10" 1',
} as const;

export function Gnb() {
  const [selected, setSelected] = useState<MenuItem | null>(null);

  return (
    <header className="flex h-[60px] w-full shrink-0 items-center justify-center bg-white px-12">
      <div className="flex h-full w-full max-w-[1060px] items-center justify-between">
        <div className="flex h-full min-w-0 items-center gap-10">
          <Link href="/" className="shrink-0">
            <img
              src="/gnb/logo.svg"
              alt="Gorok"
              width={95.902}
              height={28}
              className="block h-[28px] w-[95.902px] max-w-none"
            />
          </Link>
          <nav aria-label="주요 메뉴" className="flex h-full items-start gap-6">
            {menuItems.map((item) => {
              const isSelected = selected === item;

              return (
                <button
                  key={item}
                  type="button"
                  aria-current={isSelected ? "page" : undefined}
                  className={`${menuItemClassName} ${
                    isSelected
                      ? "border-[#0066ff] font-semibold text-[#0066ff]"
                      : "border-transparent font-normal text-[#2e2f33e0]"
                  }`}
                  style={menuItemStyle}
                  onClick={() => setSelected(item)}
                >
                  {item}
                </button>
              );
            })}
          </nav>
        </div>
        <div className="flex shrink-0 items-center gap-1">
          <button
            type="button"
            aria-label="알림"
            className="flex size-10 items-center justify-center"
          >
            <img
              src="/gnb/bell.svg"
              alt=""
              width={24}
              height={24}
              className="block h-6 w-6 max-w-none"
            />
          </button>
          <button
            type="button"
            aria-label="설정"
            className="flex size-10 items-center justify-center"
          >
            <img
              src="/gnb/setting.svg"
              alt=""
              width={24}
              height={24}
              className="block h-6 w-6 max-w-none"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
