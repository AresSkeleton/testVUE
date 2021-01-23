

let id = 1;

Vue.component('todo-task', {
  props: ['task'],
  template: '<li>{{task.text}}</li>'
})

var app1 = new Vue({
  el: '#app1',
  data: {
    message: '',
    todos: [

    ]
  },
  methods: {
    addToDo: function () {
      this.todos.push({ id: id, text: this.message });
      //console.log(this.todos[0].text);
      this.message = ''
      id++;
    },

    SaveFile: function () {

      let textTodo = '';
      console.log(this.todos[0]);
      for (let i = 0; i < this.todos.length; i++) {
        let row = this.todos[i].id + ". " + this.todos[i].text + '\n';
        console.log(row);
        textTodo = textTodo.concat(row);
      }
      console.log(textTodo);


      $.post("/download", { text: textTodo }, function (res) {
        // alert(res.iscorrect);
        if (res.iscorrect) {

          $.ajax({
            type: "GET",
            url: document.location.replace("/download"),

            success: function (result) {
              alert('Plik pobrany');
            }
          })
        }else{
          window.alert('Nie udało stworzyć plik!')
        }
      });
      // $.ajax({
      // 	type: "GET",
      // 	url: document.location.replace("/download"),
      // 	data: JSON.stringify(textTodo),

      // 	success: function (result) {
      // 		//alert('Plik pobrany');
      // 	}
      // })
      // this.axios.get('/downloadfile', text).then( ()=>{
      //   console.log('ez');
      // });


      
    }
  }
})