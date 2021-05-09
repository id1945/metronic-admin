<template>
  <div>
    <b-alert
      show
      variant="light"
      class="alert alert-custom alert-white alert-shadow fade show gutter-b"
    >
      <div class="alert-icon">
        <span class="svg-icon svg-icon-lg">
          <inline-svg src="media/svg/icons/Tools/Compass.svg" />
        </span>
      </div>
      <div class="alert-text">
        <b>List group</b> List groups are a flexible and powerful component for
        displaying a series of content. List group items can be modified to
        support just about any content within. They can also be used as
        navigation via various props.
        <a
          class="font-weight-bold"
          href="https://bootstrap-vue.js.org/docs/components/list-group"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'List group'">
          <template v-slot:preview>
            <b-list-group>
              <b-list-group-item>Cras justo odio</b-list-group-item>
              <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
              <b-list-group-item>Morbi leo risus</b-list-group-item>
              <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
              <b-list-group-item>Vestibulum at eros</b-list-group-item>
            </b-list-group>
          </template>
          <template v-slot:html>
            {{ code1.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Active items'">
          <template v-slot:preview>
            <p>
              Set the <code>active</code> prop on a
              <code>&lt;b-list-group-item&gt;</code> to indicate the current
              active selection.
            </p>
            <b-list-group>
              <b-list-group-item>Cras justo odio</b-list-group-item>
              <b-list-group-item active>
                Dapibus ac facilisis in
              </b-list-group-item>
              <b-list-group-item>Morbi leo risus</b-list-group-item>
              <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
              <b-list-group-item>Vestibulum at eros</b-list-group-item>
            </b-list-group>
          </template>
          <template v-slot:html>
            {{ code2.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Disabled items'">
          <template v-slot:preview>
            <p>
              Set the <code>disabled</code> prop on a
              <code>&lt;b-list-group-item&gt;</code> to make it appear disabled
              (also works with actionalable items. see below).
            </p>
            <b-list-group>
              <b-list-group-item disabled>Cras justo odio</b-list-group-item>
              <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
              <b-list-group-item>Morbi leo risus</b-list-group-item>
              <b-list-group-item disabled>
                Porta ac consectetur ac
              </b-list-group-item>
              <b-list-group-item>Vestibulum at eros</b-list-group-item>
            </b-list-group>
          </template>
          <template v-slot:html>
            {{ code3.html }}
          </template>
        </KTCodePreview>
      </div>

      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Actionable list group items'">
          <template v-slot:preview>
            <p>
              Turn a <code>&lt;b-list-group-item&gt;</code> into an actionable
              link (<code>&lt;a href=&quot;...&quot;&gt;</code>) by specifying
              either an <code>href</code> prop or router-link
              <code>to</code> prop.
            </p>
            <b-list-group>
              <b-list-group-item href="#some-link">
                Awesome link
              </b-list-group-item>
              <b-list-group-item href="#" active>
                Link with active state
              </b-list-group-item>
              <b-list-group-item href="#">
                Action links are easy
              </b-list-group-item>
              <b-list-group-item href="#foobar" disabled>
                Disabled link
              </b-list-group-item>
            </b-list-group>
          </template>
          <template v-slot:html>
            {{ code4.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Contextual variants'">
          <template v-slot:preview>
            <p>
              Use contextual variants to style list items with a stateful
              background and color, via the <code>variant</code> prop.
            </p>
            <b-list-group>
              <b-list-group-item href="#">
                Default list group item
              </b-list-group-item>
              <b-list-group-item href="#" variant="primary">
                Primary list group item
              </b-list-group-item>
              <b-list-group-item href="#" variant="secondary">
                Secondary list group item
              </b-list-group-item>
              <b-list-group-item href="#" variant="success">
                Success list group item
              </b-list-group-item>
              <b-list-group-item href="#" variant="danger">
                Danger list group item
              </b-list-group-item>
              <b-list-group-item href="#" variant="warning">
                Warning list group item
              </b-list-group-item>
              <b-list-group-item href="#" variant="info">
                Info list group item
              </b-list-group-item>
              <b-list-group-item href="#" variant="light">
                Light list group item
              </b-list-group-item>
              <b-list-group-item href="#" variant="dark">
                Dark list group item
              </b-list-group-item>
            </b-list-group>
          </template>
          <template v-slot:html>
            {{ code5.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'With badges'">
          <template v-slot:preview>
            <p>
              Add <code>badges</code> to any list group item to show unread
              counts, activity, and more with the help of some
              <a
                href="http://getbootstrap.com/docs/4.0/utilities/flex/"
                target="_blank"
                >utility classes</a
              >.
            </p>
            <b-list-group>
              <b-list-group-item
                class="d-flex justify-content-between align-items-center"
              >
                Cras justo odio
                <b-badge variant="primary" pill>14</b-badge>
              </b-list-group-item>

              <b-list-group-item
                class="d-flex justify-content-between align-items-center"
              >
                Dapibus ac facilisis in
                <b-badge variant="primary" pill>2</b-badge>
              </b-list-group-item>

              <b-list-group-item
                class="d-flex justify-content-between align-items-center"
              >
                Morbi leo risus
                <b-badge variant="primary" pill>1</b-badge>
              </b-list-group-item>
            </b-list-group>
          </template>
          <template v-slot:html>
            {{ code6.html }}
          </template>
        </KTCodePreview>
      </div>
    </div>
  </div>
</template>

<script>
import KTCodePreview from "@/view/content/CodePreview.vue";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";

export default {
  data() {
    return {
      code1: {
        html: `<b-list-group>
  <b-list-group-item>Cras justo odio</b-list-group-item>
  <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
  <b-list-group-item>Morbi leo risus</b-list-group-item>
  <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
  <b-list-group-item>Vestibulum at eros</b-list-group-item>
</b-list-group>`
      },

      code2: {
        html: `<b-list-group>
  <b-list-group-item>Cras justo odio</b-list-group-item>
  <b-list-group-item active>Dapibus ac facilisis in</b-list-group-item>
  <b-list-group-item>Morbi leo risus</b-list-group-item>
  <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
  <b-list-group-item>Vestibulum at eros</b-list-group-item>
</b-list-group>`
      },

      code3: {
        html: `<b-list-group>
  <b-list-group-item disabled>Cras justo odio</b-list-group-item>
  <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
  <b-list-group-item>Morbi leo risus</b-list-group-item>
  <b-list-group-item disabled>Porta ac consectetur ac</b-list-group-item>
  <b-list-group-item>Vestibulum at eros</b-list-group-item>
</b-list-group>`
      },

      code4: {
        html: `<b-list-group>
  <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
  <b-list-group-item href="#" active>Link with active state</b-list-group-item>
  <b-list-group-item href="#">Action links are easy</b-list-group-item>
  <b-list-group-item href="#foobar" disabled>Disabled link</b-list-group-item>
</b-list-group>`
      },

      code5: {
        html: `<b-list-group>
  <b-list-group-item href="#">Default list group item</b-list-group-item>
  <b-list-group-item href="#" variant="primary">Primary list group item</b-list-group-item>
  <b-list-group-item href="#" variant="secondary">Secondary list group item</b-list-group-item>
  <b-list-group-item href="#" variant="success">Success list group item</b-list-group-item>
  <b-list-group-item href="#" variant="danger">Danger list group item</b-list-group-item>
  <b-list-group-item href="#" variant="warning">Warning list group item</b-list-group-item>
  <b-list-group-item href="#" variant="info">Info list group item</b-list-group-item>
  <b-list-group-item href="#" variant="light">Light list group item</b-list-group-item>
  <b-list-group-item href="#" variant="dark">Dark list group item</b-list-group-item>
</b-list-group>`
      },

      code6: {
        html: `<b-list-group>
  <b-list-group-item class="d-flex justify-content-between align-items-center">
    Cras justo odio
    <b-badge variant="primary" pill>14</b-badge>
  </b-list-group-item>

  <b-list-group-item class="d-flex justify-content-between align-items-center">
    Dapibus ac facilisis in
    <b-badge variant="primary" pill>2</b-badge>
  </b-list-group-item>

  <b-list-group-item class="d-flex justify-content-between align-items-center">
    Morbi leo risus
    <b-badge variant="primary" pill>1</b-badge>
  </b-list-group-item>
</b-list-group>`
      }
    };
  },
  components: {
    KTCodePreview
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vue Bootstrap", route: "alert" },
      { title: "List Group" }
    ]);
  }
};
</script>
