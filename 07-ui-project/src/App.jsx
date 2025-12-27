import section1 from './components/section1/section1'
import section2 from './components/section2/section2'

const App = () => {

  const users = [
    { img: 'https://plus.unsplash.com/premium_photo-1670884442253-8d0682dca1f9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', intro: '', tag:'Satisfied'},
    { img: 'https://images.unsplash.com/photo-1653762384105-e0c693636509?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', intro: '', tag: 'Underserved'},
    { img: 'https://plus.unsplash.com/premium_photo-1670264779196-f2e4ddbc0b00?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', intro: '', tag: 'Underbanked'}
  ]

  return (

    <div>
      {section1(users) }
      
      {section2() }
    </div>
  )
}

export default App
