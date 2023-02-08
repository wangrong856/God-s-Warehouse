<template>
  <div>
          <div class="page-title mb-3">
            <div class="row justify-content-between align-items-center">
              <div class="col-md-6 mb-3 mb-md-0">
                <h5 class="h3 font-weight-400 mb-0 text-white">Students</h5>
                <span class="text-sm text-white opacity-8"
                  >一共有 <b class="total">0</b> 位学员</span
                >
              </div>
              <div
                class="
                  col-md-6
                  d-flex
                  align-items-center
                  justify-content-between justify-content-md-end
                "
              >
              
                <a
                  id="openModal"
                  href="javascript:;"
                  class="btn btn-sm btn-white btn-icon-only rounded-circle ml-4"
                >
                  <span class="btn-inner--icon"
                    ><i class="bi bi-plus bi-2x"></i
                  ></span>
                </a>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="card card-fluid">
                <div class="table-responsive" style="min-height: 1000px">
                  <table class="table align-items-center">
                    <thead>
                      <tr>
                        <th>姓名</th>
                        <th>年龄</th>
                        <th>性别</th>
                        <th>组号</th>
                        <th>期望薪资</th>
                        <th>就业薪资</th>
                        <th>籍贯</th>
                        <th>操作</th>
                      </tr>
                    </thead>
                    <tbody class="list">
                      <!-- <tr>
                        <td>张杰</td>
                        <td>20</td>
                        <td>男</td>
                        <td>第2组</td>
                        <td>10000</td>
                        <td>13000</td>
                        <td>北京北京市东城区</td>
                        <td>
                          <a href="javascript:;" class="text-success mr-3"><i class="bi bi-pen"></i></a>
                          <a href="javascript:;" class="text-danger"><i class="bi bi-trash"></i></a>
                        </td>
                      </tr> -->
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

</style>