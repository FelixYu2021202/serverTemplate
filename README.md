# Server Template

## Settings

In `data/ports.json`, you can set your server's ip (e.g. `localhost`, `127.0.0.1`, `192.168.0.1`) and your server's and websocket's port (e.g. `50004`).

## Making server

As the front end and the back end are interdependent, you can decide what scripts are placed in what end.

### Data storage

Note that different types of data which needs to be sent to front end are placed in different folders:

- html: `/pages/`
- javascript: `/scripts/`
- css: `/styles/`
- pictures(ico, jpeg, jpg, png): `/pics/`
- json: `/data/`

It's recommended to store the back end scripts in `/server/`. If a script that is used in back end that is also compatible with browsers, front end can also include the script with extension `jss`.

### Querying data in front end

The first level of directory should be omitted. For example, you want to get `/scripts/index.js`, link `/index.js` should be set.


### Setting back end

Since the server will be run in the root, the relevant directory in back end scripts should refer to the root directory. If the script required is either in the current folder or child folders, the relevant directory can refer to the current folder.

For example, in `/server/ws.js`, if you want to get data from `/data/ports.json`, the path set should be `./data/ports.json`. If you want to query `/server/work.js`, the path should be `./work.js`.

## Starting Server

Run `npm start`. If you are not on windows and you want to access `80` port, you can run `sudo npm start`.
