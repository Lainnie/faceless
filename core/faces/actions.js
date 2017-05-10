import * as t from './actionsTypes'

export const facesReceived = (faces) => ({
  type: t.FACES_RECEIVED,
  faces,
})
