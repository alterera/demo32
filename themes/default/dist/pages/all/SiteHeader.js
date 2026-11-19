import React from 'react';
import { MotionConfig, motion } from 'motion/react';
import { MiniCart } from '@evershop/evershop/components/frontStore/cart/MiniCart';
import { DesktopNav } from '../../components/header/DesktopNav.js';
import { MobileMenu } from '../../components/header/MobileMenu.js';
import { SearchToggle } from '../../components/header/SearchToggle.js';
import { UserMenu } from '../../components/header/UserMenu.js';
import { useHideOnScroll } from '../../components/header/useHideOnScroll.js';
import { pickNavCategories } from '../../components/header/types.js';
import { shell } from '../../lib/layout.js';
export default function SiteHeader({ navCategories, headerSetting, searchUrl, cartUrl, accountUrl, loginUrl }) {
    const { hidden, scrolled } = useHideOnScroll();
    const items = pickNavCategories(navCategories === null || navCategories === void 0 ? void 0 : navCategories.items);
    const storeName = (headerSetting === null || headerSetting === void 0 ? void 0 : headerSetting.storeName) || 'Store';
    return (React.createElement(MotionConfig, { reducedMotion: "user" },
        React.createElement("style", null, `.header__middle{display:none!important}`),
        React.createElement("div", { className: "h-16", "aria-hidden": "true" }),
        React.createElement(motion.div, { animate: { y: hidden ? '-100%' : 0 }, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] }, className: `fixed inset-x-0 top-0 z-50 bg-background transition-shadow duration-300 ${scrolled ? 'shadow-[0_1px_8px_rgba(0,0,0,0.08)]' : 'shadow-none'}` },
            React.createElement("div", { className: `${shell} relative flex h-16 items-stretch justify-between gap-4` },
                React.createElement("div", { className: "flex flex-1 items-center gap-1 lg:flex-none" },
                    React.createElement(MobileMenu, { items: items, storeName: storeName }),
                    React.createElement("a", { href: "/", "aria-label": `${storeName} home`, className: "flex items-center" }, (headerSetting === null || headerSetting === void 0 ? void 0 : headerSetting.logo) ? (React.createElement("img", { src: `/images?src=${encodeURIComponent(headerSetting.logo)}&w=320&q=85&f=webp`, alt: "", width: headerSetting.logoWidth, height: headerSetting.logoHeight, className: "max-h-9 w-auto" })) : (React.createElement("span", { className: "text-lg font-extrabold uppercase tracking-widest" }, storeName)))),
                React.createElement(DesktopNav, { items: items }),
                React.createElement("div", { className: "flex flex-1 items-center justify-end gap-1 lg:flex-none" },
                    React.createElement(SearchToggle, { searchUrl: searchUrl }),
                    React.createElement(UserMenu, { accountUrl: accountUrl, loginUrl: loginUrl }),
                    React.createElement(MiniCart, { cartUrl: cartUrl, className: "flex items-center" }))))));
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
//# sourceMappingURL=SiteHeader.js.map