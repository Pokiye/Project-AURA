# Project AURA
Project AURA is a cross-platform wellness and emotion visualization system that integrates a C-based system daemon, a Node.js backend, and a React/Vite frontend. It provides a real-time abstraction for monitoring and visualizing user breathing patterns while analyzing text-based emotional input using machine learning models.

## License

Project AURA is labeled under the Time for What foundation, a 501(c)(3) non-profit organization. We have the right to use the Project AURA name and logo for the purpose of this project only. License information can be found in the LICENSE file.

Time for What is a non-profit organization that aims to provide academic resources and opportunities to all students, especially targeting underrepresented minorities. To learn more about this project, visit [www.timeforwhat.com](https://www.timeforwhat.com/).

## Installation

Please clone this repository to your local machine using the following command:

```git clone https://github.com/Pokiye/Project-AURA```

In the repository folder, run the following command to install the required dependencies:

```npm install```

Wait for all required dependencies to be installed. Once the installation is complete, please make a .env file in the the root directory of the project and add the following line:

Run the following commands to start the application

Load the backend server:

```node server.js```

Load the frontend server:

```npm run dev```

## Requirements

You must have Node.js installed on your local machine to run this application. You can download Node.js [here](https://nodejs.org/en/download/).

## Getting help

If you want to submit a feature request, or are experiencing issues, please email the parent organization at `support@timeforwhat.com`.

## Inspiration

Apps like Calm, Headspace, and Breathe teach users to regulate their breathing to reduce stress and anxiety. Your project’s inhale/exhale visualization and rhythm monitoring could be inspired by these mindfulness tools.

Research in HCI explores how software can subtly guide user states, e.g., adjusting visuals or notifications based on mood or stress. Your project could be inspired by this, where the system reacts in real time to the user’s emotional input.

## What it does

Conducts breathing exercises and journaling to help users explore their user states.

## How I built it

Backend (Node.js / Express): Handles API requests, communicates with the system daemon, and processes text input for emotion classification using lightweight transformer models from @xenova/transformers.

Frontend (React / Vite): Provides an interactive interface where users can log journal entries, visualize their emotions, and see dynamic breathing indicators in real time.

System Daemon (C, Windows compatible): Interfaces with the operating system to provide low-level abstractions for memory and timing, supporting real-time breathing and system interactions.

## Current Features

Real-time breathing visualization (inhale/exhale) emitted via WebSocket (socket.io)

Text-based emotion classification with a lightweight transformer model

Modular architecture separating frontend, backend, and system-level functionality

Cross-platform abstraction for system interactions via a compiled C daemon

Fully open for extension with additional wellness features or sensors

## Challenges I ran into

I ran into many challenges while building this project. One of the biggest challenges was integrating the AI chatbot and financial advisor. I had never worked with OpenAI's API before, so it was challenging to figure out how to use it effectively. Additionally, I had never built a financial app before, so it was challenging to figure out how to structure the app and what features to include. I also had to learn how to incorporate the OpenAI API into the app, which was a new experience for me. I have never used OpenAI before because of the initial cost, but I was able to pay for the API using my own funds. Additionally, TS incorporation was very hard to do and remained a huge challenge, such as the TS config file and the webpack.


## What I learned

I learned a lot while building this project. I learned how to use @xenova/transformations and utilize C, which was something new I learned this year from CMPSC 311, as a backend, while also utilizing node.js and express. I gained more experience in React and Vite, while also enabling real-time communication support with Socket.io.
