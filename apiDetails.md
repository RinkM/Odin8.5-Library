
### https://api-docs.igdb.com/#authentication
If your Client ID is abcdefg12345 and your Client Secret is hijklmn67890, the whole url should look like the following.

POST: https://id.twitch.tv/oauth2/token?client_id=nixw3v1vce8o5hv7zdfa2r1bukau8s&client_secret=13hjggts4yi07iy4lhwkg3gfnwld6x&grant_type=client_credentials

The response from this will be a json object containing the access token and the number of second until the token expires.

POST: https://id.twitch.tv/oauth2/token?client_id=nixw3v1vce8o5hv7zdfa2r1bukau8s&client_secret=13hjggts4yi07iy4lhwkg3gfnwld6x&grant_type=client_credentials