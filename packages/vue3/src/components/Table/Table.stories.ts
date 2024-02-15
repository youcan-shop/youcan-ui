import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import type { TableActions, TableColumn, TableData } from './types';
import type { StaticStatusDefinition } from '~/components/Status/types';
import { Table } from '~/components';

type Story = StoryObj<typeof Table>;
const meta: Meta<typeof Table> = {
  title: 'Application/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['table', 'listing'],
  argTypes: {
    columns: { table: { disable: true } },
    actions: { table: { disable: true } },
    selectedRows: { table: { disable: true } },
    data: { table: { disable: true } },
  },
  args: {
    actionsText: 'Actions',
    selectable: false,
  },
};

export const Default: Story = {
  render: args => ({
    components: { Table },
    setup() {
      const columns: TableColumn[] = [
        { label: 'Domain', accessor: 'domain', sortable: 'desc' },
        { label: 'Status', accessor: 'status', sortable: 'desc' },
        { label: 'Git Branch', accessor: 'branch', sortable: 'desc' },
      ];

      const actions: TableActions[] = [
        {
          label: 'Redeploy',
          iconName: 'i-youcan-arrows-clockwise',
          tooltip: 'Redeploy',
        },
        {
          label: 'Copy URL',
          iconName: 'i-youcan-copy',
          tooltip: 'Copy URL',
        },
        {
          label: 'Source Code',
          iconName: 'i-youcan-code',
          tooltip: 'Source Code',
        },
      ];

      const domainStatuses: { [k: string]: StaticStatusDefinition } = {
        ready: {
          color: '#52E2C0',
          label: 'Ready',
          labelColor: '#2d4236',
        },
        error: {
          color: '#EE0200',
          label: 'Error',
          labelColor: '#f8dcdc',
        },
        building: {
          color: '#ffc35c',
          label: 'Building',
          labelColor: '#574811',
        },
        queued: {
          color: '#999999',
          label: 'Queued',
          labelColor: '#fff2f2',
        },
      };

      const data = ref<TableData[]>([
        {
          row: {
            id: 'eihabkhan.com',
            domain: 'eihabkhan.com',
            status: {
              variant: 'static-status',
              data: {
                status: domainStatuses.building,
              },
            },
            branch: 'main',
          },
        },
        {
          row: {
            id: 'supershop.youcan.shop',
            domain: 'supershop.youcan.shop',
            status: {
              variant: 'static-status',
              data: {
                status: domainStatuses.queued,
              },
            },
            branch: 'main',
          },
        },
        {
          row: {
            id: 'vercel.com',
            domain: 'vercel.com',
            status: {
              variant: 'static-status',
              data: {
                status: domainStatuses.ready,
              },
            },
            branch: 'main',
          },
        },
        {
          row: {
            domain: 'nextjs.org',
            status: {
              variant: 'static-status',
              data: {
                status: domainStatuses.error,
              },
            },
            branch: 'feat/next-conf',
          },
        },
      ]);

      const selectedRows = ref<TableData[]>([]);

      const handleSort = (column: TableColumn) => {
        data.value = data.value.sort((a: any, b: any) => {
          let textA = '';
          let textB = '';

          if (typeof a.row[column.accessor] === 'string') {
            textA = (a.row[column.accessor] as string)?.toUpperCase();
            textB = (b.row[column.accessor] as string)?.toUpperCase();
          }

          else if (a.row?.status?.data.status.label && b.row?.status?.data.status.label) {
            textA = a.row?.status?.data.status.label;
            textB = b.row?.status?.data.status.label;
          }

          if (textA < textB) {
            return -1;
          }
          if (textA > textB) {
            return 1;
          }

          return 0;
        });
      };

      const updateSelectedRows = (data: TableData[]) => {
        selectedRows.value = data;
      };

      return { args, columns, actions, handleSort, updateSelectedRows, data };
    },
    template: `
              <Table
              v-bind="args"
              :columns="columns"
              :data="data"
              :actions="actions"
              :selected-rows="selectedRows"
              @sort="handleSort"
              @update:selected-rows="updateSelectedRows"
            />
              `,
  }),
};

export default meta;
