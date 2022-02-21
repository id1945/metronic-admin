<template>
  <div class="card">
    <!--begin::Card Body-->
    <div class="card-body p-10 p-lg-15">
      <!--begin::Section-->
      <div class="py-5">
        <!--begin::Heading-->
        <h1 class="anchor fw-bolder mb-5" id="overview">
          <a href="#overview"></a>
          Overview
        </h1>
        <!--end::Heading-->

        <!--begin::Block-->
        <div class="pt-4">
          Fullcalendar is one of the most popular Javascript Calendar. It's
          powerful and lightweight and suitable for just about anything. For
          more info see the
          <a href="https://fullcalendar.io/docs">official site</a> and the
          <a href="https://github.com/fullcalendar/fullcalendar-vue/tree/vue3"
            >Github repository</a
          >.
        </div>
        <!--end::Block-->
      </div>
      <!--end::Section-->
      <!--begin::Section-->
      <div class="pt-20">
        <!--begin::Heading-->
        <h1 class="anchor fw-bolder mb-5" id="basic_example">
          <a href="#basic_example"></a>
          Basic Example
        </h1>
        <!--end::Heading-->

        <!--begin::Block-->
        <div class="pt-4">
          Here's how a basic Fullcalendar will looks like with data populated.
        </div>
        <!--end::Block-->

        <div class="mt-10">
          <FullCalendar
            class="demo-app-calendar"
            :options="calendarOptions"
          ></FullCalendar>

          <CodeHighlighter :fieldHeight="400" lang="javascript"
            >{{`<FullCalendar
              class="demo-app-calendar"
              :options="calendarOptions"
            ></FullCalendar>

            <script lang="ts">
              import { defineComponent } from "vue";
              import FullCalendar, {
                CalendarOptions,
                EventApi,
              } from "@fullcalendar/vue3";
              import dayGridPlugin from "@fullcalendar/daygrid";
              import timeGridPlugin from "@fullcalendar/timegrid";
              import listPlugin from "@fullcalendar/list";
              import moment from "moment";
              export default defineComponent({
                components: {
                  FullCalendar,
                },
                data() {
                  const todayDate = moment().startOf("day");
                  const YM = todayDate.format("YYYY-MM");
                  const YESTERDAY = todayDate
                    .clone()
                    .subtract(1, "day")
                    .format("YYYY-MM-DD");
                  const TODAY = todayDate.format("YYYY-MM-DD");
                  const TOMORROW = todayDate
                    .clone()
                    .add(1, "day")
                    .format("YYYY-MM-DD");
                  return {
                    calendarOptions: {
                      plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
                      headerToolbar: {
                        left: "prev,next today",
                        center: "title",
                        right:
                          "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                      },

                      height: 800,
                      contentHeight: 780,
                      aspectRatio: 3, // see: https://fullcalendar.io/docs/aspectRatio

                      nowIndicator: true,
                      now: TODAY + "T09:25:00", // just for demo

                      views: {
                        dayGridMonth: { buttonText: "month" },
                        timeGridWeek: { buttonText: "week" },
                        timeGridDay: { buttonText: "day" },
                      },

                      initialView: "dayGridMonth",
                      initialDate: TODAY,

                      editable: true,
                      dayMaxEvents: true, // allow "more" link when too many events
                      navLinks: true,
                      events: [
                        {
                          title: "All Day Event",
                          start: YM + "-01",
                          description:
                            "Toto lorem ipsum dolor sit incid idunt ut",
                          className: "fc-event-danger fc-event-solid-warning",
                        },
                        {
                          title: "Reporting",
                          start: YM + "-14T13:30:00",
                          description:
                            "Lorem ipsum dolor incid idunt ut labore",
                          end: YM + "-14",
                          className: "fc-event-success",
                        },
                        {
                          title: "Company Trip",
                          start: YM + "-02",
                          description: "Lorem ipsum dolor sit tempor incid",
                          end: YM + "-03",
                          className: "fc-event-primary",
                        },
                        {
                          title: "ICT Expo 2017 - Product Release",
                          start: YM + "-03",
                          description: "Lorem ipsum dolor sit tempor inci",
                          end: YM + "-05",
                          className: "fc-event-light fc-event-solid-primary",
                        },
                        {
                          title: "Dinner",
                          start: YM + "-12",
                          description:
                            "Lorem ipsum dolor sit amet, conse ctetur",
                          end: YM + "-10",
                        },
                        {
                          id: 999,
                          title: "Repeating Event",
                          start: YM + "-09T16:00:00",
                          description:
                            "Lorem ipsum dolor sit ncididunt ut labore",
                          className: "fc-event-danger",
                        },
                        {
                          id: 1000,
                          title: "Repeating Event",
                          description: "Lorem ipsum dolor sit amet, labore",
                          start: YM + "-16T16:00:00",
                        },
                        {
                          title: "Conference",
                          start: YESTERDAY,
                          end: TOMORROW,
                          description:
                            "Lorem ipsum dolor eius mod tempor labore",
                          className: "fc-event-primary",
                        },
                        {
                          title: "Meeting",
                          start: TODAY + "T10:30:00",
                          end: TODAY + "T12:30:00",
                          description: "Lorem ipsum dolor eiu idunt ut labore",
                        },
                        {
                          title: "Lunch",
                          start: TODAY + "T12:00:00",
                          className: "fc-event-info",
                          description: "Lorem ipsum dolor sit amet, ut labore",
                        },
                        {
                          title: "Meeting",
                          start: TODAY + "T14:30:00",
                          className: "fc-event-warning",
                          description: "Lorem ipsum conse ctetur adipi scing",
                        },
                        {
                          title: "Happy Hour",
                          start: TODAY + "T17:30:00",
                          className: "fc-event-info",
                          description:
                            "Lorem ipsum dolor sit amet, conse ctetur",
                        },
                        {
                          title: "Dinner",
                          start: TOMORROW + "T05:00:00",
                          className: "fc-event-solid-danger fc-event-light",
                          description:
                            "Lorem ipsum dolor sit ctetur adipi scing",
                        },
                        {
                          title: "Birthday Party",
                          start: TOMORROW + "T07:00:00",
                          className: "fc-event-primary",
                          description: "Lorem ipsum dolor sit amet, scing",
                        },
                        {
                          title: "Click for Google",
                          url: "http://google.com/",
                          start: YM + "-28",
                          className: "fc-event-solid-info fc-event-light",
                          description: "Lorem ipsum dolor sit amet, labore",
                        },
                      ],
                    } as CalendarOptions,
                    currentEvents: [] as EventApi[],
                  };
                },
              });
            </script>
            `}}</CodeHighlighter
          >
        </div>
      </div>
      <!--end::Section-->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FullCalendar, { CalendarOptions, EventApi } from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import moment from "moment";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
