
module.exports = (ee) => {
    ee.on('some-event', () => {
        console.log('Some Event occurred!. I am ev2')
    })
}