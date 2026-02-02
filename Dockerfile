FROM node:18

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy test files
COPY . .

# Install Playwright browsers
RUN npx playwright install --with-deps

# Command to run tests (Chromium only for Docker)
CMD ["npx", "playwright", "test", "--project=chromium"]
