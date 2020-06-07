<template>
  <div class="form--list-wrapper">
    <ul v-if="hotelList.status == 'ok'">
      <li v-for="(item,index) in hotelList.result" :key="index">
        <div v-if="item.type == 'city'" class="form--list-city d-flex flex-column">
          <span class="form--list-name">{{item.name_fa}}</span>
          <span class="form--list-province">{{item.province_fa}}</span>
        </div>
        <div
          v-if="item.type == 'hotel'"
          class="form--list-hotel d-flex align-items-center justify-content-between"
        >
          <div class=" d-flex flex-column">
            <span class="form--list-name">{{item.name_fa}}</span>
            <span class="form--list-cityname">{{item.city_fa}}</span>
          </div>
          <star-rating v-model="item.stars" :rtl="true" read-only :show-rating="false" :star-size="14"></star-rating>
        </div>
      </li>
    </ul>
    <span v-else>آیتمی برای نمایش وجود ندارد</span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import StarRating from "vue-star-rating";
export default {
  name: "HotelItems",
  computed: {
    ...mapGetters(["hotelList"])
  },
  components: {
    StarRating
  }
};
</script>