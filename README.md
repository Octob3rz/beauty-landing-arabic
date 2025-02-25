# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/d10a063c-f436-4a48-9c9c-291f4dbc6a3e

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/d10a063c-f436-4a48-9c9c-291f4dbc6a3e) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### Local Development
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run development server:
   ```bash
   npm run dev
   ```

### Production Build
1. Build the project:
   ```bash
   npm run build
   ```
2. Preview production build:
   ```bash
   npm run preview
   ```

### Deployment Options
#### Netlify
1. Install Netlify CLI: `npm install netlify-cli -g`
2. Run: `netlify deploy`

#### Vercel
1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel`

Alternatively, you can also deploy using Lovable by clicking on Share -> Publish.

## Deploying to Vercel

To deploy this project to Vercel:

1. Install Vercel CLI globally:
```sh
npm install -g vercel
```

2. Login to Vercel:
```sh
vercel login
```

3. Deploy the project:
```sh
vercel
```

For production deployment:
```sh
vercel --prod
```

### Deployment Notes
- Ensure you have the latest `vercel.json` configuration
- Node.js version 20.x is recommended
- The project uses Vite for building and previewing

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)
