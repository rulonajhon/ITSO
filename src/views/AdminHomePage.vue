<template>
  <div>
    <!-- Menu Bar -->
    <div class="menu-bar">
      <div class="menu-item" @click="setStatus('Pending')">Pending</div>
      <div class="menu-item" @click="setStatus('Rejected')">Rejected</div>
      <div class="menu-item" @click="setStatus('Accepted')">Accepted</div>
    </div>

    <!-- Display Content Based on Selected Status -->
    <div class="content">
      <h2>Status: {{ currentStatus }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentStatus: ''
    };
  },
  methods: {
    setStatus(status) {
      this.currentStatus = status;
    }
  }
};
</script>

<style scoped>
/* Basic styling */
.menu-bar {
  display: flex;
  background-color: #333;
  padding: 10px;
  color: white;
}

.menu-item {
  margin-right: 20px;
  cursor: pointer;
}

.menu-item:hover {
  text-decoration: underline;
}

.content {
  margin-top: 20px;
  padding: 20px;
  background-color: #f4f4f4;
}
</style>
