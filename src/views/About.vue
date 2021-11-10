<template>

       <div class = "home"> 
         <v-text-field
            v-model = "newtasktitle"
            @click:append = "addtask"
            @keyup.enter= "addtask" 
             class= "pa-3"
            outlined
            label="add gadget"
            append-icon="mdi-plus"
            hide-details
            clearable
          ></v-text-field>

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
              <v-list-item-action>
          <v-btn icon
          
             @click.stop="deleteTask(task.id)" >
            <v-icon color="primary">mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
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
          newtasktitle: '',
          tasks: [ 
              {
                  id: 1, 
                  title: "EDD",
                  done:false
              },
              
              {
                  id: 2, 
                  title: "black mirror",
                  done: false 
               }, 
             
              {  id: 3, 
                 title: "jammer",
                 done: false 
    


              },
             
             {    id:4, 
                   title: "suryagate", 
                   done : false}

           ]
      }
    },
    methods: {
       
       addtask( ) {  console.log('addtask')
                    let newtask = {  
                                   id : Date.now(),
                                  title: this.newtasktitle, 
                                  done: false
                    }
                    this.tasks.push(newtask)
       },
       doneTask(id) { 
          console.log('id:', id)
           let task = this.tasks.filter(task => task.id === id)[0]
           task.done =!task.done
       
       
       }, 
        deleteTask(id) {  
            this.tasks=this.tasks.filter(task => task.id !== id)
         




        }

    }
  }
</script>