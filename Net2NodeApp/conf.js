var config = {};
config.root_dir = __dirname;

config.events_api = {};
config.events_api.url = (process.env.NODE_ENV && process.env.NODE_ENV == "production" && "http://events_api") || "http://localhost:3030";
config.events_api.events = config.events_api.url + "/api/events";

config.username = 'NETDeveloper';

module.exports = config;