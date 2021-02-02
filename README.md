# Mentorship Diary Application

Our project brief was to build an app that would enhance the School of Code mentoring experience and the solution that the team of 4 people I was working in, managed to come up with in less than a week was this tool that allows [School of Code](https://www.schoolofcode.co.uk/) bootcampers to track and document their mentor/mentee relantionship.This is basically an online diary of the [School of Code](https://www.schoolofcode.co.uk/) bootcamper mentorship journey.

The application consist of a **Home** page:

![mentorship-diary-home](https://user-images.githubusercontent.com/70764326/106596359-cad7eb00-654c-11eb-934f-35e732037fdf.png)

**Weekly Form** where mentee can go through a predefine set of questions together with their mentor.The questions are set with placeholder text to help guide the discussion. 

![mentorship-diary-weekly-form](https://user-images.githubusercontent.com/70764326/106596972-a9c3ca00-654d-11eb-91ce-7102d9c0c75f.png)

The data can be viewed on the **Achievement History** page by selecting the prefered week to review.

![mentorship-diary-achievement-history](https://user-images.githubusercontent.com/70764326/106597157-edb6cf00-654d-11eb-9ddc-61c80685a7ec.png)

We also added in a **Contact** page with School of Code contacts.

![mentorship-diary-contact](https://user-images.githubusercontent.com/70764326/106598206-5488b800-654f-11eb-8448-6a128e75d20d.png)

The **Authentication** was done using [Firebase](https://firebase.google.com/) .

![mentorship-diary-authentication](https://user-images.githubusercontent.com/70764326/106597795-d0cecb80-654e-11eb-9002-1daae449b413.png)


The server code you can find it [here](https://github.com/vmilitaru/Mentorship-Diary-server).

## Stack

- [React](https://reactjs.org/)
- [Firebase](https://firebase.google.com/)
- [React Bootstrap](https://react-bootstrap.github.io/)

## Getting started

1. Clone the repo: `https://github.com/vmilitaru/Mentorship-Diary-client.git`

2. Download the required npm modules: `npm i`

## Configuration

Set up Firebase:

- Create a project at the [Firebase console](https://console.firebase.google.com/).
- Copy the contents of `.env.example` into a new file called `.env.local`
- Get your authentication credentials from the Firebase console under _Project settings > General> Your apps_ Add a new web app if you don't already have one. Under _Firebase SDK snippet_ choose _Config_ to get the configuration as JSON. It will include keys like `apiKey`, `authDomain`, `projectId`, `storageBucket`, `messagingSenderId`, `appId`. Set the appropriate environment variables in the `.env.local` file at the root of this project.
- Go to **Build**, click on **Authentication** and in the **Sign-in method** tab enable **Email/Password** authentication method of the app.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.



## Contributors ✨

<table>
  <tr>
    <td align="center"><a href="https://github.com/FreshtaEbrahim"><img src="https://avatars.githubusercontent.com/u/56118343?s=400&u=7db01c710b8ba0ea0f75efbea2f5113a396a839b&v=4" width="100px;" alt=""/><br /><sub><b>Freshta Ebrahim</b></sub></a><br /><a </td>
    <td align="center"><a href="https://github.com/vmilitaru"><img src="https://avatars0.githubusercontent.com/u/70764326?s=120&v=4" width="100px;" alt=""/><br /><sub><b>Valentina Militaru</b></sub></a><br /></td>
   <td align="center"><a href="https://github.com/cod3rcarl"><img src="https://avatars.githubusercontent.com/u/70280561?s=400&u=423202e286eba513af63e4225e44d6fea8b6475a&v=4" width="100px;" alt=""/><br /><sub><b>Carl McIntosh</b></sub></a><br /></td>
   <td align="center"><a href="https://github.com/Jonowens84"><img src="https://ca.slack-edge.com/T6L933W4X-U01A0GAG4LE-7362c19b41f6-512" width="100px;" alt=""/><br /><sub><b>Jon Owens</b></sub></a><br /></td>
  </tr>
</table>
