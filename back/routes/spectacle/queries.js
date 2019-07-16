const getBySpectacleSession = 
`
  SELECT 
  date
  FROM spectacle
  WHERE id = ?;
`


module.exports = {
  getBySpectacleSession
}