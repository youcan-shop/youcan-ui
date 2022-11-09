<script setup lang="ts">
import Note from '~/components/Note/Note.vue';
</script>

<template>
  <Story>
    <Variant title="Default">
      <Note>
        <template #icon>
          <i class="iconMail i-tabler-mail-opened" />
        </template>
        <template #content>
          <p>Don't forget to check your inbox, we have sent  a link to verify your account.</p>
        </template>
      </Note>
    </Variant>
  </Story>
</template>
