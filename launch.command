#!/bin/bash

# Navigate to the directory where this script is located
cd "$(dirname "$0")"

# Print a welcome message
echo "🚀 Launching HostGenius Landing Page..."

# Install dependencies if needed (fast if already installed)
echo "📦 Checking dependencies..."
npm install

# Start the development server
echo "⚡ Starting Next.js server..."
npm run dev
