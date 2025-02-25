# ADDB

Front and backend code of **Alzheimer's Disease Biomarker Database (ADDB)**.

## Development

1. Install Node.js(>= 18) and pnpm

2. Clone the repository:

```bash
git clone https://github.com/ADDB/ADDB.git
```

3. Install dependencies:

```bash
cd ADDB
pnpm install
```

4. Run the development server:

```bash
# frontend
pnpm dev
# backend (new terminal)
cd backend
pnpm start
```

5. Open the browser and visit [http://localhost:5173](http://localhost:5173) to see the application in action.

## Deployment

If you have a server, you can deploy the application as follows:

1. Build the frontend:

```bash
# In ADDB/ directory
pnpm build
```

You'll see a `dist` directory with the built frontend.

2. Upload the `dist` and `backend` directorys to your server like:

```
ADDB/
├── dist/
└── backend/
```

3. Run the backend server:

Copy the `backend/.env.example` and rename it to `.env` and modify the configuration according to your server.

The start file is `backend/bin/www`.

If you are using Nginx, key configuration：

```nginx
server
{
    listen 80;
    server_name xxx.xxx.xxx;
    index index.html index.htm default.htm default.html;
    
    # frontend build directory
    root xxx/ADDB/dist;
    
    location / {
        try_files $uri $uri/ /index.html;
    }

    # 3000 is the port of the backend server
    location /api {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host:$server_port;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header REMOTE-HOST $remote_addr;
        add_header X-Cache $upstream_cache_status;
        proxy_set_header X-Host $host:$server_port;
        proxy_set_header X-Scheme $scheme;
        proxy_connect_timeout 30s;
        proxy_read_timeout 86400s;
        proxy_send_timeout 30s;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
    ...
}
```

## License

This project is licensed under the MIT License.
