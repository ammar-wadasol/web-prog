import Left from './Sub/sub1'
import Right from './Sub/sub2'

function Main() {

  const persons = [
    { name: 'ali', age: 20 },
    { name: 'one', age: 21 },
    { name: 'two', age: 22 },
    { name: 'three', age: 22 },
    { name: 'four', age: 23 },
  ]

  return (
    <div className='flex justify-between w-full'>
      <Left />
      <div >
        {
          persons.map(item => <p>{item.name} is {item.age} years old</p>)
        }
        {/* <p>my id is {result.id}</p>
        <p>my title is {result.title}</p> */}
      </div>
      <Right></Right>
    </div>
  )
}

export default Main
