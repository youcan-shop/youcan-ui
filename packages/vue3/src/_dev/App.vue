<script setup lang="ts">
import { ref } from 'vue';
import '~/assets/main.css';
import { Dropdown, DropdownPrefix, Input, InputGroup, Percentage, SecondaryButton, SettingsNav, SettingsNavItem, Sidebar, SidebarItem, SidebarSubitem, Tab, TabsBar, TertiaryButton } from '~/components';
import Topbar from '~/components/Topbar/Topbar.vue';
import type { DropdownItemArray, DropdownItemGroups } from '~/components/Dropdown/types';

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
          <Dropdown v-model="languagemodel" :size="44" :items="languages" icon="i-youcan-language" placeholder="Language" />

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
