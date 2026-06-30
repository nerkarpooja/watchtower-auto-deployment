const http = require("http");

const VERSION = "v1.0";
const COMMIT = "Initial Release";
const DEPLOY_TIME = new Date().toLocaleString();

const PORT = 3000;

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Watchtower Auto Deployment</title>

<style>

body{
margin:0;
padding:0;
font-family:Arial,Helvetica,sans-serif;
background:#0f172a;
display:flex;
justify-content:center;
align-items:center;
height:100vh;
color:white;
}

.card{

width:700px;

background:#1e293b;

padding:40px;

border-radius:15px;

box-shadow:0 0 20px rgba(0,0,0,.5);

}

h1{

text-align:center;

color:#38bdf8;

margin-bottom:30px;

}

table{

width:100%;

border-collapse:collapse;

}

td{

padding:15px;

border-bottom:1px solid #334155;

font-size:18px;

}

.label{

font-weight:bold;

color:#94a3b8;

width:40%;

}

.value{

color:white;

}

.footer{

margin-top:30px;

text-align:center;

color:#94a3b8;

font-size:15px;

}

.status{

color:#22c55e;

font-weight:bold;

}

</style>

</head>

<body>

<div class="card">

<h1>🚀 Watchtower Auto Deployment</h1>

<table>

<tr>
<td class="label">Application Status</td>
<td class="value status">🟢 Running</td>
</tr>

<tr>
<td class="label">Current Version</td>
<td class="value">${VERSION}</td>
</tr>

<tr>
<td class="label">Git Commit</td>
<td class="value">${COMMIT}</td>
</tr>

<tr>
<td class="label">Deployment Time</td>
<td class="value">${DEPLOY_TIME}</td>
</tr>

<tr>
<td class="label">Deployment Pipeline</td>
<td class="value">GitHub → GitHub Actions → Docker Hub → Watchtower → AWS EC2</td>
</tr>

<tr>
<td class="label">Container Platform</td>
<td class="value">Docker Compose</td>
</tr>

</table>

<div class="footer">

Created by <strong>Pooja Nerkar</strong>

</div>

</div>

</body>

</html>
`;

const server = http.createServer((req, res) => {
res.writeHead(200, {
"Content-Type":"text/html"
});
res.end(html);
});

server.listen(PORT, () => {
console.log(`Application ${VERSION} is running on port ${PORT}`);
});