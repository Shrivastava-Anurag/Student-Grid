eexport interface Student {
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
    name: "Albertina Einstein",
    class: "Q7",
    dob: "2008-05-12",
    gender: "female",
    avatar: getRandomAvatar("female"),
  },
  {
    name: "PRINCE KUMAR SINGH",
    class: "Q7",
    dob: "2006-08-04",
    gender: "male",
    avatar: getRandomAvatar("male"),
  },
  {
    name: "PAWAN VISHWAKARMA",
    class: "Q7",
    dob: "2005-10-04",
    gender: "male",
    avatar: getRandomAvatar("male"),
  },
  {
    name: "ADITYA KUMAR SRIVASTAVA",
    class: "Q7",
    dob: "2006-01-25",
    gender: "male",
    avatar: getRandomAvatar("male"),
  },
]
