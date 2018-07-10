import express from 'express'
import axios from 'axios'

const user = express()

const APP_ID = 'wx89d1eb0d3eff9cad'
const SECRET_ID = 'e357ffc1af2cb313b0416b6f6f9e643a'

const getOpenIdByUserCode = async (userCode) => {
  return axios
    .get(`https://api.weixin.qq.com/sns/jscode2session?appid=${APP_ID}&secret=${SECRET_ID}&js_code=${userCode}&grant_type=authorization_code`)
    .then((res) => {
      return res.data
    })
    .catch(() => {
      return {}
    })
}


user.get('/:userCode', async (req, res) => {
  const userCode = req.params.userCode
  const openIdObject = await getOpenIdByUserCode(userCode)
  if (openIdObject && openIdObject.openid) {
    const openId = openIdObject.openid
    res.status(200).send({
      openId
    })
  }

  res.status(200).send({
    openId: ''
  })
})


export {user}