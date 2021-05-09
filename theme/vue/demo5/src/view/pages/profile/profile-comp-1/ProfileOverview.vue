<template>
  <div>
    <div class="row">
      <div class="col-lg-6">
        <KTWidget2></KTWidget2>
      </div>
      <div class="col-lg-6">
        <KTWidget14></KTWidget14>
      </div>
    </div>
    <div class="card card-custom gutter-b">
      <KTWidget3></KTWidget3>
    </div>
  </div>
</template>

<script>
import KTWidget2 from "@/view/pages/profile/profile-comp-1/Widget2";
import KTWidget3 from "@/view/pages/profile/profile-comp-1/Widget3";
import KTWidget14 from "@/view/pages/profile/profile-comp-1/Widget14";

export default {
  name: "ProfileOverview",
  components: {
    KTWidget2,
    KTWidget3,
    KTWidget14
  }
};
</script>
