 const myproject = artifacts.require('./myproject.sol')

contract('myproject', (accounts) => {
  it('initializes with the correct value', async () => {
    const myproject = await myproject.deployed()
    const value = await myprojet get()
    assert.equal(value, 'myValue')
  })

  it('can update the value', async () => {
    const myproject = await myproject.deployed()
    myproject.set('New Value');
    const value = await myproject.get()
    assert.equal(value, 'New Value')
  })
})