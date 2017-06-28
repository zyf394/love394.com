import member from './member'
import user from './user'
export default function(router) {
  member(router)
  user(router)
}