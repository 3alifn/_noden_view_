const { app, express } = require("../server")
const { admin_result_push, admin_result_pull, admin_result_put, admin_result_pop } = require("../apps/_app_result_system")
const route= express.Router()
// result system route
// user/section/event/whereClouse
route.get('/admin/result/pull', admin_result_pull) // use for fetch data from database
route.get('/admin/result/push', admin_result_push) // use for insert data at database
route.get('/admin/result/put/10', admin_result_put) // use for update data at database
route.get('/admin/result/pop/10', admin_result_pop) //use for delete data from database