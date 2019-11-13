'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')
const listingEvents = require('./listing/events.js')
const rsvpEvents = require('./rsvp/event.js')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#new-listing').on('submit', listingEvents.onCreateListing)
  // $('#show-listing').on('submit', listingEvents.onShowListing)
  $('#user-index').on('submit', listingEvents.onGetUserListings)
  $('#index').on('submit', listingEvents.onGetListings)
  $('#index-auth').on('submit', listingEvents.onGetAuthListings)
  // $('#update-listing').on('submit', listingEvents.onUpdateListing)
  $('#delete-listing').on('submit', listingEvents.onDeleteListing)
  $('#rsvp-index').on('submit', rsvpEvents.onIndexRsvp)
  // $('.create-rsvp').on('submit', rsvpEvents.onCreateRsvp)
  // $('.work2').on('click', '.create-rsvp', rsvpEvents.onCreateRsvp)
  $('#delete-rsvp').on('submit', rsvpEvents.onDeleteRsvp)
  $('.work').on('submit', '#update-listing', listingEvents.onUpdateListing)
  $('.work').on('submit', '#delete-listing', listingEvents.onDeleteListing)
  $('.work').on('click', '.show-user-event', listingEvents.onShowUserListing)
  $('.work').on('click', '.show-event', listingEvents.onShowListing)
  $('.work').on('submit', '.create-rsvp', rsvpEvents.onCreateRsvp)
})
