import { request } from './request'

// przykładowa klasa api do jednego resource
// w oparciu o abstract request
class YourApiToUsers {
	constructor() {
		this.route = '/users'
		// więcej opcji jak security, proxy, transformacje inne,
	}
	// weź wszystkie lub wg filtra
    getAllUsers(filter=null){
        const url = this.route
        const config = {
			method:'GET',
			query:{
				filter
			}
        }
		return request(url, config)
	}
	// weź jeden wg id
	getOneUser(userId){
        const url = this.route
        const config = {
			method:'GET',
			query:{
				userId
			}
        }
		return request(url, config)
	}
	// dodaj nowy 
	addUser(user) {
        const url = this.route
		const config = {
			method: 'POST',
			data:{
				...user
			}
		}
		return request(url, config)
	}
	// usuń wg id
	deleteUser(userId) {
        const url = this.route
		const config = {
			method: 'DELETE',
			query:{
				userId
			}
		}
		return request(url, config)
	}
	// uaktualnij wg id i partialData
	updateUser(userId, partialUser) {
        const url = this.route
		const config = {
			method: 'PUT',
			query:{
				userId
			},
			data:{
				...partialUser
			}
		}
		return request(url, config)
	}
}

const YourApiToUsers = new YourApiToUsers()

export default YourApiToUsers
