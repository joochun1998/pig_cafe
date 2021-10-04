<template>
  <v-app>
    <v-app-bar
      app
      color="red"
      green
    >
      <div>
        돼지의 정석
        <v-img
          alt="pig"
          class="shrink mr-2"
          contain
          src="https://blog.naver.com/PostView.naver?blogId=tiger2260&Redirect=View&logNo=222524507476&categoryNo=45&isAfterWrite=true&isMrblogPost=false&isHappyBeanLeverage=true&contentLength=3017"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.iconscout.com/icon/free/png-512/pig-face-sus-wild-animal-food-33928.png"
          width="100"
        />
      </div>

      <v-spacer>
        <v-banner
  elevation="8" color = "white" 
>어떤 돼지가 되고 싶나요</v-banner>
        
        
       
        </v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text>
        <span class="mr-2"> 살찌는 tip</span>
        <v-icon>mdi-antenna</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>

      <!-- <img src="https://www.biomin.net/fileadmin/_processed_/1/4/csm_IMG_Piglets_1010_32_1920x1080px_325914e293.jpg" alt=""> -->
      <img src="./a-pig.jpg" alt="">
      
      
      
      
    <br><br><br><br><br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     
     <v-btn
  elevation="2"
  large
>근육형 돼지</v-btn>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

 <v-btn
  elevation="2"
  large
>지방형 돼지</v-btn>


    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>

