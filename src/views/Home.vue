<template>
  <b-container class="mt-5">
    <b-row class="justify-content-md-center">
      <b-col :md="6">
        <search-wrapper></search-wrapper>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import SearchWrapper from "@/components/SearchWrapper";
export default {
  name: "Home",
  components: {
    SearchWrapper
  }
};
</script>
