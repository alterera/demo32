import React from 'react';
import { Book, Inbox } from 'lucide-react';
import { NavigationItemGroup } from '@evershop/evershop/components/admin/NavigationItemGroup';

/** Replaces the core CMS menu group: Pages and Contact messages only (no Widgets). */
export default function CmsMenuGroup({
  cmsPageGrid,
  contactSubmissionGrid
}: {
  cmsPageGrid: string;
  contactSubmissionGrid: string;
}) {
  return (
    <NavigationItemGroup
      id="cmsMenuGroup"
      name="CMS"
      items={[
        { Icon: Book, url: cmsPageGrid, title: 'Pages' },
        { Icon: Inbox, url: contactSubmissionGrid, title: 'Contact messages' }
      ]}
    />
  );
}

export const layout = {
  areaId: 'adminMenu',
  sortOrder: 60
};

export const query = `
  query Query {
    cmsPageGrid: url(routeId: "cmsPageGrid")
    contactSubmissionGrid: url(routeId: "contactSubmissionGrid")
  }
`;
