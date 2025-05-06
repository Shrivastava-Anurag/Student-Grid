export interface Student {
  name: string
  class: string
  dob: string
  gender: "male" | "female"
  avatar: string
}

// Boy avatars
const boyAvatars = ["/avatars/boy-1.png", "/avatars/boy-2.png", "/avatars/boy-3.png", "/avatars/boy-4.png"]

// Girl avatars
const girlAvatars = ["/avatars/girl-1.png", "/avatars/girl-2.png", "/avatars/girl-3.png", "/avatars/girl-4.png"]

// Helper function to get random avatar based on gender
const getRandomAvatar = (gender: "male" | "female") => {
  const avatars = gender === "male" ? boyAvatars : girlAvatars
  return avatars[Math.floor(Math.random() * avatars.length)]
}

export const students: Student[] = [
  {
    name: "Krishna Kashyap",
    class: "Q7",
    dob: "2007-09-14",
    gender: "male",
    avatar: getRandomAvatar("male"),
  },

  {
    name: "Abhishek",
    class: "Q7",
    dob: "2006-08-19s",
    gender: "male",
    avatar: getRandomAvatar("male"),
  },
{
    name: "aryan raj",
    class: "Q7",
    dob: "2006-03-10",
    gender: "male",
    avatar: getRandomAvatar("male"),
  },

{   name: "Shubhra Chaubey",
    class: "Q7",
    dob: "2006-06-19",
    gender: "female",
    avatar: getRandomAvatar("female")
},

]

