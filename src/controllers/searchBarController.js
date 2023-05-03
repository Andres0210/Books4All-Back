const {User, Book } = require("../DB_connection");
const {Op} = require ('sequelize')

const globalSearch =  async (searchValue) => {



    const results = {
        books: [],
        users: [],
    }

    if(searchValue.length === 0){ 
        results.books =[];
        results.users =[];
        return results;
    }

    searchValue = searchValue.charAt(0).toUpperCase() + searchValue.slice(1).toLowerCase();



     results.books = await Book.findAll({
        where: {
            title : {
            [Op.like] : `%${searchValue}%`
            },
            active: true
        }
    })

    results.users = await User.findAll({
        where: {
            name : {
            [Op.like] : `%${searchValue}%`
            },
            active: true
        }
    })

    return results;

}



module.exports = {
    globalSearch,
}