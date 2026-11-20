import React from 'react';
import { MotionConfig, motion } from 'motion/react';
import { MiniCart } from '@evershop/evershop/components/frontStore/cart/MiniCart';
import { DesktopNav } from '../../components/header/DesktopNav.js';
import { MobileMenu } from '../../components/header/MobileMenu.js';
import { SearchToggle } from '../../components/header/SearchToggle.js';
import { UserMenu } from '../../components/header/UserMenu.js';
import { useHideOnScroll } from '../../components/header/useHideOnScroll.js';
import {
  pickNavCategories,
  type NavCategory
} from '../../components/header/types.js';
import { Marquee } from '../../components/ui/marquee.js';
import { TOPBAR_MESSAGES } from '../../content/home.js';
import { shell } from '../../lib/layout.js';

interface Props {
  navCategories?: { items: NavCategory[] };
  headerSetting?: {
    storeName?: string;
    logo?: string;
    logoWidth?: number;
    logoHeight?: number;
  };
  searchUrl: string;
  cartUrl: string;
  accountUrl: string;
  loginUrl: string;
}

/** Announcement bar height in px. It shows only at the very top of the page. */
const TOPBAR_H = 28;

export default function SiteHeader({
  navCategories,
  headerSetting,
  searchUrl,
  cartUrl,
  accountUrl,
  loginUrl
}: Props) {
  const { hidden, scrolled } = useHideOnScroll();
  const items = pickNavCategories(navCategories?.items);
  const storeName = headerSetting?.storeName || 'Store';

  return (
    <MotionConfig reducedMotion="user">
      {/* hide the empty core header row that remains under our navbar */}
      <style>{`.header__middle{display:none!important}html,body{overflow-x:clip}`}</style>
      <div style={{ height: TOPBAR_H + 64 }} aria-hidden="true" />
      <motion.div
        animate={{ y: hidden ? '-100%' : scrolled ? -TOPBAR_H : 0 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 bg-background transition-shadow duration-300 ${
          scrolled ? 'shadow-[0_1px_8px_rgba(0,0,0,0.08)]' : 'shadow-none'
        }`}
      >
        {/* announcement bar */}
        <div style={{ height: TOPBAR_H }} className="bg-[#39ff14] text-black">
          <Marquee duration={42} gap="gap-10" className="h-full items-center">
            {TOPBAR_MESSAGES.map((m) => (
              <span key={m} className="flex items-center gap-10 whitespace-nowrap text-[11px] font-semibold sm:text-xs">
                {m}
                <span aria-hidden="true">✱</span>
              </span>
            ))}
          </Marquee>
        </div>
        <div className={`${shell} relative flex h-16 items-stretch justify-between gap-4`}>
          {/* left: mobile menu + logo */}
          <div className="flex flex-1 items-center gap-1 lg:flex-none">
            <MobileMenu items={items} storeName={storeName} />
            <a href="/" aria-label={`${storeName} home`} className="flex items-center">
              {headerSetting?.logo ? (
                <img
                  src={`/images?src=${encodeURIComponent(headerSetting.logo)}&w=320&q=85&f=webp`}
                  alt=""
                  width={headerSetting.logoWidth}
                  height={headerSetting.logoHeight}
                  className="max-h-9 w-auto"
                />
              ) : (
                <span className="whitespace-nowrap text-base font-extrabold uppercase tracking-widest sm:text-lg">
                  {storeName}
                </span>
              )}
            </a>
          </div>

          <DesktopNav items={items} />

          <div className="flex flex-1 items-center justify-end gap-1 lg:flex-none">
            <SearchToggle searchUrl={searchUrl} />
            <UserMenu accountUrl={accountUrl} loginUrl={loginUrl} />
            <MiniCart cartUrl={cartUrl} className="flex items-center" />
          </div>
        </div>
      </motion.div>
    </MotionConfig>
  );
}

export const layout = {
  areaId: 'headerTop',
  sortOrder: 1
};

export const query = `
  query Query {
    navCategories: categories {
      items {
        name
        url
        parent {
          name
        }
        children {
          name
          url
          children {
            name
            url
          }
        }
      }
    }
    headerSetting: setting {
      storeName
      logo
      logoWidth
      logoHeight
    }
    searchUrl: url(routeId: "catalogSearch")
    cartUrl: url(routeId: "cart")
    accountUrl: url(routeId: "account")
    loginUrl: url(routeId: "login")
  }
`;
