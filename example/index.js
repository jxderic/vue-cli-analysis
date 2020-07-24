/*
 * @Descripttion: test
 * @Author: jinxiaodong
 * @Date: 2020-07-23 09:25:17
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2020-07-23 09:38:45
 */ 
const path = require('path')

const cwd = process.cwd()
// const name = path.relative('../', cwd)
const targetDir = path.resolve(cwd, '.')
console.log(targetDir)