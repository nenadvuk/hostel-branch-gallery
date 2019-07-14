<template>
  <div id="app">
    <v-app id="inspire">
      <v-container>
        <v-navigation-drawer temporary v-model="sideNav" absolute dark class="providna">
          <v-list>
            <v-list-tile v-for="item in menuItems" :key="item.title">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>{{ item.title }}</v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>
        <v-toolbar fixed dark class="dark3g">
          <v-toolbar-side-icon @click="sideNav = !sideNav" class="hidden-md-and-up"></v-toolbar-side-icon>
          <v-toolbar-title>
            Gallery
            <span class="font-weight-light">Hostel Branch</span>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat v-for="item in menuItems" :key="item.title">{{ item.title }}</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        
        <section class="img-box">
          <h2>Courtyard</h2> <v-btn round><router-link to="/Gallery">Gallery</router-link></v-btn>
          <Lightbox
            :thumbnails="lightbox.images.thumbnails"
            :largeImages="lightbox.images.large"
            :thumbnailsPath="lightbox.thumbnailsPath"
            :largePath="lightbox.largePath"
            :captions="lightbox.captions"
            class="lightBox"
          />
        </section>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import Lightbox from "@/components/Lightbox.vue";

export default {
  name: "app",
  data() {
    return {
      lightbox: {
        images: {
          thumbnails: [
            "1.jpg",
            "2.jpg",
            "3.jpg",
            "4.jpg",
            "5.jpg",
            "6.jpg",
            "7.jpg",
            "8.jpg",
            "9.jpg",
            "10.jpg",
            "11.jpg",
            "12.jpg",
            "13.jpg",
            "14.jpg",
            "15.jpg",
            "16.jpg",
            "17.jpg",
            "18.jpg",
            "19.jpg",
            "20.jpg"
          ],
          large: [
            "1.jpg",
            "2.jpg",
            "3.jpg",
            "4.jpg",
            "5.jpg",
            "6.jpg",
            "7.jpg",
            "8.jpg",
            "9.jpg",
            "10.jpg",
            "11.jpg",
            "12.jpg",
            "13.jpg",
            "14.jpg",
            "15.jpg",
            "16.jpg",
            "17.jpg",
            "18.jpg",
            "19.jpg",
            "20.jpg"
          ]
        },
        /* captions: ["caption 1", "caption 2", "caption 3"], */
        thumbnailsPath: "/img/branch-sml/dvoriste-sml/dvoriste-sml",
        largePath: "/img/branch/dvoriste/dvoriste"
      },
      sideNav: false,
      menuItems: [
        { icon: "home", title: "Home", link: "" },
        { icon: "room", title: "Rooms", link: "" },
        { icon: "visibility", title: "What to see?", link: "" },
        { icon: "grade", title: "Events", link: "" },
        { icon: "photo_camera", title: "Gallery", link: "" },
        { icon: "contacts", title: "Contact", link: "" }
      ]
    };
  },
  components: {
    Lightbox
  }
};
</script>

<style lang ="scss">
.light-box {
  &__thumbnail {
    margin: 15px;
    width: 200px;
    height: 200px;
  }
}
img {
  max-width: 100%;
  border-radius: 5px;
}

.img-box {
  padding: 40px;
}

a {  
  text-decoration: none;
}
</style>
