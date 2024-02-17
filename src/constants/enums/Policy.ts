export enum ERole {
  Owner = "OWNER", /// tony - *
  Manager = "MANAGER", // iyoha - finances read only
  Accountant = "ACCOUNTANT", // williams - finances read and write
  HR = "HR", // olueh - bio data read and write
  Employee = "EMPLOYEE", // ofigo - bio data read only
  Customer = "CUSTOMER", // members - can't login
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
