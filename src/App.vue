<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
       
     

        <v-main>
      
        
          <!-- <img src="https://www.biomin.net/fileadmin/_processed_/1/4/csm_IMG_Piglets_1010_32_1920x1080px_325914e293.jpg" alt=""> -->
          <img src="./rebel.jpg"alt="rebel.inc">
          
        <button class ="d-flex align-center">플레이</button>
        <button class ="d-flex align-center">튜토리얼</button> 
        <button class ="d-flex align-center">진행도</button>

        

      </div>

     

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    items:[
      {title: 'Typography', icon:'mid-image', to:'/Typography'},
      {title: 'Breakpoint', icon: 'mid-image', to:'/Breakpoint' }



    ],
    //
  }),
};
</script>
