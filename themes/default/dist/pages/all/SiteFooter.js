import React from 'react';
import { WordmarkFooter } from '../../components/ui/wordmark-footer.js';
import { COMPANY, CREDIT } from '../../content/company.js';
import { pickNavCategories } from '../../components/header/types.js';
export default function SiteFooter({ footerCategories, footerSetting }) {
    const name = (footerSetting === null || footerSetting === void 0 ? void 0 : footerSetting.storeName) || 'Store';
    const shop = pickNavCategories(footerCategories === null || footerCategories === void 0 ? void 0 : footerCategories.items).map((c) => ({
        label: c.name,
        href: c.url
    }));
    return (React.createElement(React.Fragment, null,
        React.createElement("style", null, `
        .footer{margin-top:0!important;padding:0!important;border:0!important;background:transparent!important}
        .footer__middle,.footer__bottom{display:none!important}
      `),
        React.createElement(WordmarkFooter, { legal: { name: COMPANY.legalName, gstin: COMPANY.gstin, address: COMPANY.address }, credit: CREDIT, name: name, year: new Date().getFullYear(), description: "Everyday footwear for men, women and kids, made to be worn all day and built to last.", note: "Cash on delivery available", columns: [
                { title: 'Shop', links: shop },
                {
                    title: 'Help',
                    links: [
                        { label: 'Track your Order', href: '/page/track-order' },
                        { label: 'Store Locator', href: '/page/store-locator' },
                        { label: 'Returns & Exchange', href: '/page/returns-exchange' },
                        { label: 'Care', href: '/page/care' },
                        { label: 'FAQ', href: '/page/faq' }
                    ]
                },
                {
                    title: 'Company',
                    links: [
                        { label: 'About us', href: '/page/about-us' },
                        { label: 'Contact', href: '/page/contact-us' },
                        { label: 'Privacy policy', href: '/page/privacy-policy' },
                        { label: 'Terms of service', href: '/page/terms-of-service' }
                    ]
                }
            ] })));
}
export const layout = {
    areaId: 'footerTop',
    sortOrder: 1
};
export const query = `
  query Query {
    footerCategories: categories {
      items {
        name
        url
        parent {
          name
        }
      }
    }
    footerSetting: setting {
      storeName
    }
  }
`;
//# sourceMappingURL=SiteFooter.js.map