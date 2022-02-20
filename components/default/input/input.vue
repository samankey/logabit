<template>
  <InputLabel :label="label">
    <div class="inputWrap">
      <input class="input" :type="type" :placeholder="placeholder">
    </div>
  </InputLabel>
</template>

<script>
import InputLabel from '@/components/default/input/inputLabel';

export default {
  components: {
    InputLabel
  },

  props: {
    label: {
      type: String,
      default: ''
    },

    type: {
      type: String,
      default: 'text'
    },

    placeholder: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
.inputWrap {
  border-top: 4px solid #001129;

  .input {
    padding: 0.75rem 0;
    width: 100%;
    text-align: center;
  }

  ::placeholder {
    color: rgba(0, 17, 41, 0.2);
  }
}
</style>