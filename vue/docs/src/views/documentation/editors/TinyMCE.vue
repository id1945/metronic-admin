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
          <strong>TinyMCE</strong> is one of the world's most advanced rich text
          editor. The WYSIWYG editor that is flexible, customizable, and
          designed with the user in mind. TinyMCE can handle any challenge, from
          the most simple implementation through to the most complex use case.
          For more info see the
          <a href="https://www.tiny.cloud/docs/">official site</a> and the
          <a href="https://github.com/tinymce/tinymce-vue">Github repository</a
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
          Here's how a basic TinyMCE editor will look like.
        </div>
        <!--end::Block-->

        <div class="mt-10">
          <Editor
            apiKey="ktu1mpe12zfnohqoq3fm63rfq917q3euky0e3x7ch15q7ql1"
            initialValue="<p>Initial editor content</p>"
            :init="{
              height: 500,
              menubar: false,
              plugins: [
                'advlist autolink lists link image charmap',
                'searchreplace visualblocks code fullscreen',
                'print preview anchor insertdatetime media',
                'paste code help wordcount table',
              ],
              toolbar:
                'undo redo | formatselect | bold italic | \
        alignleft aligncenter alignright | \
        bullist numlist outdent indent | help',
            }"
          >
          </Editor>

          <CodeHighlighter :fieldHeight="400" lang="javascript"
            >{{`<template>
              <editor
                initialValue="<p>Initial editor content</p>"
                :init="{
                  height: 500,
                  menubar: false,
                  plugins: [
                    'advlist autolink lists link image charmap',
                    'searchreplace visualblocks code fullscreen',
                    'print preview anchor insertdatetime media',
                    'paste code help wordcount table',
                  ],
                  toolbar:
                    'undo redo | formatselect | bold italic | \
        alignleft aligncenter alignright | \
        bullist numlist outdent indent | help',
                }"
              >
              </editor>
            </template>
            <script>
              import Editor from "@tinymce/tinymce-vue";

              export default {
                name: "app",
                components: {
                  editor: Editor,
                },
              };
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
import Editor from "@tinymce/tinymce-vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";

export default defineComponent({
  name: "tinymce",
  components: {
    Editor,
    CodeHighlighter,
  },
});
</script>
