import express from 'express'
import axios from 'axios'
import models from '../../models'

const user = express()

const getSecretId = async () => {
  return models.AppKey.findOne().then((res) => {
    return res.dataValues
  })
}

const getOpenIdByUserCode = async (userCode) => {
  const appConfig = await getSecretId()
  const {appId, secretId} = appConfig

  return axios
    .get(`https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${secretId}&js_code=${userCode}&grant_type=authorization_code`)
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