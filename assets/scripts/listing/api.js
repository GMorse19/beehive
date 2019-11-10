'use strict'

const config = require('../config')
const store = require('../store')

const createListing = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/listings',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const showListing = function (id) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + `/listings/${id}`,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateListing = function (name, location, description, id) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `/listings/${id}`,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'listing': {
        'listing_name': name,
        'location': location,
        'description': description
      }
    }
  })
}

const getListings = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/listings/'
  })
}

const getAuthListings = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/listings/'
  })
}

const getUserListings = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/user_listings/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteListing = function (id) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + `/listings/${id}`,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createListing,
  showListing,
  updateListing,
  getListings,
  deleteListing,
  getUserListings,
  getAuthListings
}
