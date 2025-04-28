# Apache Preview Project

This project sets up an Apache server to serve a simple HTML page in a GitHub Codespace environment.

## Project Structure

- **public_html/index.html**: Contains the HTML code for the web page that will be served by the Apache server.
- **.devcontainer/devcontainer.json**: Configuration for the development container, specifying the settings for the Codespace environment.
- **.devcontainer/Dockerfile**: Defines the Docker image for the development container, installing Apache and configuring it to serve the index.html file.

## Setup Instructions

1. **Open the Project in GitHub Codespaces**: Click on the "Code" button and select "Open with Codespaces".

2. **Build the Development Container**: Once the Codespace is open, the development container will automatically build based on the configuration in `.devcontainer/Dockerfile`.

3. **Access the Apache Server**: After the container is built, the Apache server will be running. You can access the web page by navigating to `http://localhost:80` in your browser.

4. **Modify the HTML File**: You can edit `public_html/index.html` to change the content of the web page. After making changes, refresh the browser to see the updates.

## Additional Information

- Ensure that any necessary extensions specified in `.devcontainer/devcontainer.json` are installed for optimal development experience.
- For any issues or questions, refer to the GitHub documentation or seek help from the community.