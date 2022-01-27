import { checkIfExist } from './checkIfExist'

export const checkLogIn = async (values) => {
  const userRecord = await checkIfExist('users', values.nick);
  if (userRecord.length === 0) {
    return false
  }
  if (userRecord[0].password === values.password) return userRecord;
}