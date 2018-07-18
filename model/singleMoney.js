const { select } = require('../mysql');
const { USERS_SELECT_ALL, LOGS_SELECT_SINGLEMONEY } = require('../mysql/sql');
async function dealMysql(res) {
    let allUsers = await select(USERS_SELECT_ALL, [])
    let resArr = allUsers.map(item => {

    })
    for (let item of allUsers) {
        let singlemoneyInfo = await select(LOGS_SELECT_SINGLEMONEY, [item.userid])
        let sum = singlemoneyInfo.reduce((pre + next.singleMoney, 0))
        item.singlemoney = sum + item.moneybase;
        return item
    }
    res.send({ msg: '成功', code: 1, data: allUsers })
}
module.exports = (req, res, next) => {
    dealMysql(res);
}