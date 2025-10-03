#!/bin/bash
# Script to generate a production-ready folder "public" from "src" folder

# Remove existing public folder if exists
rm -rf public

# Create public folder
mkdir public

# Copy all files and folders from src to public
cp -r src/* public/

# Remove any source control or development files if needed (optional)
# For example, remove any .git or node_modules if present
rm -rf public/.git
rm -rf public/node_modules

echo "Production-ready folder 'public' created successfully."
