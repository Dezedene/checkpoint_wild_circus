const getByClientName = 
`
  SELECT 
  * 
  FROM client 
  WHERE name =?;
`

module.exports = {
  getByClientName
}