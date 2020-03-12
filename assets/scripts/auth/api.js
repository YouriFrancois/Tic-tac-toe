const config = require('../config')
const store = require('../store')

const signUp = function (data) {
  console.log('In api.js')

  return $.ajax({
    url: config.apiUrl +`/sign-up`,
    method: 'POST',
    data
    // data: data
  })
}

const signIn = function (data) {
  console.log('In api.js sign in')

  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
    // data: data
  })
}

const changePassword= function (data) {
  console.log('In api.js change Password')

  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers:{
      Authorization:'Token token='+store.user.token
    },
    data
    // data: data
  })
}

const signOut = function () {
  console.log('In api.js')
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers:{
      Authorization:'Token token='+store.user.token
    },
    // data: data
  })
}

module.exports = {
signUp,
  signIn,
  changePassword,
  signOut,
}
