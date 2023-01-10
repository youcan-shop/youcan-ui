<script setup lang="ts">
import { ref } from 'vue';
import '~/assets/main.css';
import { Dropdown, DropdownPrefix, Input, InputGroup, Percentage, SearchInput, SecondaryButton, SettingsNav, SettingsNavItem, Sidebar, SidebarItem, SidebarSubitem, Tab, TabsBar, TertiaryButton } from '~/components';
import Topbar from '~/components/Topbar/Topbar.vue';
import type { DropdownItemArray, DropdownItemGroups } from '~/components/Dropdown/types';
import type { QueryResult } from '~/components/Search/types';

const items = {
  One: [
    {
      value: 1,
      image:
        'https://wp.clutchpoints.com/wp-content/uploads/2021/07/There_s-an-entire-JRPG-on-Google_s-banner-to-celebrate-Tokyo-2020.jpg',
      label: 'Monkey island',
    },
    {
      value: 2,
      image:
        'https://wp.clutchpoints.com/wp-content/uploads/2021/07/There_s-an-entire-JRPG-on-Google_s-banner-to-celebrate-Tokyo-2020.jpg',
      label: 'Monkey island 2',
    },
    {
      value: 3,
      image:
        'https://wp.clutchpoints.com/wp-content/uploads/2021/07/There_s-an-entire-JRPG-on-Google_s-banner-to-celebrate-Tokyo-2020.jpg',
      label: 'Monkey island 3',
    },
  ],
  Two: [
    {
      value: 4,
      image:
        'https://wp.clutchpoints.com/wp-content/uploads/2021/07/There_s-an-entire-JRPG-on-Google_s-banner-to-celebrate-Tokyo-2020.jpg',
      label: 'Monkey island 4',
    },
    {
      value: 5,
      image:
        'https://wp.clutchpoints.com/wp-content/uploads/2021/07/There_s-an-entire-JRPG-on-Google_s-banner-to-celebrate-Tokyo-2020.jpg',
      label: 'Monkey island 5',
    },
  ],
} as DropdownItemGroups;

const model = ref({ main: '', prefix: null });

const languagemodel = ref();
const languages = [
  { label: 'French', value: 'fr' },
  { label: 'Arabic', value: 'fr' },
  { label: 'English', value: 'ar' },
] as DropdownItemArray;

const queryhandler = async (query: string): Promise<QueryResult[]> => {
  await new Promise(resolve => setTimeout(resolve, 1000));

  const items: QueryResult[] = [
    {
      label: 'One',
      thumbnail: 'https://wp.clutchpoints.com/wp-content/uploads/2021/07/There_s-an-entire-JRPG-on-Google_s-banner-to-celebrate-Tokyo-2020.jpg',
      description: 'Something idk',
      value: 1,
      suffix: { type: 'rating', ceil: 5, score: 3 },
    },
    { label: 'Two', value: 2, suffix: { type: 'rating', ceil: 5, score: 5 } },
    { label: 'Three', value: 3, suffix: { type: 'rating', ceil: 5, score: 1 } },
  ];

  return items.filter(i => i.label.toLowerCase().includes(query.toLowerCase()));
};
</script>

<template>
  <main>
    <Sidebar>
      <template #header>
        Store
      </template>
      <template #items>
        <SidebarItem label="Dashboard" icon="i-youcan-account" :active="true" />
        <SidebarItem label="Store" icon="i-youcan-account" :active="false">
          <SidebarSubitem label="Number one" />
          <SidebarSubitem label="Number two" :active="true" />
          <SidebarSubitem label="Number three" />
        </SidebarItem>
      </template>

      <template #lower-items>
        <SidebarItem label="Settings" icon="i-youcan-account" />
      </template>
    </Sidebar>

    <div class="inner">
      <Topbar>
        <template #start>
          <div>
            Hii
          </div>

          <div>
            Nae
          </div>
        </template>

        <template #end>
          <Dropdown
            v-model="languagemodel" :size="44" :items="languages" icon="i-youcan-language"
            placeholder="Language"
          />

          <SecondaryButton size="md" icon-position="only">
            <template #icon>
              <i i-youcan-account />
            </template>
          </SecondaryButton>

          <TertiaryButton size="md">
            Hi
          </TertiaryButton>
        </template>
      </Topbar>

      <div style="padding: 16px;">
        <SearchInput :query-handler="queryhandler" placeholder="Search.." :thumbnails="true" />
      </div>

      <div>
        <InputGroup style="max-width: 500px">
          <template #input>
            <Input v-model="model.main" type="text" placeholder="Translate text..">
              <template #icon>
                <i i-youcan-language />
              </template>

              <template #suffix>
                <Percentage type="info" :percentage="(model.main.length / 32) * 100" />
              </template>

              <template #prefix>
                <DropdownPrefix v-model="model.prefix" icon="i-youcan-language" placeholder="Language" :items="items" />
              </template>
            </Input>
          </template>

          <template #label>
            Language picker
          </template>

          <template #info>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, qui?
          </template>
        </InputGroup>
      </div>

      <div>
        <TabsBar>
          <Tab label="General" />
          <Tab label="Privacy" :active="true" />
          <Tab label="Errors" :error-count="3" />
          <Tab label="Disabled" :disabled="true" />
        </TabsBar>
      </div>

      <div>
        <ActionBar>
          <SecondaryButton size="md">
            Hii
          </SecondaryButton>
        </ActionBar>
      </div>

      <div class="settings">
        <SettingsNav>
          <template #header>
            Settings
          </template>

          <template #items>
            <SettingsNavItem icon="i-youcan-settings-branding" label="Branding" />
            <SettingsNavItem :active="true" icon="i-youcan-settings-home-page" label="Homepage" />
          </template>
        </SettingsNav>
      </div>
    </div>
  </main>
</template>

<style>
main {
  margin: 0;
  padding: 0;
  display: flex;
}

.inner {
  width: 100%;
}
</style>
