# NextJS PWA Demo

## Purpose of this project
Demonstrate the capability of NextJS to build PWA

[![Netlify Status](https://api.netlify.com/api/v1/badges/fccd3193-6810-4f9d-9038-26191e7c90cb/deploy-status)](https://app.netlify.com/sites/confident-kowalevski-0f2dd6/deploys)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/kamal250/next-pwa-demo)

## How to use

Execute the following commands and check output at [http://localhost:5000](http://localhost:5000):
```bash
npm install
npm run dev
```

## Steps to build:
1. Create a responsivewebapp in nextjs
2. Install [next-pwa](https://npmjs.com/package/next-pwa)
3. Configure `next.config.js`
4. Add manifest.json using [manifest](https://app-manifest.firebaseapp.com) - Set `display` other than `browser` & `prefer_related_applications` to `false`
5. Add meta tags in header

## How to verify whether it is PWA or not:
1. Check within Lighthouse (Google Chrome) about PWA
2. Installable icon on address bar on Desktop or "Add to Home" prompt on Mobile (if `manifest.json` is appropriate)
