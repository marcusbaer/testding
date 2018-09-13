var initaliseVueJS = function () {

    // Define a new component called button-counter
    Vue.component('button-counter', {
    data: function () {
      return {
        count: this.start || 0
      }
    },
    props: ['start'],
    template: '#button-template'
  })

    var app = new Vue({
        el: '#app',
        data: {
          message: 'Hello Vue!',
          isAlert: false
        },
        methods:{
            doSomething: function (){
            this.message = Date();
            this.isAlert = !this.isAlert;
            }
        }
      })
    new Vue({
        el: '#animated-number-demo',
        data: {
          number: 0,
          tweenedNumber: 0
        },
        computed: {
          animatedNumber: function() {
            return this.tweenedNumber.toFixed(0);
          }
        },
        watch: {
          number: function(newValue) {
            TweenLite.to(this.$data, 1, { tweenedNumber: newValue });
          }
        }
      }) 
}