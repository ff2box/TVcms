import request from '@/utils/request'

export function listAdmin(query) {
  return request({
    url: '/admin/admin/getList',
    method: 'get',
    params: query
  })
}

export function createAdmin(data) {
  return request({
    url: '/admin/admin/create',
    method: 'post',
    data
  })
}

export function updateAdmin(data) {
  return request({
    url: '/admin/admin/update',
    method: 'post',
    data
  })
}

export function deleteAdmin(data) {
  return request({
    url: '/admin/admin/delete',
    method: 'post',
    data
  })
}
