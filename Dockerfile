# Step 1: Use the latest node image as the base image
FROM node:20

# Step 2: Set the working directory
WORKDIR /leche_lanzema_ui_garden

# Step 3: Copy package.json and package-lock.json into the container
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code
COPY . .

# Step 7: Expose port 8083
EXPOSE 8083

# Step 8: Start the application
CMD ["npx", "storybook", "dev", "-p", "8083"]

