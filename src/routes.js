import Home from './App.vue'

export const routes = [
    {
        path: '/:lang',
        component: {
            render (c) {return c('router-view') }
        },
        children: [
          {
            path: '/',
            name : 'home',
            component : Home,

          }    

        ]
      }]