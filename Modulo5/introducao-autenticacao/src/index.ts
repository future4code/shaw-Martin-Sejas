import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'

app.post('/user/signup', createUser)
app.put('/user/edit/:id', editUser)
app.post('/user/login')