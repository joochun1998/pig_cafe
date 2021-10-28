<template>
  <v-app>
  
   <v-app-bar
  color="green"
></v-app-bar>
    

      <div>
        Rebel.inc
        <v-img
          alt="pig"
          class="shrink mr-2"
          contain
          src="https://blog.naver.com/PostView.naver?blogId=tiger2260&Redirect=View&logNo=222524507476&categoryNo=45&isAfterWrite=true&isMrblogPost=false&isHappyBeanLeverage=true&contentLength=3017"
          transition="scale-transition"
          width="40"
        />

       
        
      </div>


      <v-btn
        href="https://play.google.com/store/apps/details?id=com.ndemiccreations.rebelinc&hl=en_US&gl=US"
        target="_blank"
        text>
        <span class="mr-2">click to download</span>
        <v-icon>mdi-antenna</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <!-- <img src="https://www.biomin.net/fileadmin/_processed_/1/4/csm_IMG_Piglets_1010_32_1920x1080px_325914e293.jpg" alt=""> -->
          <img src="./rebel.jpg"alt="">
          
          
          </v-container> 

        </v-row>
        

       <!-- <v-row>
         <v-col>
            <v-text-field
              label="Main input"
              v-model="pigType"
              @input="showChane"
            ></v-text-field>
          </v-col>
        </v-row>
        -->
        
      
        
  
      <v-btn
    elevation="3"
    large
    @click="Third"
  >플레이</v-btn>


  
  <v-btn>
    elevation="3"
    large
    @click="Breakpoint"
    >Breakpoint</v-btn>
  
  
  
  <v-btn
    elevation="2"
    large
    @click="second"
  >진행도</v-btn>
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

    second() { 

      this.$router.push('/second')
    },

    Third() { 
      this.$router.push('/Third')
    },
    Gobreakpoint() { 
      this.$router.push('/Breakpoint')
    }
    
  }, //methods 
};
</script>

