# Meet Megan Bianca: Your Reliable AI-Powered Assistant

Welcome to our AI-powered virtual assistant that provides quick and accurate assistance by generating text-based content on various topics. Our sophisticated language model is designed to cater to your needs and provide expert guidance on a variety of topics.

## Features

Here are some of the key features that make Megan Bianca stand out from other virtual assistants:

### Core Functionality

- Intelligent and sophisticated language model
- Expert guidance on various topics
- Helpful responses
- Quick and efficient processing times
- 24/7 availability

### Conversation Control

- Create and edit messages from multiple perspectives (system / assistant / user)
- Tweak model parameters such as temperature to achieve an unexpected outcome
- Change the order of messages to suit your needs
- Add new messages in between old ones for a seamless conversation flow

### Data Management

- Automatic backup of all chat history to browser's local storage
- Import and export of chat data as a JSON file
- Download entire chat log as markdown, pdf or image

### Detailed Features

- Intelligent and sophisticated language model: Our AI language model is designed to understand your queries and provide helpful responses that are informative and tailored to your needs.
- Expert guidance on various topics: Whether you need help with homework, writing an essay, or researching a topic, our AI language model is here to provide expert guidance and support.
- Helpful responses: We strive to provide helpful responses to all your queries. However, please note that the information provided by the AI language model may not always be entirely accurate or comprehensive. Therefore, we advise you to double-check the information and use your own judgment before making any decisions based on it.
- Quick and efficient processing times: Our AI language model processes your queries quickly and efficiently, providing you with timely responses to your inquiries.
- 24/7 availability: Our virtual assistant is available to assist you 24/7, so you can get the help you need whenever you need it.
- Create and edit messages from multiple perspectives: Our platform allows you to create and edit messages from multiple perspectives, including the system, assistant, and user. This feature makes it easier to maintain a coherent and seamless conversation flow.
- Tweak model parameters: With our platform, you can tweak model parameters such as temperature to achieve an unexpected outcome in your generated text.
- Customize message order: You also have the flexibility to change the order of messages to suit your needs. You can add new messages in between old ones for a seamless conversation flow.
- Automatic backing up: Our platform automatically backs up all chat history to your browser's local storage, so you never have to worry about losing your chat history.
- Import and export chat data: You can easily import and export chat data as a JSON file, making it easy to transfer conversations between devices.
- Download chat log: Lastly, you can download your entire chat log as markdown, pdf, or image, providing you with the flexibility to save your conversations in your preferred format.

## Usage

Megan Bianca is a user-friendly virtual assistant designed to make your life easier. Getting started is simple: just type in your question or inquiry, and our AI language model will provide you with relevant information. Our virtual assistant processes your queries quickly and efficiently, so you can access the answers you need without any unnecessary delays. With Megan Bianca, you can get the information you need in a hassle-free way.

## Self-Hosting

### Prerequisites

To use the code provided in the `dist` folder, you will need the following software installed on your machine:

- Node.js
- npm or yarn package manager

Make sure to install the latest version of Node.js and a package manager of your choice before proceeding.

### Installation

To install the web application, follow the below steps:

- Download the `dist` folder provided in this repository.
- Move the `dist` folder to the location where you want to deploy the app.
- Open the terminal or command prompt and navigate to the `dist` folder.
- Run the following command to install the dependencies:

```
npm install
```

Or, if you prefer yarn, run

```
yarn install
```

Once dependencies are installed, you can start the application on any server or hosting platform by running the following command:

```
npm start
```

Important Note: The API endpoint included in the web application's source code cannot be used with a self-hosted installation. As an alternative, please refer to the worker folder in the source code to learn how to create your own API endpoint. Please keep in mind that there is no comprehensive documentation available at the moment. However, you can find some information on how to create your own endpoint in the code files.

Additionally, the docker folder includes a docker version of the application that you can utilize. You will also need to set up a MongoDB database either locally or by using MongoDB Atlas. To ensure a proper setup, please configure your environment variables accurately. Once you have completed these steps, you can deploy the Docker locally or on Google Cloud Run.

## Customization

Currently, the self-hosted version of the web application does not allow customization of the UI or branding. However, we are working to make it possible to set custom UI and branding in the future. Stay tuned for future updates.

Thank you for using our web application! If you have any questions or issues, please reach out to us through the issue tracker. Happy coding!
