import reWithLoad from "./axios"
export const people = () => reWithLoad.get('/getData')
export const getGeoJson = (path) => reWithLoad.get(path)
