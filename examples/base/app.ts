import axios from '../../src/axios'

axios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: ['bar', 'baz']
  }
})


axios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: {
      bar: 'baz'
    }
  }
})

const date = new Date()

axios({
  method: 'get',
  url: '/base/get',
  params: {
    date
  }
})

axios({
  method: 'get',
  url: '/base/get',
  params: {
    bar: '@$,:'
  }
})


axios({
  method: 'get',
  url: '/base/get',
  params: {
    bar: 'baz',
    baz: null
  }
})


axios({
  method: 'get',
  url: '/base/get#hash',
  params: {
    bar: 'baz'
  }
})
