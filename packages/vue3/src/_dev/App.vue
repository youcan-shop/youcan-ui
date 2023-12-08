<script setup lang="ts">
import { ref } from 'vue';
import 'uno.css';
import '../assets/main.css';
import { Alert, Increment, Table, Tag } from '~/components';
import type { StaticStatusDefinition } from '~/components/Status/types';
import type { TableActions, TableColumn, TableData } from '~/components/Table/types';
import type { AlertType } from '~/components/Alert/types';
import type { TagItemValue } from '~/components/Tag/types';

/* Table */
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
/* Table */

/* Alert */
interface AlertProps {
  title: string
  description: string
  type: AlertType
}
const alerts: AlertProps[] = [
  {
    title: 'Info',
    description: 'Click here to learn more about the exciting enhancements we\'ve made.',
    type: 'info',
  },
  {
    title: 'Success',
    description: 'Your profile information has been successfully updated.',
    type: 'success',
  },
  {
    title: 'Warning',
    description: 'Please check your internet connection.',
    type: 'warning',
  },
];

/* Alert */

/* Increment */
const quantity = ref('0');
/* Increment */

/* Tag */
const preferredLanguages = ref<TagItemValue[]>([
  { label: 'JavaScript' },
]);
/* Tag */
</script>

<template>
  <div class="container">
    <div>
      <Table
        :columns="columns"
        :data="data"
        :actions="actions"
        :selectable="true"
        :selected-rows="selectedRows"
        @sort="handleSort"
        @update:selected-rows="updateSelectedRows"
      />
    </div>

    <div>
      <Alert v-for="alert in alerts" :key="alert.type" :type="alert.type">
        <template #title>
          {{ alert.title }}
        </template>
        <template #description>
          {{ alert.description }}
        </template>
      </Alert>
    </div>

    <div>
      <Increment v-model="quantity" :max="100" />
    </div>

    <div>
      <Tag
        v-model="preferredLanguages"
        placeholder="Your favorite programming languages"
        :max="3"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1024px;
  margin: auto;
}

.container > div {
  width: 100%;
  padding: 30px 0;
  border-top: 1px solid var(--gray-100);
}
</style>
