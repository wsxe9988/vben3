import { LAYOUT } from '../basic'

const dashboard: RouteRecordItem = {
  path: '/dashboard',
  name: 'Dashboard',
  component: LAYOUT,
  redirect: '/dashboard/analysis',
  meta: {
    orderNo: 1,
    icon: 'mdi:monitor-dashboard',
    title: 'routes.dashboard.dashboard',
  },
  children: [
    {
      path: 'analysis',
      name: 'Analysis',
      component: () => import('@/pages/dashboard/analysis/index.vue'),
      meta: {
        title: 'routes.dashboard.analysis',
      },
    },
    {
      path: 'workbench',
      name: 'Workbench',
      component: () => import('@/pages/dashboard/workbench/index.vue'),
      meta: {
        title: 'routes.dashboard.workbench',
      },
    },
  ],
}

export default dashboard
