# Deployment Guide

## Prerequisites
- VPS with Ubuntu 22.04+ (or any Linux distro)
- Docker and Docker Compose installed
- Domain name pointed to your server
- SSL certificate (Let's Encrypt recommended)

---

## Option 1: Docker Deployment (Recommended)

### 1. Prepare VPS

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Install Docker Compose
sudo apt install docker-compose -y

# Add user to docker group
sudo usermod -aG docker $USER
newgrp docker
```

### 2. Clone & Configure

```bash
# Clone your repository
git clone <your-repo-url>
cd portfolio

# Create .env.local
cp .env.example .env.local
nano .env.local  # Add your values
```

### 3. Build & Run

```bash
# Build and start
docker-compose up -d --build

# Check logs
docker-compose logs -f

# Stop
docker-compose down

# Rebuild after changes
docker-compose up -d --build
```

### 4. Nginx Reverse Proxy

Create `/etc/nginx/sites-available/portfolio`:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name yourdomain.com www.yourdomain.com;

    # SSL Configuration (after Let's Encrypt setup)
    ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Cache static assets
    location /_next/static {
        proxy_pass http://localhost:3000;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/json;
}
```

Enable the site:

```bash
# Install Nginx
sudo apt install nginx -y

# Enable site
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# Install Let's Encrypt
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Auto-renew SSL (cron job is created automatically)
sudo certbot renew --dry-run
```

---

## Option 2: PM2 Deployment (Without Docker)

### 1. Install Node.js & PM2

```bash
# Install Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2
sudo npm install -g pm2
```

### 2. Deploy Application

```bash
# Clone repo
git clone <your-repo-url>
cd portfolio

# Install dependencies
npm ci

# Build
npm run build

# Start with PM2
pm2 start npm --name "portfolio" -- start

# Save PM2 process list
pm2 save

# Auto-start PM2 on server reboot
pm2 startup
# Follow the command it gives you
```

### 3. PM2 Commands

```bash
# View logs
pm2 logs portfolio

# Restart
pm2 restart portfolio

# Stop
pm2 stop portfolio

# Monitor
pm2 monit

# List processes
pm2 list
```

---

## Option 3: Vercel (Easiest)

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Production deployment
vercel --prod
```

Or connect your GitHub repo at https://vercel.com for automatic deployments.

---

## Environment Variables

Make sure to set these on your server:

```bash
# .env.local
NEXT_PUBLIC_SHOW_TESTIMONIALS=true
TELEGRAM_BOT_TOKEN=your_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
```

For Docker: these are loaded from `.env.local`
For PM2: create `.env.local` in project root
For Vercel: set in Vercel dashboard under Project Settings → Environment Variables

---

## Updating the Application

### Docker Method
```bash
cd portfolio
git pull
docker-compose up -d --build
```

### PM2 Method
```bash
cd portfolio
git pull
npm ci
npm run build
pm2 restart portfolio
```

### Vercel Method
```bash
git push  # Automatic deployment
```

---

## Monitoring & Logs

### Docker
```bash
docker-compose logs -f
docker stats
```

### PM2
```bash
pm2 logs portfolio
pm2 monit
```

---

## Backup Strategy

```bash
# Automated backup script
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/backups/portfolio"
PROJECT_DIR="/path/to/portfolio"

mkdir -p $BACKUP_DIR

# Backup .env.local
cp $PROJECT_DIR/.env.local $BACKUP_DIR/.env.local.$DATE

# Create archive
tar -czf $BACKUP_DIR/portfolio_$DATE.tar.gz -C $PROJECT_DIR .

# Keep only last 7 days
find $BACKUP_DIR -name "portfolio_*.tar.gz" -mtime +7 -delete
```

Add to crontab:
```bash
0 2 * * * /path/to/backup.sh
```

---

## Performance Optimization

### 1. Enable HTTP/2
Already enabled in Nginx config above

### 2. CDN (Optional)
- Cloudflare (Free tier available)
- Configure DNS to point through Cloudflare

### 3. Image Optimization
Next.js automatically optimizes images, ensure you're using `next/image`

### 4. Caching
Static assets are cached for 1 year (see Nginx config)

---

## Troubleshooting

### Port already in use
```bash
# Find process using port 3000
sudo lsof -i :3000
sudo kill -9 <PID>
```

### Docker build fails
```bash
# Clean build
docker-compose down
docker system prune -a
docker-compose up -d --build
```

### Next.js won't start
```bash
# Check Node version
node --version  # Should be 20+

# Clear Next cache
rm -rf .next
npm run build
```

---

## Security Checklist

- [ ] SSL/TLS configured (HTTPS)
- [ ] Environment variables not committed to git
- [ ] Firewall configured (ufw or iptables)
- [ ] SSH key-based authentication only
- [ ] Regular security updates (`apt update && apt upgrade`)
- [ ] Nginx security headers configured
- [ ] Rate limiting configured (optional)

---

## Recommended: Automated Deployments

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to VPS

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to VPS
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.VPS_HOST }}
          username: ${{ secrets.VPS_USERNAME }}
          key: ${{ secrets.SSH_PRIVATE_KEY }}
          script: |
            cd /path/to/portfolio
            git pull
            docker-compose up -d --build
```

Add secrets in GitHub: Settings → Secrets → Actions

---

## Cost Estimation

### VPS Options:
- **DigitalOcean**: $6/month (1GB RAM, 25GB SSD)
- **Hetzner**: €4.5/month (2GB RAM, 40GB SSD)
- **Linode**: $5/month (1GB RAM, 25GB SSD)
- **Vercel**: Free (Hobby plan, sufficient for portfolio)

### Recommended for Portfolio:
**Vercel (Free)** or **Hetzner Cloud (€4.5/mo)** if you want full control

---

## Questions?

Check logs first:
- Docker: `docker-compose logs -f`
- PM2: `pm2 logs portfolio`
- Nginx: `sudo tail -f /var/log/nginx/error.log`
