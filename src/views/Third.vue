<template>
  <v-app>
    <v-app-bar
      app
      color="purple"
      green
    >
      <div>
        두번
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
      <v-container>
        

        <v-row>
          <v-col>
            <v-text-field
              label="Main input"
              v-model="pigType"
              @input="showChane"
            ></v-text-field>
          </v-col>
        </v-row>
        
        
        

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
    @click="Home"
  >되돌아가기</v-btn>
   



      </v-container>

      


    </v-main>
  </v-app>
</template>






<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    pigType: '이름을 입력하세요',
  }),

  methods: {
    showChane(change) {
      // console.log('Show me changes ...', change)
      this.plus(change)
      this.minus(2)
    },

    minus(num) {
       console.log('확인해보세요', num )
    },

    plus(num) { 
       console.log('체크해보기', num)
    },



    third()  { 
       this.$router.push('/Home') 
    }
    
   


    }


  }, //methods 
};
</script>