// Copyright 2018 The Gardener Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const http = require('http');
const app = require('./app');

const port = process.env.PORT || '8080';
app.set('port', port);
const server = http.createServer(app);
server.listen(port);

console.log(`Kubernetes backend started on port ${port}...`);

process.on('SIGTERM', () => {
  console.log('Closing on SIGTERM...');
  server.close(() => console.log('Server closed.'));
});