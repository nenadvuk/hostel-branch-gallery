<template>
  <div id="app">
    <div class="gallery-box">
      <v-app id="inspire">
        <v-layout justify-center>
          <v-flex xs12 sm6>
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
          </v-flex>
        </v-layout>

        <v-layout column>
          <v-flex xs12>
            <v-layout align-space-between justify-space-around fill-height fill-width>
              <v-hover>
                <v-card
                  dark
                  color="deep-purple lighten-2"
                  slot-scope="{ hover }"
                  :class="`elevation-${hover ? 24 : 4}`"
                  class="mx-2"
                  width="400"
                >
                  <v-img :aspect-ratio="16/9" src="/img/branch/smestaj/smestaj19.jpg"></v-img>
                  <v-card-title>
                    <div>
                      <span class="title">Smeštaj</span>
                      <div class="d-flex">
                        <div class="ml-2 grey--text text--darken-2">
                          <v-btn round>
                            <router-link to="/Accommodation">Open</router-link>
                          </v-btn>
                        </div>
                      </div>
                    </div>
                    <v-spacer></v-spacer>
                  </v-card-title>
                </v-card>
              </v-hover>

              <v-hover>
                <v-card
                  dark
                  color="teal lighten-1"
                  slot-scope="{ hover }"
                  :class="`elevation-${hover ? 24 : 4}`"
                  class="mx-2"
                  width="400"
                >
                  <v-img :aspect-ratio="16/9" src="/img/branch/dvoriste/dvoriste1.jpg"></v-img>

                  <v-card-title>
                    <div>
                      <span class="title">Dvorište</span>
                      <div class="d-flex">
                        <div class="ml-2 grey--text text--darken-2">
                          <v-btn round>
                            <router-link to="/Yard">Open</router-link>
                          </v-btn>
                        </div>
                      </div>
                    </div>
                    <v-spacer></v-spacer>
                  </v-card-title>
                </v-card>
              </v-hover>

              <v-hover>
                <v-card
                  dark
                  color="orange accent-1"
                  slot-scope="{ hover }"
                  :class="`elevation-${hover ? 24 : 4}`"
                  class="mx-2"
                  width="400"
                >
                  <v-img :aspect-ratio="16/9" src="/img/meetup-3g/meetup11.jpg"></v-img>
                  <v-card-title>
                    <div>
                      <span class="title">3G MeetUp</span>
                      <div class="d-flex">
                        <div class="ml-2 grey--text text--darken-2">
                          <v-btn round>
                            <router-link to="/MeetUp3G">Open</router-link>
                          </v-btn>
                        </div>
                      </div>
                    </div>
                    <v-spacer></v-spacer>
                  </v-card-title>
                </v-card>
              </v-hover>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-app>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
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
  }
};
</script>

<style>
html {
  scroll-behavior: smooth;
}

.resultContainer {
  height: 350px;
}

.layout {
  background-color: rgba(199, 253, 253, 0.788);
}

.btn {
  text-decoration: none;
}

a {
  text-decoration: none;
}
</style>
