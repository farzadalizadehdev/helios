const DEV = 'dev'
let api_url = '';
// const serverIp = process.env.REACT_APP_SERVER_IP;
// const serverPort = process.env.REACT_APP_SERVER_PORT;
const serverIp = '192.168.114.29';
const serverPort = '3000';
//const wsPort = process.env.REACT_APP_WS_PORT;

if (DEV === 'dev') {
	api_url = 'http://' + serverIp + ':' + serverPort
} else {
	api_url = window.location.protocol + '//' + window.location.hostname + ':' + serverPort
}

export default api_url; 