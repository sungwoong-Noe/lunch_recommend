<script setup lang="ts">
import '@toast-ui/editor/dist/toastui-editor.css'
import Editor from '@toast-ui/editor';
import {onMounted, type PropType, type Ref, ref} from "vue";
import {EditorOptions} from "@toast-ui/editor/types/editor";
import type {ToolbarItemOptions} from "@toast-ui/editor/types/ui";


const toolbarItems: string[][] =  [
  ['heading', 'bold', 'italic', 'strike'],
  ['hr', 'quote'],
  ['ul', 'ol', 'task', 'indent', 'outdent'],
  ['table', 'image', 'link'],
  ['code', 'codeblock'],
]

const props = defineProps({
  height: {
    type: String,
    default: '1000px',
    required: false,
  },
  toolbar: {
    type: Array as PropType<string[][]>,
    default: [
      ['heading', 'bold', 'italic', 'strike'],
      ['hr', 'quote'],
      ['ul', 'ol', 'task', 'indent', 'outdent'],
      ['table', 'image', 'link'],
      ['code', 'codeblock'],
    ],
    required: false,
  }
});


let editor: Editor;
const editorDiv = ref<HTMLElement>();

onMounted(() => {
  if (editorDiv.value) {

    const editorOption: EditorOptions = {
      el: editorDiv.value,
      toolbarItems: props.toolbar,
      height: props.height,

    }

    editor = new Editor(editorOption);

  }
})

</script>

<template>
  <div ref="editorDiv"></div>
</template>

<style scoped>
</style>