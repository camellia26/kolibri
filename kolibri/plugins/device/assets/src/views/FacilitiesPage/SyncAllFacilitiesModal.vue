<template>

  <KModal
    :title="$tr('syncAllFacilityDataHeader')"
    @submit="$emit('submit')"
    @cancel="$emit('cancel')"
  >
    <p>
      {{ $tr('syncExplanation') }}
    </p>
    <p>
      {{ $tr('mustBeConnectedToInternet') }}
    </p>
    <template v-slot:actions>
      <KButton :text="coreString('cancelAction')" @click="$emit('cancel')" />
      <KButton
        :text="coreString('syncAction')"
        :disabled="submitDisabled"
        primary
        type="submit"
      />
      <KTooltip v-if="submitDisabled">
        {{ $tr('currentlyOfflineTooltip') }}
        {{ $tr('noFacilitiesTooltip') }}
      </KTooltip>
    </template>
  </KModal>

</template>


<script>

  import commonCoreStrings from 'kolibri.coreVue.mixins.commonCoreStrings';

  export default {
    name: 'SyncAllFacilitiesModal',
    components: {},
    mixins: [commonCoreStrings],
    props: {},
    data() {
      return {};
    },
    computed: {
      submitDisabled() {
        return false;
      },
    },
    methods: {},
    $trs: {
      syncAllFacilityDataHeader: {
        message: 'Sync all facility data',
        context: 'Title of the modal window',
      },
      syncExplanation: {
        message: 'This will sync all registered facilities on this device to Kolibri Data Portal.',
        context: 'Modal description text',
      },
      mustBeConnectedToInternet: {
        message: 'You must be connected to the internet.',
        context: 'Modal description text',
      },
      currentlyOfflineTooltip: {
        message: 'You are currently offline',
        context: `Floating notification message that appears over the 'Sync' button and indicates why is it not active`,
      },
      noFacilitiesTooltip: {
        message: 'There are no registered facilities on this device',
        context: `Floating notification message that appears over the 'Sync' button and indicates why is it not active`,
      },
    },
  };

</script>


<style lang="scss" scoped></style>
