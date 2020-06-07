<template>
  <div class="form--search">
    <b-form>
      <div class="position-relative">
        <b-form-input
        v-model="text"
        placeholder="نام شهر مورد نظر خود را وارد کنید"
        @keyup="changeHandler"
      ></b-form-input>
      <hotel-items v-if="!!Object.entries(hotelList).length"></hotel-items>
      </div>
    </b-form>
  </div>
</template>

<script>
import HotelItems from "./HotelItems";
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "SearchWrapper",
  computed: {
    ...mapGetters(["hotelList"])
  },
  components: {
    HotelItems
  },
  data() {
    return {
      text: ""
    };
  },
  methods: {
    ...mapMutations(["CHANGE_HOTEL_LIST"]),
    ...mapActions(["getHotel"]),
    changeHandler(e) {
      let data = { text: this.text, type: "fa" };
      if (this.text.length > 2) {
        this.getHotel(data);
      } else {
        if (!!Object.entries(this.hotelList).length) this.CHANGE_HOTEL_LIST({});
      }
    }
  }
};
</script>
