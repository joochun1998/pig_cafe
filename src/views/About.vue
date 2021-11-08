<template>

       <div class = "home"> 
      <v-card
    class="mx-auto"
    max-width="400"
  >

 
    <v-list
      flat
      two-line 
    >
         <div 
          v-for ="task in tasks"
         :key = "task.id">

        <v-list-item
        @click="doneTask(task.id)"
        :class = "{ 'indigo lighten-2':task.done }"
        >"
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox 
              :input-value="task.done"
              color = "primary"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{task.title}}</v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-item>
        <v-divider></v-divider> 
        </div>
      
        
    </v-list>
  </v-card>
  </div> 
</template>

<script>
  export default {
    name : 'Home',
    data () {
      return {
          tasks: [ 
              {
                  id: 1, 
                  title: "EDD",
                  done:false
              },
              
              {
                  id: 2, 
                  title: "ADS",
                  done: false 
               }, 
             
              {  id: 3, 
                 title: "magnet",
                 done: false 
    


              },
             
             {    id:4, 
                   title: "torch", 
                   done : false}

           ]
      }
    },
    methods: {
       doneTask(id) { 
          console.log('id:', id)
           let task = this.tasks.filter(task => task.id === id)[0]
           task.done =!task.done
       }

    }
  }
</script>