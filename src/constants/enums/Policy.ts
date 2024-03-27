export enum ERole {
  Webmaster = "WEBMASTER",
  SuperAdmin = "SUPERADMIN",
  Admin = "ADMIN",
  SuperUser = "SUPERUSER",
  User = "USER",
}

export enum ERoleWP {
  Administrator = "ADMINISTRATOR",
  Editor = "EDITOR",
  Author = "AUTHOR",
  Contributor = "CONTRIBUTOR",
  Subscriber = "SUBSCRIBER",
}

export enum EPermission {
  NONE,
  ALL,
  CREATE,
  VIEW,
  EDIT,
  DELETE,
  GRANT,
  REVOKE,
  READ_ONLY,
  WRITE_ONLY,
}

export enum EAction {
  INSERT = 1,
  SELECT,
  UPDATE,
  DELETE,
  SIGN_UP,
  SIGN_IN,
  SIGN_OUT,
}
