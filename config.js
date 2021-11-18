/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/getting-started/configuration.html#general
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	//address: "localhost", 	// Address to listen on, can be:
	address: "0.0.0.0",
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	//ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"]
	  ipWhitelist: [], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 12,
	units: "imperial",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
	{
			module: "MMM-NowPlayingOnSpotify",
			position: "top_left",

			config: {
				clientID: "1f1991929efd40d5bf0e3808307a2b0a",
				clientSecret: "274785d958d247c8b69d8de6082fec0c",
				accessToken: "BQCP1crToXM0vokSIMwcCTUZL7o1nDCmyIVdCvJMhGJ3vXiYuUSlFiuPyjncRzFKbM2C3AHs8-Vh5wesoDE9CwFBKwp_cLs_GLSMiNY8MdTvZ94Erd1ZDe-O7XCse--vOwXZ01eSCUjyRQzfm47rmvw",
				refreshToken: "AQCIaueyLCk0XBfMdYUPUwif6vKscpQWJ8nPVvQJZhkpuRbaduaxxihAQN8C_l8fGI4kzkMbRhIOZN4-ld_bkaYWfJqRg8ppied4oMSjS5PISIPqmucmWDIwaHf9BOp1yPY"
 }
	},
	
	{
	module: "MMM-Remote-Control-Repository",
	},
{
    module: 'MMM-JokeAPI',
    position: 'middle_center',
    config: {
        category: "Programming"
    }
},

	{
			module: 'MMM-Remote-Control',
			// uncomment the following line to show the URL of the remote control on the mirror
			 position: 'bottom_left',
			// you can hide this module afterwards from the remote control itself
			config: {
				apiKey: '141128a0617749218a0024507ee60a78'
        }
    },

		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/ja341748%40gmail.com/private-6c1ba1151e6bc7210de3df5ea272f9c6/basic.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				location: "San Marcos",
				locationID: "4726491", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "cbeef53df3067808d3bf612249c15d0f"
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				location: "San Marcos",
				locationID: "4726491", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "cbeef53df3067808d3bf612249c15d0f"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "The Texas Tribune",
						url: "https://feeds.texastribune.org/feeds/main/"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
