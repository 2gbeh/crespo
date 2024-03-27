export enum ECategory {
  Pastor = "PASTOR",
  Worker = "WORKER",
  Member = "MEMBER",
}

export enum ERole {
  Owner = "OWNER", /// tony - *
  Manager = "MANAGER", // iyoha - finances read only
  Accountant = "ACCOUNTANT", // williams - finances read and write
  HR = "HR", // olueh - bio data read and write
  Employee = "EMPLOYEE", // ofigo - bio data read only
  Customer = "CUSTOMER", // members - can't login
}

export enum EHouse {
  // GROUP 1
  Dominion = "DOMINION",
  Goodness = "GOODNESS",
  Honour = "HONOUR",
  // GROUP 2
  Victory = "VICTORY",
  Mercy = "MERCY",
  Favour = "FAVOUR",
  // GROUP 3
  Testimony = "TESTIMONY",
  Royalty = "ROYALTY",
  Radiant = "RADIANT",
  // GROUP 4
  Glory = "GLORY",
  GoalGetter = "GOAL-GETTER",
  Sucesss = "SUCESSS",
}

export enum EDepartment {
  Choir = "CHOIR",
  Cleaners = "CLEANERS",
  Greeters = "GREETERS",
  ICT = "ICT",
  Media = "MEDIA",
  Music = "MUSIC",
  Programs = "PROGRAMS",
  Protocol = "PROTOCOL",
  Sound = "SOUND",
  Ushers = "USHERS",
}
