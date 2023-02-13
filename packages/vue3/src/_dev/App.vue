<script setup lang="ts">
import { ref } from 'vue';
import Table from '~/components/Table/Table.vue';

// const content = ref('<h1>HELLO</h1>');

// async function uploadImage(file: File): Promise<string> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('https://placeholder.com/assets/images/150x150-2-500x500.png');
//     }, 2000);
//   });
// }

const actions = [
  {
    label: 'Edit',
    iconName: 'i-youcan-pencil-simple',
    events: {},
  },
  {
    label: 'Duplicate',
    iconName: 'i-youcan-file',
    events: {},
  },
];

const columns = [
  {
    label: 'ID',
    accessor: 'ref',
  },
  {
    label: 'Customer',
    accessor: 'name',
  },
  {
    label: 'Total MAD',
    accessor: 'total',
  },
  {
    label: 'Confirmation status',
    accessor: 'confirmation_status',
  },
  {
    label: 'Payment status',
    accessor: 'payment_status',
  },
  {
    label: 'Shipping status',
    accessor: 'shipping_status',
  },
  {
    label: 'Created on',
    accessor: 'created_at',
  },
];

const data = [
  {
    row: {
      id: '186a534b-f86a-48ff-8b3f-184479c2d790',
      ref: {
        variant: 'link',
        data: {
          href: 'http://seller-area.dotshop.com/admin/orders/186a534b-f86a-48ff-8b3f-184479c2d790/edit',
          label: '001',
        },
      },
      name: 'sdklhf sdljkhf',
      total: '121.00',
      confirmation_status: {
        variant: 'status',
        data: {
          statuses: [
            {
              value: 'open',
              color: '#AC4765FF',
              label: 'open',
            },
            {
              value: 'closed',
              color: '#AC4765FF',
              label: 'closed',
            },
            {
              value: 'processed',
              color: '#AC4765FF',
              label: 'processed',
            },
            {
              value: 'canceled-by-seller',
              color: '#AC4765FF',
              label: 'canceled-by-seller',
            },
          ],
          modelValue: {
            value: 'processed',
            color: '#AC4765FF',
            label: 'processed',
          },
        },
      },
      payment_status: {
        variant: 'status',
        data: {
          statuses: [
            {
              value: 'paid',
              color: '#00C853FF',
              label: 'paid',
            },
            {
              value: 'unpaid',
              color: '#8a9CA0FF',
              label: 'unpaid',
            },
            {
              value: 'captured',
              color: '#8a9CA0FF',
              label: 'captured',
            },
            {
              value: 'refunded',
              color: '#00C853FF',
              label: 'refunded',
            },
            {
              value: 'pending',
              color: '#F5A623FF',
              label: 'pending',
            },
          ],
          modelValue: {
            value: 'refunded',
            color: '#00C853FF',
            label: 'refunded',
          },
        },
      },
      shipping_status: {
        variant: 'status',
        data: {
          statuses: [
            {
              value: 'fulfilled',
              color: '#FFAB00FF',
              label: 'fulfilled',
            },
            {
              value: 'unfulfilled',
              color: '#8A9CA0FF',
              label: 'unfulfilled',
            },
            {
              value: 'canceled',
              color: '#03A9F4FF',
              label: 'canceled',
            },
            {
              value: 'shipped',
              color: '#115E59FF',
              label: 'shipped',
            },
            {
              value: 'processing',
              color: '#C2410CFF',
              label: 'processing',
            },
          ],
          modelValue: {
            value: 'unfulfilled',
            color: '#8A9CA0FF',
            label: 'unfulfilled',
          },
        },
      },
      created_at: '3/2/2023 17:38',
    },
  },
  {
    row: {
      id: '856337ca-a949-11ed-955e-0242ac120003',
      ref: {
        variant: 'link',
        data: {
          href: 'http://seller-area.dotshop.com/admin/orders/856337ca-a949-11ed-955e-0242ac120003/edit',
          label: '001',
        },
      },
      name: 'sdklhf sdljkhf',
      total: '121.00',
      confirmation_status: {
        variant: 'status',
        data: {
          statuses: [
            {
              value: 'open',
              color: '#AC4765FF',
              label: 'open',
            },
            {
              value: 'closed',
              color: '#AC4765FF',
              label: 'closed',
            },
            {
              value: 'processed',
              color: '#AC4765FF',
              label: 'processed',
            },
            {
              value: 'canceled-by-seller',
              color: '#AC4765FF',
              label: 'canceled-by-seller',
            },
          ],
          modelValue: {
            value: 'open',
            color: '#AC4765FF',
            label: 'open',
          },
        },
      },
      payment_status: {
        variant: 'status',
        data: {
          statuses: [
            {
              value: 'paid',
              color: '#00C853FF',
              label: 'paid',
            },
            {
              value: 'unpaid',
              color: '#8a9CA0FF',
              label: 'unpaid',
            },
            {
              value: 'captured',
              color: '#8a9CA0FF',
              label: 'captured',
            },
            {
              value: 'refunded',
              color: '#00C853FF',
              label: 'refunded',
            },
            {
              value: 'pending',
              color: '#F5A623FF',
              label: 'pending',
            },
          ],
          modelValue: {
            value: 'refunded',
            color: '#00C853FF',
            label: 'refunded',
          },
        },
      },
      shipping_status: {
        variant: 'status',
        data: {
          statuses: [
            {
              value: 'fulfilled',
              color: '#FFAB00FF',
              label: 'fulfilled',
            },
            {
              value: 'unfulfilled',
              color: '#8A9CA0FF',
              label: 'unfulfilled',
            },
            {
              value: 'canceled',
              color: '#03A9F4FF',
              label: 'canceled',
            },
            {
              value: 'shipped',
              color: '#115E59FF',
              label: 'shipped',
            },
            {
              value: 'processing',
              color: '#C2410CFF',
              label: 'processing',
            },
          ],
          modelValue: {
            value: 'unfulfilled',
            color: '#8A9CA0FF',
            label: 'unfulfilled',
          },
        },
      },
      created_at: '3/2/2023 17:38',
    },
  },
  {
    row: {
      id: '87f31023-a949-11ed-955e-0242ac120003',
      ref: {
        variant: 'link',
        data: {
          href: 'http://seller-area.dotshop.com/admin/orders/87f31023-a949-11ed-955e-0242ac120003/edit',
          label: '001',
        },
      },
      name: 'sdklhf sdljkhf',
      total: '121.00',
      confirmation_status: {
        variant: 'status',
        data: {
          statuses: [
            {
              value: 'open',
              color: '#AC4765FF',
              label: 'open',
            },
            {
              value: 'closed',
              color: '#AC4765FF',
              label: 'closed',
            },
            {
              value: 'processed',
              color: '#AC4765FF',
              label: 'processed',
            },
            {
              value: 'canceled-by-seller',
              color: '#AC4765FF',
              label: 'canceled-by-seller',
            },
          ],
          modelValue: {
            value: 'open',
            color: '#AC4765FF',
            label: 'open',
          },
        },
      },
      payment_status: {
        variant: 'status',
        data: {
          statuses: [
            {
              value: 'paid',
              color: '#00C853FF',
              label: 'paid',
            },
            {
              value: 'unpaid',
              color: '#8a9CA0FF',
              label: 'unpaid',
            },
            {
              value: 'captured',
              color: '#8a9CA0FF',
              label: 'captured',
            },
            {
              value: 'refunded',
              color: '#00C853FF',
              label: 'refunded',
            },
            {
              value: 'pending',
              color: '#F5A623FF',
              label: 'pending',
            },
          ],
          modelValue: {
            value: 'refunded',
            color: '#00C853FF',
            label: 'refunded',
          },
        },
      },
      shipping_status: {
        variant: 'status',
        data: {
          statuses: [
            {
              value: 'fulfilled',
              color: '#FFAB00FF',
              label: 'fulfilled',
            },
            {
              value: 'unfulfilled',
              color: '#8A9CA0FF',
              label: 'unfulfilled',
            },
            {
              value: 'canceled',
              color: '#03A9F4FF',
              label: 'canceled',
            },
            {
              value: 'shipped',
              color: '#115E59FF',
              label: 'shipped',
            },
            {
              value: 'processing',
              color: '#C2410CFF',
              label: 'processing',
            },
          ],
          modelValue: {
            value: 'unfulfilled',
            color: '#8A9CA0FF',
            label: 'unfulfilled',
          },
        },
      },
      created_at: '3/2/2023 17:38',
    },
  },
  {
    row: {
      id: '8af23741-a949-11ed-955e-0242ac120003',
      ref: {
        variant: 'link',
        data: {
          href: 'http://seller-area.dotshop.com/admin/orders/8af23741-a949-11ed-955e-0242ac120003/edit',
          label: '001',
        },
      },
      name: 'sdklhf sdljkhf',
      total: '121.00',
      confirmation_status: {
        variant: 'status',
        data: {
          statuses: [
            {
              value: 'open',
              color: '#AC4765FF',
              label: 'open',
            },
            {
              value: 'closed',
              color: '#AC4765FF',
              label: 'closed',
            },
            {
              value: 'processed',
              color: '#AC4765FF',
              label: 'processed',
            },
            {
              value: 'canceled-by-seller',
              color: '#AC4765FF',
              label: 'canceled-by-seller',
            },
          ],
          modelValue: {
            value: 'open',
            color: '#AC4765FF',
            label: 'open',
          },
        },
      },
      payment_status: {
        variant: 'status',
        data: {
          statuses: [
            {
              value: 'paid',
              color: '#00C853FF',
              label: 'paid',
            },
            {
              value: 'unpaid',
              color: '#8a9CA0FF',
              label: 'unpaid',
            },
            {
              value: 'captured',
              color: '#8a9CA0FF',
              label: 'captured',
            },
            {
              value: 'refunded',
              color: '#00C853FF',
              label: 'refunded',
            },
            {
              value: 'pending',
              color: '#F5A623FF',
              label: 'pending',
            },
          ],
          modelValue: {
            value: 'refunded',
            color: '#00C853FF',
            label: 'refunded',
          },
        },
      },
      shipping_status: {
        variant: 'status',
        data: {
          statuses: [
            {
              value: 'fulfilled',
              color: '#FFAB00FF',
              label: 'fulfilled',
            },
            {
              value: 'unfulfilled',
              color: '#8A9CA0FF',
              label: 'unfulfilled',
            },
            {
              value: 'canceled',
              color: '#03A9F4FF',
              label: 'canceled',
            },
            {
              value: 'shipped',
              color: '#115E59FF',
              label: 'shipped',
            },
            {
              value: 'processing',
              color: '#C2410CFF',
              label: 'processing',
            },
          ],
          modelValue: {
            value: 'unfulfilled',
            color: '#8A9CA0FF',
            label: 'unfulfilled',
          },
        },
      },
      created_at: '3/2/2023 17:38',
    },
  },
  {
    row: {
      id: '8b078292-a949-11ed-955e-0242ac120003',
      ref: {
        variant: 'link',
        data: {
          href: 'http://seller-area.dotshop.com/admin/orders/8b078292-a949-11ed-955e-0242ac120003/edit',
          label: '001',
        },
      },
      name: 'sdklhf sdljkhf',
      total: '121.00',
      confirmation_status: {
        variant: 'status',
        data: {
          statuses: [
            {
              value: 'open',
              color: '#AC4765FF',
              label: 'open',
            },
            {
              value: 'closed',
              color: '#AC4765FF',
              label: 'closed',
            },
            {
              value: 'processed',
              color: '#AC4765FF',
              label: 'processed',
            },
            {
              value: 'canceled-by-seller',
              color: '#AC4765FF',
              label: 'canceled-by-seller',
            },
          ],
          modelValue: {
            value: 'open',
            color: '#AC4765FF',
            label: 'open',
          },
        },
      },
      payment_status: {
        variant: 'status',
        data: {
          statuses: [
            {
              value: 'paid',
              color: '#00C853FF',
              label: 'paid',
            },
            {
              value: 'unpaid',
              color: '#8a9CA0FF',
              label: 'unpaid',
            },
            {
              value: 'captured',
              color: '#8a9CA0FF',
              label: 'captured',
            },
            {
              value: 'refunded',
              color: '#00C853FF',
              label: 'refunded',
            },
            {
              value: 'pending',
              color: '#F5A623FF',
              label: 'pending',
            },
          ],
          modelValue: {
            value: 'refunded',
            color: '#00C853FF',
            label: 'refunded',
          },
        },
      },
      shipping_status: {
        variant: 'status',
        data: {
          statuses: [
            {
              value: 'fulfilled',
              color: '#FFAB00FF',
              label: 'fulfilled',
            },
            {
              value: 'unfulfilled',
              color: '#8A9CA0FF',
              label: 'unfulfilled',
            },
            {
              value: 'canceled',
              color: '#03A9F4FF',
              label: 'canceled',
            },
            {
              value: 'shipped',
              color: '#115E59FF',
              label: 'shipped',
            },
            {
              value: 'processing',
              color: '#C2410CFF',
              label: 'processing',
            },
          ],
          modelValue: {
            value: 'unfulfilled',
            color: '#8A9CA0FF',
            label: 'unfulfilled',
          },
        },
      },
      created_at: '3/2/2023 17:38',
    },
  },
  {
    row: {
      id: '8b1e6a78-a949-11ed-955e-0242ac120003',
      ref: {
        variant: 'link',
        data: {
          href: 'http://seller-area.dotshop.com/admin/orders/8b1e6a78-a949-11ed-955e-0242ac120003/edit',
          label: '001',
        },
      },
      name: 'sdklhf sdljkhf',
      total: '121.00',
      confirmation_status: {
        variant: 'status',
        data: {
          statuses: [
            {
              value: 'open',
              color: '#AC4765FF',
              label: 'open',
            },
            {
              value: 'closed',
              color: '#AC4765FF',
              label: 'closed',
            },
            {
              value: 'processed',
              color: '#AC4765FF',
              label: 'processed',
            },
            {
              value: 'canceled-by-seller',
              color: '#AC4765FF',
              label: 'canceled-by-seller',
            },
          ],
          modelValue: {
            value: 'open',
            color: '#AC4765FF',
            label: 'open',
          },
        },
      },
      payment_status: {
        variant: 'status',
        data: {
          statuses: [
            {
              value: 'paid',
              color: '#00C853FF',
              label: 'paid',
            },
            {
              value: 'unpaid',
              color: '#8a9CA0FF',
              label: 'unpaid',
            },
            {
              value: 'captured',
              color: '#8a9CA0FF',
              label: 'captured',
            },
            {
              value: 'refunded',
              color: '#00C853FF',
              label: 'refunded',
            },
            {
              value: 'pending',
              color: '#F5A623FF',
              label: 'pending',
            },
          ],
          modelValue: {
            value: 'refunded',
            color: '#00C853FF',
            label: 'refunded',
          },
        },
      },
      shipping_status: {
        variant: 'status',
        data: {
          statuses: [
            {
              value: 'fulfilled',
              color: '#FFAB00FF',
              label: 'fulfilled',
            },
            {
              value: 'unfulfilled',
              color: '#8A9CA0FF',
              label: 'unfulfilled',
            },
            {
              value: 'canceled',
              color: '#03A9F4FF',
              label: 'canceled',
            },
            {
              value: 'shipped',
              color: '#115E59FF',
              label: 'shipped',
            },
            {
              value: 'processing',
              color: '#C2410CFF',
              label: 'processing',
            },
          ],
          modelValue: {
            value: 'unfulfilled',
            color: '#8A9CA0FF',
            label: 'unfulfilled',
          },
        },
      },
      created_at: '3/2/2023 17:38',
    },
  },
  {
    row: {
      id: '8b3255ca-a949-11ed-955e-0242ac120003',
      ref: {
        variant: 'link',
        data: {
          href: 'http://seller-area.dotshop.com/admin/orders/8b3255ca-a949-11ed-955e-0242ac120003/edit',
          label: '001',
        },
      },
      name: 'sdklhf sdljkhf',
      total: '121.00',
      confirmation_status: {
        variant: 'status',
        data: {
          statuses: [
            {
              value: 'open',
              color: '#AC4765FF',
              label: 'open',
            },
            {
              value: 'closed',
              color: '#AC4765FF',
              label: 'closed',
            },
            {
              value: 'processed',
              color: '#AC4765FF',
              label: 'processed',
            },
            {
              value: 'canceled-by-seller',
              color: '#AC4765FF',
              label: 'canceled-by-seller',
            },
          ],
          modelValue: {
            value: 'open',
            color: '#AC4765FF',
            label: 'open',
          },
        },
      },
      payment_status: {
        variant: 'status',
        data: {
          statuses: [
            {
              value: 'paid',
              color: '#00C853FF',
              label: 'paid',
            },
            {
              value: 'unpaid',
              color: '#8a9CA0FF',
              label: 'unpaid',
            },
            {
              value: 'captured',
              color: '#8a9CA0FF',
              label: 'captured',
            },
            {
              value: 'refunded',
              color: '#00C853FF',
              label: 'refunded',
            },
            {
              value: 'pending',
              color: '#F5A623FF',
              label: 'pending',
            },
          ],
          modelValue: {
            value: 'refunded',
            color: '#00C853FF',
            label: 'refunded',
          },
        },
      },
      shipping_status: {
        variant: 'status',
        data: {
          statuses: [
            {
              value: 'fulfilled',
              color: '#FFAB00FF',
              label: 'fulfilled',
            },
            {
              value: 'unfulfilled',
              color: '#8A9CA0FF',
              label: 'unfulfilled',
            },
            {
              value: 'canceled',
              color: '#03A9F4FF',
              label: 'canceled',
            },
            {
              value: 'shipped',
              color: '#115E59FF',
              label: 'shipped',
            },
            {
              value: 'processing',
              color: '#C2410CFF',
              label: 'processing',
            },
          ],
          modelValue: {
            value: 'unfulfilled',
            color: '#8A9CA0FF',
            label: 'unfulfilled',
          },
        },
      },
      created_at: '3/2/2023 17:38',
    },
  },
  {
    row: {
      id: '8b4c29af-a949-11ed-955e-0242ac120003',
      ref: {
        variant: 'link',
        data: {
          href: 'http://seller-area.dotshop.com/admin/orders/8b4c29af-a949-11ed-955e-0242ac120003/edit',
          label: '001',
        },
      },
      name: 'sdklhf sdljkhf',
      total: '121.00',
      confirmation_status: {
        variant: 'status',
        data: {
          statuses: [
            {
              value: 'open',
              color: '#AC4765FF',
              label: 'open',
            },
            {
              value: 'closed',
              color: '#AC4765FF',
              label: 'closed',
            },
            {
              value: 'processed',
              color: '#AC4765FF',
              label: 'processed',
            },
            {
              value: 'canceled-by-seller',
              color: '#AC4765FF',
              label: 'canceled-by-seller',
            },
          ],
          modelValue: {
            value: 'open',
            color: '#AC4765FF',
            label: 'open',
          },
        },
      },
      payment_status: {
        variant: 'status',
        data: {
          statuses: [
            {
              value: 'paid',
              color: '#00C853FF',
              label: 'paid',
            },
            {
              value: 'unpaid',
              color: '#8a9CA0FF',
              label: 'unpaid',
            },
            {
              value: 'captured',
              color: '#8a9CA0FF',
              label: 'captured',
            },
            {
              value: 'refunded',
              color: '#00C853FF',
              label: 'refunded',
            },
            {
              value: 'pending',
              color: '#F5A623FF',
              label: 'pending',
            },
          ],
          modelValue: {
            value: 'refunded',
            color: '#00C853FF',
            label: 'refunded',
          },
        },
      },
      shipping_status: {
        variant: 'status',
        data: {
          statuses: [
            {
              value: 'fulfilled',
              color: '#FFAB00FF',
              label: 'fulfilled',
            },
            {
              value: 'unfulfilled',
              color: '#8A9CA0FF',
              label: 'unfulfilled',
            },
            {
              value: 'canceled',
              color: '#03A9F4FF',
              label: 'canceled',
            },
            {
              value: 'shipped',
              color: '#115E59FF',
              label: 'shipped',
            },
            {
              value: 'processing',
              color: '#C2410CFF',
              label: 'processing',
            },
          ],
          modelValue: {
            value: 'unfulfilled',
            color: '#8A9CA0FF',
            label: 'unfulfilled',
          },
        },
      },
      created_at: '3/2/2023 17:38',
    },
  },
];

const selectedRows = ref([]);
</script>

<template>
  <div>
    <!-- <RichText v-model="content" :upload-image-handler="uploadImage" />
    <h1>Output</h1>
    <div v-html="content" /> -->
    <button @click="selectedRows = []">Clear</button>
    <Table v-model:selected-rows="selectedRows" :columns="columns" v-model:data="data" :selectable="true" :actions="actions" />
  </div>
</template>
