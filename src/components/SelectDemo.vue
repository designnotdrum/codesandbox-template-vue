<template>
  <div class="select-root">
    <button class="select-trigger" @click="toggleOpen">
      <span v-if="selectedValue">{{ selectedValue }}</span>
      <span v-else>Select a fruit…</span>
      <PxChevronDown v-if="!isOpen" />
      <PxChevronUp v-if="isOpen" />
    </button>

    <div v-if="isOpen" class="select-content">
      <button class="select-scroll-button">
        <PxChevronUp />
      </button>

      <div class="select-viewport">
        <div v-for="group in options" :key="group.label" class="select-group">
          <span class="select-label">{{ group.label }}</span>
          <div
            v-for="item in group.items"
            :key="item.value"
            :class="[
              'select-item',
              item.disabled ? 'select-item-disabled' : '',
            ]"
            @click="selectItem(item.value, item.disabled)"
          >
            <span>{{ item.name }}</span>
            <PxCheck v-if="item.value === selectedValue" />
          </div>
        </div>

        <div class="select-separator" />
      </div>

      <button class="select-scroll-button">
        <PxChevronDown />
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { PxChevronUp, PxChevronDown, PxCheck } from "oh-vue-icons/icons";
import "./styles.css";

export default {
  name: "SelectDemo",
  components: {
    PxChevronDown,
    PxChevronUp,
    PxCheck,
  },
  setup() {
    const isOpen = ref(false);
    const selectedValue = ref(null);

    const options = [
      {
        label: "Fruits",
        items: [
          { name: "Apple", value: "apple" },
          { name: "Banana", value: "banana" },
          { name: "Blueberry", value: "blueberry" },
          { name: "Grapes", value: "grapes" },
          { name: "Pineapple", value: "pineapple" },
        ],
      },
      {
        label: "Vegetables",
        items: [
          { name: "Aubergine", value: "aubergine" },
          { name: "Broccoli", value: "broccoli" },
          { name: "Carrot", value: "carrot", disabled: true },
          { name: "Courgette", value: "courgette" },
          { name: "Leek", value: "leek" },
        ],
      },
      {
        label: "Meat",
        items: [
          { name: "Beef", value: "beef" },
          { name: "Chicken", value: "chicken" },
          { name: "Lamb", value: "lamb" },
          { name: "Pork", value: "pork" },
        ],
      },
    ];

    const selectItem = (value, disabled) => {
      if (!disabled) {
        selectedValue.value = value;
        isOpen.value = false;
      }
    };

    const toggleOpen = () => {
      isOpen.value = !isOpen.value;
    };

    return {
      isOpen,
      selectedValue,
      options,
      selectItem,
      toggleOpen,
    };
  },
};
</script>
