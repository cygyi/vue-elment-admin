import request from '@/utils/request'

// 获取员工简单列表请求
export function getEmployeeSimple() {
  return request({
    url: '/sys/user/simple'
  })
}

// 获取员工综合列表请求
export function getEmployeeList (pages) {
  return request({
    url: '/sys/user',
    params: pages
  })
}

// 删除员工请求
export function deleteEmployee (id) {
  return request({
    url: `/sys/user/${id}`,
    method: 'delete'
  })
}

// 新增员工请求
export function addEmployee (data) {
  return request({
    url: '/sys/user',
    method: 'post',
    data
  })
}

// 员工导入请求
export function reqImportEmployee (data) {
  return request({
    url: '/sys/user/batch',
    method: 'post',
    data
  })
}

// 更新员工信息请求
export function updateEmployee (data) {
  return request({
    url: `/sys/user/${data.id}`,
    method: 'put',
    data
  })
}

// 获取员工基础信息请求
export function getPersonalDetail (id) {
  return request({
    url: `/employees/${id}/personalInfo`
  })
}

// 保存员工基础信息请求
export function updatePersonalDetail (data, id) {
  return request({
    url: `/employees/${id}/personalInfo`,
    method: 'put',
    data
  })
}

// 读取岗位信息
export function getTransferPosition (id) {
  return request({
    url: `/employees/${id}/transferPosition`
  })
}
// 保存岗位信息
export function updateTransferPosition (data) {
  return request({
    url: `/employees/${data.userId}/transferPosition`,
    method: 'put',
    data
  })
}

// 保存员工角色
export function saveTheRole (data) {
  return request({
    url: '/sys/user/assignRoles',
    method: 'put',
    data
  })
}
