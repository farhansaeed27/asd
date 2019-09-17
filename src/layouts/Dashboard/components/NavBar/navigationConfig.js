/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */

import UserIcon from '@material-ui/icons/AccountCircle';
import ScriptIcon from '@material-ui/icons/Assignment';
import DialogIcon from '@material-ui/icons/ChatBubbleOutline';
import WorkflowIcon from '@material-ui/icons/Timeline';
import PlaceholderIcon from '@material-ui/icons/SortByAlpha';
import LeadIcon from '@material-ui/icons/People';
import CampaignIcon from '@material-ui/icons/Contactless';
import StatusIcon from '@material-ui/icons/List';

export default [
  {
    title: 'Pages',
    pages: [
      {
        title: 'User / Roles',
        href: '/management',
        icon: UserIcon,
        children: [
          {
            title: 'Users',
            href: '/management/customers'
          },
          // {
          //   title: 'User Details',
          //   href: '/management/customers/1/summary'
          // },
          {
            title: 'Projects',
            href: '/management/projects'
          },
          {
            title: 'Orders',
            href: '/management/orders'
          },
          {
            title: 'Order Details',
            href: '/management/orders/1'
          }
        ]
      },
      {
        title: 'Scripts',
        href: '/scripts',
        icon: ScriptIcon
      },
      {
        title: 'Dialogs',
        href: '/dialogs',
        icon: DialogIcon

      },
      {
        title: 'Workflows',
        href: '/workflows',
        icon: WorkflowIcon
      },
      {
        title: 'Placeholders',
        href: '/placeholders',
        icon: PlaceholderIcon
      },
      {
        title: 'Leads',
        href: '/leads',
        icon: LeadIcon
      },
      {
        title: 'Campaigns',
        href: '/campaigns',
        icon : CampaignIcon
      },
      {
        title: 'Status',
        href: '/status',
        icon: StatusIcon
      },
    ]
  },
];
