#!/bin/bash

# Deploy script for Abstract Papers Hub
# This script prepares and deploys the project to GitHub

echo "🚀 Starting deployment process..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing git repository..."
    git init
else
    echo "✅ Git repository already initialized"
fi

# Add remote origin if not exists
if ! git remote | grep -q "origin"; then
    echo "🔗 Adding remote origin..."
    git remote add origin https://github.com/luizfr-jr/abstractpapers.git
else
    echo "✅ Remote origin already exists"
fi

# Create .env file if it doesn't exist
if [ ! -f ".env" ]; then
    echo "📄 Creating .env file from template..."
    cp .env.example .env
    echo "⚠️  Please update the .env file with your actual API keys before running the application"
fi

# Build the project
echo "🔨 Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully"
else
    echo "❌ Build failed. Please fix the errors and try again."
    exit 1
fi

# Stage all files
echo "📝 Staging files for commit..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Deploy: Updated Abstract Papers Hub with dark mode and improved UI

- Added dark mode toggle with beautiful animations
- Implemented custom SVG logos for all journal tools
- Updated footer with correct developer information
- Enhanced UI with better responsive design
- Integrated Gemini AI for abstract analysis
- Added comprehensive documentation"

# Push to GitHub
echo "🌐 Pushing to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo "🎉 Successfully deployed to GitHub!"
    echo "🔗 Repository: https://github.com/luizfr-jr/abstractpapers"
    echo "📖 View the project at: https://github.com/luizfr-jr/abstractpapers"
else
    echo "❌ Failed to push to GitHub. Please check your credentials and try again."
    exit 1
fi

echo "✨ Deployment complete!"