export default defineComponent({
  components: {
    FullCalendar,
    CodeHighlighter,
  },
  data() {
    const todayDate = moment().startOf("day");
    const YM = todayDate.format("YYYY-MM");
    const YESTERDAY = todayDate.clone().subtract(1, "day").format("YYYY-MM-DD");
    const TODAY = todayDate.format("YYYY-MM-DD");
    const TOMORROW = todayDate.clone().add(1, "day").format("YYYY-MM-DD");
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
        },

        height: 800,
        contentHeight: 780,
        aspectRatio: 3, // see: https://fullcalendar.io/docs/aspectRatio

        nowIndicator: true,
        now: TODAY + "T09:25:00", // just for demo

        views: {
          dayGridMonth: { buttonText: "month" },
          timeGridWeek: { buttonText: "week" },
          timeGridDay: { buttonText: "day" },
        },

        initialView: "dayGridMonth",
        initialDate: TODAY,

        editable: true,
        dayMaxEvents: true, // allow "more" link when too many events
        navLinks: true,
        events: [
          {
            title: "All Day Event",
            start: YM + "-01",
            description: "Toto lorem ipsum dolor sit incid idunt ut",
            className: "fc-event-danger fc-event-solid-warning",
          },
          {
            title: "Reporting",
            start: YM + "-14T13:30:00",
            description: "Lorem ipsum dolor incid idunt ut labore",
            end: YM + "-14",
            className: "fc-event-success",
          },
          {
            title: "Company Trip",
            start: YM + "-02",
            description: "Lorem ipsum dolor sit tempor incid",
            end: YM + "-03",
            className: "fc-event-primary",
          },
          {
            title: "ICT Expo 2017 - Product Release",
            start: YM + "-03",
            description: "Lorem ipsum dolor sit tempor inci",
            end: YM + "-05",
            className: "fc-event-light fc-event-solid-primary",
          },
          {
            title: "Dinner",
            start: YM + "-12",
            description: "Lorem ipsum dolor sit amet, conse ctetur",
            end: YM + "-10",
          },
          {
            id: 999,
            title: "Repeating Event",
            start: YM + "-09T16:00:00",
            description: "Lorem ipsum dolor sit ncididunt ut labore",
            className: "fc-event-danger",
          },
          {
            id: 1000,
            title: "Repeating Event",
            description: "Lorem ipsum dolor sit amet, labore",
            start: YM + "-16T16:00:00",
          },
          {
            title: "Conference",
            start: YESTERDAY,
            end: TOMORROW,
            description: "Lorem ipsum dolor eius mod tempor labore",
            className: "fc-event-primary",
          },
          {
            title: "Meeting",
            start: TODAY + "T10:30:00",
            end: TODAY + "T12:30:00",
            description: "Lorem ipsum dolor eiu idunt ut labore",
          },
          {
            title: "Lunch",
            start: TODAY + "T12:00:00",
            className: "fc-event-info",
            description: "Lorem ipsum dolor sit amet, ut labore",
          },
          {
            title: "Meeting",
            start: TODAY + "T14:30:00",
            className: "fc-event-warning",
            description: "Lorem ipsum conse ctetur adipi scing",
          },
          {
            title: "Happy Hour",
            start: TODAY + "T17:30:00",
            className: "fc-event-info",
            description: "Lorem ipsum dolor sit amet, conse ctetur",
          },
          {
            title: "Dinner",
            start: TOMORROW + "T05:00:00",
            className: "fc-event-solid-danger fc-event-light",
            description: "Lorem ipsum dolor sit ctetur adipi scing",
          },
          {
            title: "Birthday Party",
            start: TOMORROW + "T07:00:00",
            className: "fc-event-primary",
            description: "Lorem ipsum dolor sit amet, scing",
          },
          {
            title: "Click for Google",
            url: "http://google.com/",
            start: YM + "-28",
            className: "fc-event-solid-info fc-event-light",
            description: "Lorem ipsum dolor sit amet, labore",
          },
        ],
      } as CalendarOptions,
      currentEvents: [] as EventApi[],
    };
  },
});
</script>

<style lang="scss">
.fc .fc-button {
  padding: 0.75rem 1.25rem;
  box-shadow: none !important;
  border: 0 !important;
  border-radius: 0.475rem;
  vertical-align: middle;
  font-weight: 500;
  text-transform: capitalize;
}
</style>
