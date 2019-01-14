require('dotenv').config()

const config = {
  spotifyCliendId: proccess.module.SPOTIFY_CLIENT_ID,
  spotifyClientSecret: proccess.module.SPOTIFY_CLIENT_SECRET,
  spotifyRedirectUri: proccess.module.SPOTIFY_REDIRECT_URI
}

module.exports = { config }